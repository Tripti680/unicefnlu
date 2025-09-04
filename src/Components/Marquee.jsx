import React from "react";
import Marquee from "react-fast-marquee";


function MarqueeComponent() {
  return (
    <Marquee
      pauseOnHover={true}
      style={{ backgroundColor: "#ffc107", color: "#0f2c59",fontSize:"1.1rem",fontWeight:500,padding:"10px 0px" }}
    >
      <i className="fa fa-caret-right me-1"></i> Call for applications for the NLUD-UNICEF Justice for Children Fellowship &nbsp; &#10020; Call for
Submissions for the UNICEF Chair Quarterly Newsletter
    </Marquee>
  );
}

export default MarqueeComponent;
