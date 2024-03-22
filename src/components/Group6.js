import { useState } from "react";
import axios from 'axios';
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";

export const Group6 = () => {
  const[contactdata, setcontactdata]=useState({name:'',phone:'',email:'',msg:''});
  const[contactmsg,setcontactmsg]=useState(" ");

  const sendContactData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/contact_submit', contactdata)
      .then(response => {
        if (response.status === 200) {
          // Access the 'msg' property directly
          let d = response.data;
          setcontactmsg(d.message);
          // Clear the form after successful submission
          setcontactdata({ name: '', phone: '', email: '', msg: '' });
        } else {
          setcontactmsg("Error submitting the form");
        }
      })
      .catch(error => {
        console.error('Error:', error.msg);
        setcontactmsg("Invalid Data");
      });
  };
  return (
    <>
      <div id="Contact" className='contact_banner'>
        <div className="container ">
          <div className="row">
            <div className="col-sm-12">
              <br />
            </div>
            <div className="col-3">
              <img
                className="gallery_shape1"
                src={shape_10}
                alt=""
                width="63"
                height="17"
              />
            </div>
            <div className="col-6">
              <p className="gallery_heading">CONTACT US</p>
              <br />
            </div>
            <div className="col-3">
              <img
                className="gallery_shape2"
                src={shape_9}
                alt=""
                width="63"
                height="17"
              />
            </div>
            <div className="log">
            <div className="row">
              <div className="col-lg-2 col-sm-2"></div>
              <div className="col-lg-8 col-sm-8 contact_subhead p-4 pb-3">
                Want to get in touch?
                <br />
                We would love to hear from you.Here's how you can reach us....
              </div>
              <div className="col-lg-2 col-sm-2"></div>
            </div>
            <form>
              <div className="row p-5 pt-2">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 p-2 pb-3 ">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contactdata.name}
                    onChange={(e) =>
                      setcontactdata({ ...contactdata, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-sm-3"></div>
                <div className="col-sm-3"></div>
                <div className="col-sm-6 p-2 pb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    value={contactdata.phone}
                    onChange={(e) =>
                      setcontactdata({ ...contactdata, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-sm-3"></div>
                <div className="col-sm-3"></div>
                <div className="col-sm-6 p-2 pb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={contactdata.email}
                    onChange={(e) =>
                      setcontactdata({ ...contactdata, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-sm-3"></div>
                <div className="col-sm-3"></div>
                <div className="col-sm-6 p-2">
                  <input
                    type="text"
                    className="form-control msg"
                    placeholder="Message"
                    value={contactdata.msg}
                    onChange={(e) =>
                      setcontactdata({ ...contactdata, msg: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-sm-3"></div>
                <div className="col-sm-7"></div>
                <div className="col-sm-3">
                  <button
                    type="submit"
                    className="butto"
                    onClick={sendContactData}
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </form>
            </div>
            <div>
              <h4>{contactmsg}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};