import React from "react";
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";

export const Group3 = () => {
    return(
        <div className="group3">
        <section id="menu">
            <div className="container menu_banner">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 col-xs-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-2 ps-0 pe-0">
                                    <img className="aboutus_shape1" src={shape_10} alt="" width="63" height="17"/>
                                </div>
                                <div className="col-8 ps-0 pe-0">
                                    <p className="aboutus_heading menu_heading">OUR QUALITY FOOD</p>
                                </div>
                                <div className="col-2 ps-0 pe-0">
                                    <img className="aboutus_shape2" src={shape_9} alt="" width="63" height="17"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 menu_para col-xs-12">
                    At <span className="aboutus_heading2">L’G</span><span className="aboutus_heading3">ran</span>–, we take pride in serving food of the highest quality. Our commitment to excellence begins with the selection of premium, locally sourced ingredients and extends to the skill and passion of our chefs.
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 col-xs-12 menu_seconddiv">
                        <p className="menu_second"><span className="text-style">Double The Fun</span><br/>On Every Saturday</p>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 col-xs-12 menu_thriddiv">
                        <p className="end_para">GET UPTO 50% DISCOUNT</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}