import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router";


function MarqueeComponent() {
   const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  return (
    <Marquee
      pauseOnHover={true}
      style={{ backgroundColor: "#ffc107", color: "#0f2c59",fontSize:"1.1rem",fontWeight:500,padding:"10px 0px" }}
    >
      <i className="fa fa-caret-right me-1"></i> <a href="/childrenjustice" onClick={() => navigation("/marquefirst")} style={{textDecoration:'none',color:'#0f2c59'}}>Call for applications for the NLUD-UNICEF Justice for Children Fellowship</a> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;  &#10020; <a hreff="/quarterly_newspaper"onClick={() => navigation("/marquefirst")} style={{textDecoration:'none',color:'#0f2c59',cursor:'pointer'}}>Call for
Submissions for the UNICEF Chair Quarterly Newsletter</a>
    </Marquee>
  );
}

export default MarqueeComponent;
