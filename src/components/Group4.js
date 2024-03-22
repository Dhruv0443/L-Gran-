import React from "react";
import shape_10 from "../images/shape_10.png";
import shape_9 from "../images/shape_9.png";
import pic1 from "../Downloads/Vector Smart Object (1).png";
import pic2 from "../Downloads/Vector Smart Object (4).png";
import pic3 from "../Downloads/Vector Smart Object (2).png";
import pic4 from "../Downloads/Vector Smart Object (6).png";

export const Group4 = () => {
    return (
      <div className="group4">
        <section id="gallery">
          <div className="container gallery_banner">
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
                <p className="gallery_heading">GALLERY</p>
                <br />
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
              <div className="row gallery_imagecontainer">
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic1} alt="" />
                </div>
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic2} alt="" />
                </div>
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic3} alt="" />
                </div>
              </div>
              <div className="row gallery_imagecontainer">
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic2} alt="" />
                </div>
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic3} alt="" />
                </div>
                <div className="col-12 col-lg-3 gallery_imagediv grid">
                  <img className="gallery_image img-fluid" src={pic1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}