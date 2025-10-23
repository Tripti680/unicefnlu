import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function FellowshipRequirement() {
  const styles = {
    accordionHeader: {
      background: "#ffc107",
      color: "#0a2c5f",
      padding: "15px 7px",
      fontSize: "22px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
    accordionHeaderblue:{
   
      background: "#0a2c5f",
      color: "#fff",
      padding: "15px 7px",
      fontSize: "22px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    }
  };

  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row m-1">
            <div className="col-12 px-lg-4">
              <h2
                className=" mt-3 fs-1 bluetxt yellowclr px-2"
                style={styles.accordionHeader}
              >
               NLUD Justice for Children Research Fellowship
              </h2>

              <h5  className=" mt-3  px-1" 
               >Established under the aegis of the NLUD Chair on Justice for children in collaboration with UNICEF</h5>
                 <h5  className=" mt-3  "  style={styles.accordionHeaderblue}
               >CALL FOR APPLICATIONS </h5>


              <div className="main mt-4 px-1">
                <p className="aboutpara">
                  <span className=" text-decoration-underline">Employment type</span>: Contractual. Full-time.{" "}
                </p>
                <p className="aboutpara">
                  <span className=" text-decoration-underline">Time period</span>: Nine months
                  starting Dec 15, 2025{" "}
                </p>
              
                 <p className="aboutpara">
                  <span className=" text-decoration-underline">Location</span>: National Law
                  University Delhi{" "}
                </p>
                  <p className="aboutpara">
                  <span className=" text-decoration-underline">Stipend</span>: INR 50,000/- per month
                </p>
                <p className="aboutpara">
                  <span className=" text-decoration-underline">Application Deadline</span>:
                  November 15, 2025{" "}
                </p>
                <p className="aboutpara">
                  <span className=" text-decoration-underline">Qualifications</span>: Law Graduate
                  (LL.B. or B.A.LL.B.){" "}
                </p>
                <p className="aboutpara  ">Essential requirements -</p>
                <ul className="aboutpara">
                  <li>
                    {" "}
                    updated knowledge of substantive and procedural child rights
                    law, including POCSO and JJ Act;{" "}
                  </li>
                  <li>
                    experience showing demonstrable work in child rights
                    research;
                  </li>
                  <li> efficiency in legal writing; </li>
                  <li>proficiency in English;</li>
                  <li> proficiency in the use of MS Word and PowerPoint</li>
                </ul>

                <p className="aboutpara ">Desirable requirements -</p>
                <ul className="aboutpara">
                  <li>
                    {" "}
                    an LLM or an equivalent Master’s degree in Law, Social
                    Science, or other related fields;{" "}
                  </li>
                  <li>
                    {" "}
                    proficiency in the use of MS Excel, AI tools, and graphic
                    design tools;
                  </li>
                  <li> proficiency in social media outreach </li>
                </ul>

                <p className="aboutpara">
                  <span className=" text-decoration-underline">How to apply</span>:
                  Complete the Google form available <a href="https://forms.gle/xZEXpTFqN1y14Md18" target="_blank">here</a>. Please do not submit
                  any application materials by post or email.
                </p>
                <p className="aboutpara ">
                  Only shortlisted candidates will be contacted, and advance to
                  the interview stage of the selection process.
                </p>

                <p className="aboutpara ">
                  <span className=" text-decoration-underline">Contact for queries</span>:
                  unicefchair@nludelhi.ac.in
                </p>
                <p className="aboutpara">
                  <span className=" text-decoration-underline">About the Fellowship: </span>
                 The NLUD Justice for Children Fellowship, supported by UNICEF, is a
                  flagship program for young graduates committed to research on
                  issues surrounding access to justice for children in need of
                  care and protection, and children in conflict with the law.
                  The Research Fellowship aims at building a body of
                  well-researched and accessible scholarship on issues of child
                  rights within the Indian criminal justice system.
                </p>
                <p className="aboutpara">
                  <span className=" text-decoration-underline">Deliverables</span>:
                  The research fellows will be expected to contribute
                  scholarship to the publication of:
                </p>

                <p className="aboutpara ">
                  {" "}
                  (1) NLUD Chair Quarterly Newsletter supported by UNICEF{" "}
                </p>
                <ul className="aboutpara">
                  <li>
                    {" "}
                    Legal developments, including policy changes, amendments to
                    the law, and judicial decisions.
                  </li>
                  <li>
                    Opinion pieces including interviews with child rights
                    experts and actors (judges, lawyers, police officers,
                    activists, academics, etc.)
                  </li>
                  <li>
                    {" "}
                    Notes from the field which highlight the experiences,
                    successes and challenges of child rights litigation in India
                    based on real-time data collected through the NLUD-UNICEF
                    Justice for Children Litigation Fellowship.
                  </li>
                </ul>

                <p className="aboutpara ">
                  {" "}
                  (2)	NLUD Chair White Paper Series supported by UNICEF on Implementation of the POCSO 
                </p>
                <ul className="aboutpara">
                  <li>
                    A series of white papers based on the an analyses of Case
                    Orders on Protection of Children from Sexual Offences Act,
                    2012. This series seeks to understand the challenges and
                    recommend promising practices within the implementation of
                    the law.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FellowshipRequirement;
