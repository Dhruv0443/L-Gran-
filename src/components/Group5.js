import React, { useState } from "react";
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";
import "../style.css";
import axios from "axios";

export const Group5 = () => {
  const [bookingdata, setbookingdata] = useState({
    name: "",
    email: "",
    people: "",
    time: "",
    date: "",
    phone: "",
  });
  
  const [bookingmsg, setbookingmsg] = useState("");
  
  function sendbookingdata(e) {
    e.preventDefault();

    console.log("Sending data to server:", bookingdata);
    
    axios
    .post("http://localhost:8080/Booking_submit", bookingdata, {
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200) {
          let data = response.data;
  
          if (data.success) {
            // Assuming the backend sends a success message
            setbookingmsg(data.message);
          } else {
            // Assuming the backend sends an error message
            setbookingmsg(data.error || "Booking failed");
          }
        } else {
          setbookingmsg("Page not found");
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        if (error.response && error.response.status === 401) {
          // Redirect to login page if unauthorized
          window.location.href = "/login";
        } else {
          setbookingmsg("Invalid Input");
        }
      });
  }
  

  return (
    <div className="group5">
      <section id="booknow">
        <div className="container booknow_banner">
          <div className="row">
            <div className="col-sm-12">
              <br />
            </div>
            <div className="col-4">
              <img
                className="gallery_shape1"
                src={shape_10}
                alt=""
                width="63"
                height="17"
              />
            </div>
            <div className="col-4">
              <p className="gallery_heading">BOOK NOW</p>
            </div>
            <div className="col-4">
              <img
                className="gallery_shape2"
                src={shape_9}
                alt=""
                width="63"
                height="17"
              />
            </div>
            <div className="col-12">
              <p className="booknow_h2">
                Book Your Table Now And Have A Great Meal!
              </p>
            </div>
            <form onSubmit={sendbookingdata}>
              <div className="row p-3 pt-0 pb-0">
                <div className="col-sm-6  inputelement1">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">Your full name ?</p>
                      </div>

                      <input
                        type="text"
                        name="name"
                        value={bookingdata.name}
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            name: e.target.value,
                          })
                        }
                        className="input_i1  form-control"
                        placeholder="Write your name here..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 inputelement1">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">Your email address?</p>
                      </div>

                      <input
                        type="email"
                        name="email"
                        value={bookingdata.email}
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            email: e.target.value,
                          })
                        }
                        className="input_i1 form-control "
                        placeholder="Write Email Here..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 inputelement2">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">How many people ? <br/> (Min -2 , Max -10)</p>
                      </div>
                      {/* <div className="col-12 rectangle-holder"> */}
                      <input
                        type="number"
                        name="people"
                        required
                        value={bookingdata.people}
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            people: e.target.value,
                          })
                        }
                        className="input_i1 form-control"
                        placeholder="2 People"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  inputelement2">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">What time?<br/>(Between 10 am to 10 pm)</p>
                      </div>
                      <input
                        type="time"
                        name="time"
                        value={bookingdata.time}
                        placeholder="10:00"
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            time: e.target.value,
                          })
                        }
                        className="input_i1 form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  inputelement2">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">What is the date?</p>
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={bookingdata.date}
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            date: e.target.value,
                          })
                        }
                        placeholder="2024-01-14"
                        className="input_i1 form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  inputelement2">
                  <div className="container inputcontainer">
                    <div className="row">
                      <div className="col-12">
                        <p className="input_t1">Your phone number ?</p>
                      </div>
                      <input
                        type="number"
                        name="phone"
                        value={bookingdata.phone}
                        onChange={(e) =>
                          setbookingdata({
                            ...bookingdata,
                            phone: e.target.value,
                          })
                        }
                        className="input_i1 form-control"
                        placeholder="Write your number here..."
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <br />
                </div>
                <div className="col-sm-7"></div>
                <div className="col-sm-5">
                  {/* <a href="#" onClick={handleSubmit}>
                    <img
                      className="submit_img image-fluid"
                      src={vector_smart_object_doubl_2}
                      alt=""
                    />
                  </a> */}
                  <button
                    className="butto"
                    type="submit"
                  >
                    &emsp;BOOK&emsp;
                  </button>
                </div>
              </div>
            </form>
            <div>{bookingmsg}</div>
          </div>
        </div>
      </section>
    </div>
  );
};