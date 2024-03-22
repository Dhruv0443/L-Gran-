import { Fragment, useState } from 'react';
import { Navbar } from "./Navbar";
import {Footer} from './Footer';
import '../sign_style.css';
import axios from 'axios';
const SignUp = () => {
  const [userdata, setuserdata] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [usermsg, setusermsg] = useState('');

  const senduserdata = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/SignUp_submit', userdata)
      .then(response => {
        if (response.status === 200) {
          let d = response.data;
          setusermsg(d.message); // Update to d.message instead of d.msg
        } else {
          setusermsg('Error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setusermsg('Invalid Data');
      });
  };

    return (
      <>
        <Fragment>
          <Navbar />
          <div className="container-fluid bg-image">
            <div className="row">
              <div className="col-sm-12">
                <br />
                <br />
                <br />
              </div>
              {/* <div className='col-sm-4'>&nbsp;</div>
                        <div className='col-sm-4'>
                        <img className='abc' src={require("../images/Signup.png")}/>
                        </div>
                        <div className='col-sm-4'></div> */}
              <div className="col-sm-12">
                <br />
                <br />
              </div>
            </div>

            <form>
              <div className="row p-5 pt-2">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 p-2 pt-3 log pb-3">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) =>
                      setuserdata({ ...userdata, name: e.target.value })
                    }
                    required
                  />
                  <br />
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
                  <input
                    id="Phone"
                    name="Phone"
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={(e) =>
                      setuserdata({ ...userdata, phone: e.target.value })
                    }
                    required
                  />
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
                  <p>
                    Already have an Account?{" "}
                    <a href="/Login" className="link">
                      Login
                    </a>
                  </p>
                </div>

                <div className="col-sm-3"></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-8"></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-7"></div>
                <div className="col-sm-5">
                  <button
                    className="butto"
                    type="submit"
                    onClick={senduserdata}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div>
              <h4>{usermsg}</h4>
            </div>
          </div>
          <Footer />
        </Fragment>
      </>
    );
};

export default SignUp;
