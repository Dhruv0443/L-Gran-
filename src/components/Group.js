import React from "react";
import place_your_logo_here_doub_3 from "../images/place_your_logo_here_doub_3.png";

export const Group = () => {
    return(
        <div className="group1">
       


        <section id="home">
            <div className="container-fluid px-0 top-banner">
            <div className="container home_content">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <h1 className="main_heading">START YOUR MEAL WITH<br/>OUR EXCLUSIVE MENU</h1>
                        <h2 className="main_subheading"><a href="/menu" className="main_subheading">LEARN MORE...</a></h2>
                        <div><img src={place_your_logo_here_doub_3} className="main_logo" alt=""/></div>
                        <br/>
                        <p className="book_button" ><a className="book_button" href="/Booking">Book</a><br/></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}