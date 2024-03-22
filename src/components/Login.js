import { useState } from 'react';
import axios from 'axios';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


import '../sign_style.css';
const Login = () => {
  const [userdata, setuserdata] = useState({
    email: '',
    password: '',
  });
  const [usermsg, setusermsg] = useState('');


  async function senduserdata(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login_submit', userdata, { withCredentials: true });

      if (response.data.success) {
        setusermsg(response.data.message);
        // Optionally, you can perform any navigation or state updates for a successful login
      } else {
        setusermsg(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setusermsg('An error occurred during login');
    }
  }

    return (
      <>
        <Navbar />
        <div className="container-fluid bg-image">
          <div className="row">
            <div className="col-sm-12">
              <br />
              <br />
            </div>
            {/* <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                    <img src={require("../images/login.png")}/>
                    </div>
                    <div className='col-sm-2'></div> */}
            <div className="col-sm-12">
              <br />
            </div>
          </div>

          <form>
            <div className="row p-4 pt-2">
              <div className="col-sm-3"></div>
              <div className="col-sm-6 p-2 pb-3">
                <br />
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-6 p-2"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-6 p-3 pt-5 pb-5 log">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) =>
                    setuserdata({ ...userdata, email: e.target.value })
                  }
                  required
                />
                <br />
                <br />
                <input
                  id="Password"
                  name="Password"
                  type="Password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) =>
                    setuserdata({ ...userdata, password: e.target.value })
                  }
                  required
                />
                <br />
                <br />
                <p>
                  Doesn't have an Account?{" "}
                  <a className="link" href="/SignUp">
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-6 p-2"></div>
              <div className="col-sm-3"></div>
              <div className="col-sm-2"></div>
              <div className="col-sm-8"></div>
              <div className="col-sm-2"></div>
              <div className="col-sm-7"></div>
              <div className="col-sm-5">
                <button className="butto" type="submit" onClick={senduserdata}>
                  Login
                </button>
              </div>
            </div>
          </form>
          <div>
            <h4>{usermsg}</h4>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Login;
