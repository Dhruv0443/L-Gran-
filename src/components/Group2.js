import React from "react";
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";

export const Group2 = () => {
    return(
        <div className="group2">
    <section id="aboutus p-4">
        <div className="container text-center aboutus_banner">
            <div className="row no-gutters row_css">
                <div className="col-4 ">
                    <img className="aboutus_shape1" src={shape_10} alt="" width="63" height="17"/>
                </div>
                <div className="col-4">
                    <p className="aboutus_heading"><span className="aboutus_heading1">About </span>
                    <span className="aboutus_heading2">L’G</span><span className="aboutus_heading3">ran</span></p>
                </div>
                <div className="col-4">
                    <img className="aboutus_shape2" src={shape_9} alt="" width="63" height="17"/>
                </div>
                <div className="col-sm-12">
                    <p className="aboutus_para">
                    Welcome to <span className="aboutus_heading2">L’G</span><span className="aboutus_heading3">ran</span>– a culinary journey that transcends the ordinary and brings you an unforgettable dining experience. Nestled in the heart of  Your restaurant is more than just a place to eat; it's a destination for food lovers and a haven for those seeking remarkable flavors and warm hospitality
                        </p>
                </div>
                <div className="col-sm-12">
                    <p className="aboutus_end">Visit OR Book <span className="aboutus_now"><a className="aboutus_now" href="/Booking">NOW</a></span></p>
                </div>
            </div>
        </div>
    </section>
    </div>
    )
}