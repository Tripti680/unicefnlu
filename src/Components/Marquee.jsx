import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


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
      <i className="fa fa-caret-right me-1"></i> <Link to="/fellowshiprequirement" style={{textDecoration:'none',color:'#0f2c59',cursor:'pointer'}}>Call for applications for the NLUD Justice for Children Fellowship</Link> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;  &#10020; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;<Link to="/marquefirst" style={{textDecoration:'none',color:'#0f2c59',cursor:'pointer'}}>Call for
Submissions for the NLUD Chair Quarterly Newsletter</Link>
    </Marquee>
  );
}

export default MarqueeComponent;
