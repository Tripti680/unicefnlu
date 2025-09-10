import React from "react";
import Images from "../assets/images";

function Banner() {
  return (
    <section className="banner">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <div className="banner-box text-center text-lg-start  ">
              <h2
                className="my-4 fw-bold"
                style={{
                  fontSize: "clamp(28px, 6vw, 70px)", // responsive font size
                  lineHeight: "1.2",
                  paddingLeft:'128px'
                }}
              >
                UNICEF Chair on Justice for Children
                <br />
              <span style={{
                  fontSize: "clamp(28px, 6vw, 55px)", // responsive font size
                 
                }} > National Law University Delhi</span>
              </h2>
              <img
                src={Images.banner}
                alt="Banner"
                className="img-fluid w-100"
                style={{ maxHeight: 400,  }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
