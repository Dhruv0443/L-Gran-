const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const db = require("./db");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "Dhruv@#1234",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.get("/menu", async (req, res) => {
  try {
    const vegDishes = await fetchDataFromTable("veg_dish");
    const tavaItems = await fetchDataFromTable("tava");
    const riceItems = await fetchDataFromTable("rice");
    const snacks = await fetchDataFromTable("snacks");

    res.json({ vegDishes, tavaItems, riceItems, snacks });
  } catch (error) {
    console.error("Error fetching menu data:", error);
    res.status(500).send("Internal Server Error");
  }
});

const fetchDataFromTable = async (tableName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = `SELECT * FROM ${tableName}`;
      const result = await db.execute(query);
      resolve(result[0]); // Assuming result is an array with the data
    } catch (err) {
      reject(err);
    }
  });
};

app.post("/SignUp_submit", async (req, res) => {
  try {
    // Extract data from the request body
    const { name, phone, email, password } = req.body;

    // TODO: Perform any necessary validation on the input data
    //Name should be only consist of characters and there can be space also.
    // first letter of email should be character
    // password first letter should be character and should be of length 8-16 also there should be a upper case a lower case and a speacial char and a number
    // phone number should min length of 10
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(name)) {
      return res.status(400).send({ error: "Invalid name format" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).send({ error: "Invalid email format" });
    }

    if (!passwordRegex.test(password)) {
      return res.status(400).send({ error: "Invalid password format" });
    }

    if (!phoneRegex.test(phone)) {
      return res.status(400).send({ error: "Invalid phone number format" });
    }

    // Insert user data into the database using promises
    const [results, fields] = await db.execute(
      "INSERT INTO users (full_name, email, phone_number, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, password]
    );
    // Respond with success message
    res.send({ message: "Sign Up Successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post("/login_submit", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const [results, fields] = await db.execute(
      "SELECT * FROM users WHERE LOWER(email) = LOWER(?) AND password = ?",
      [email, password]
    );

    console.log("User found:", results);

    if (results.length > 0) {
      req.session.userId = results[0].user_id;
      console.log(req.session);
      res.send({ success: true, message: "Login successful" });
    } else {
      res.send({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post("/contact_submit", async (req, res) => {
  const { name, phone, email, msg } = req.body;

  const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!nameRegex.test(name)) {
    return res.status(400).send({ error: "Invalid name format" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).send({ error: "Invalid email format" });
  }

  if (!phoneRegex.test(phone)) {
    return res.status(400).send({ error: "Invalid phone number format" });
  }

  try {
    // Insert the contact form data into the 'contact_us' table
    db.query(
      "INSERT INTO contact_us (full_name,phone, email, message) VALUES (? ,? ,?, ?)",
      [name, phone, email, msg]
    );

    res.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const requireLogin = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    // Send a response with a specific status code for redirect
    res.status(401).send({ redirectToLogin: true });
  }
};

app.post("/Booking_submit", requireLogin, async (req, res) => {
  try {
    const { name, email, people, time, date, phone } = req.body;

    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const validPeopleRange = { min: 2, max: 10 };
    const validTimeRange = { start: 10, end: 22 }; // 10am to 10pm

    if (!nameRegex.test(name)) {
      return res.status(400).send({ error: "Invalid name format" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).send({ error: "Invalid email format" });
    }

    if (!phoneRegex.test(phone)) {
      return res.status(400).send({ error: "Invalid phone number format" });
    }

    if (
      isNaN(people) ||
      people < validPeopleRange.min ||
      people > validPeopleRange.max
    ) {
      return res
        .status(400)
        .send({
          error: `Number of people must be between ${validPeopleRange.min} and ${validPeopleRange.max}`,
        });
    }

    const parsedTime = parseInt(time);
    if (
      isNaN(parsedTime) ||
      parsedTime < validTimeRange.start ||
      parsedTime > validTimeRange.end
    ) {
      return res
        .status(400)
        .send({
          error: `Invalid time. It must be between ${validTimeRange.start} and ${validTimeRange.end}`,
        });
    }

    console.log(req.body);

    const sql =
      "INSERT INTO bookings (full_name, email, booking_date, booking_time, phone_number, number_of_people) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, email, date, time, phone, people];

    const [results, fields] = await db.execute(sql, values);

    console.log("Booking results:", results);

    res.send({ success: true, message: "Booking successful" });
  } catch (error) {
    console.error("Booking error:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
