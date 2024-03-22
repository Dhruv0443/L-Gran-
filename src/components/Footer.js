import React from "react";
import vector_smart_object61_dou from "../images/vector_smart_object61_dou.png";
import vector_smart_object51_dou from "../images/vector_smart_object51_dou.png";
import vector_smart_object41_dou from "../images/vector_smart_object41_dou.png";
import vector_smart_object71_dou from "../images/vector_smart_object71_dou.png";

export const Footer = () =>{
    return (
      <div className="group8">
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 footer_imgdiv">
                {/* <img
                  className="footer_logo"
                  src={place_your_logo_here_doub}
                  alt=""
                  width="248"
                  height="105"
                /> */}
              </div>
              <div className="col-12 footerlinks mt-2 mb-2">
                <div className="container text-center">
                  <div className="row">
                    <div className='col-sm-2'></div>
                    <div className="col-sm-7">
                      <nav className="nav justify-content-center">
                        <a className="nav-link footer_link  " href="/about">
                          About US
                        </a>
                        <a className="nav-link footer_link  " href="/Booking">
                          BOOKING
                        </a>
                        <a className="nav-link footer_link  " href="/menu">
                          Menu
                        </a>
                        <a className="nav-link footer_link" href="/contact">
                          CONTACT US
                        </a>
                        <a className="nav-link footer_link" href="/Login">
                          Login
                        </a>
                      </nav>
                      
                        <nav className="nav justify-content-center">
                          <a
                            className="nav-link footer_link  "
                            href="https://www.facebook.com/"
                          >
                            <img
                              className="footericons image-fluid"
                              src={vector_smart_object41_dou}
                              alt=""
                              width="40"
                              height="40"
                            />
                          </a>
                          <a
                            className="nav-link footer_link  "
                            href="https://twitter.com"
                          >
                            <img
                              className="footericons image-fluid"
                              src={vector_smart_object51_dou}
                              alt=""
                              width="40"
                              height="40"
                            />
                          </a>
                          <a
                            className="nav-link footer_link"
                            href="https://www.instagram.com/"
                          >
                            <img
                              className="footericons image-fluid"
                              src={vector_smart_object61_dou}
                              alt=""
                              width="40"
                              height="40"
                            />
                          </a>
                          <a className="nav-link footer_link" href="https://www.gmail.com">
                            <img
                              className="footericons image-fluid"
                              src={vector_smart_object71_dou}
                              alt=""
                              width="40"
                              height="40"
                            />
                          </a>
                        </nav>
                     
                    </div>
                    <div className="col-sm-3">
                    
                      +91 343-325-4352<br/>
                      4460, D.C. Road,<br/>
                      Sadar Bazzar, Ambala -133001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <center>Made By :- Dikshant(2110990449) , Dhruv Jain (2110990443)</center>
          </div>
        </section>
      </div>
    );
}