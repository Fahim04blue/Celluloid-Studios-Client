import React from "react";
import "./ExploreGallery.css";
import pic1 from "../../../images/G-1.jpg";
import pic2 from "../../../images/G-2.jpg";
import pic3 from "../../../images/G-3.jpg";
import pic4 from "../../../images/G-4.jpg";
import pic5 from "../../../images/G-5.jpg";
import pic6 from "../../../images/G-6.jpg";
import pic7 from "../../../images/G-7.jpg";
import pic8 from "../../../images/G-8.jpg";
import pic9 from "../../../images/G-9.jpg";
import pic10 from "../../../images/G-10.jpg";

const ExploreGallery = () => {
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 className="text-center mt-5 heading-txt">
        Explore Our <span className="heading-portion">Gallery</span>{" "}
      </h1>
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <img src={pic1} class="img-fluid" />
            <img src={pic2} class="img-fluid" />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <img src={pic9} class="img-fluid" />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <img src={pic4} class="img-fluid" />
            <img src={pic5} class="img-fluid" />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <img src={pic10} class="img-fluid" />
            <img src={pic8} class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGallery;
