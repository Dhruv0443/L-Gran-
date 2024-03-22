import React from "react";
import place_your_design_here_do from "../images/place_your_design_here_do.png";


export const Group8 = () => {
    return(
        <div className="group8">
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 footerelement1 footer_text">
                        <p className="footer_heading">Enjoy Our Best Meal</p>
                        <p className="footer_para">
                        "Savor the finest at . Quality ingredients, diverse menu, and impeccable presentation for an unforgettable dining experience."
                          </p>
                        <p className="footer_heading2"><a href="/contact" className="footer_heading2">CONTACT US NOW</a></p>
                    </div>
                    <div className="col-lg-6 col-12 footerelement1">
                        <img className="footer_img" src={place_your_design_here_do} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}