import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage7() {

   const styles = {
   
    accordionHeader: {
      background: "#0a2c5f",
      color: "#fff",
      padding: "15px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
  
  };
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr" style={styles.accordionHeader}>
                Bhola Bhagat Vs. State of Bihar, [1997] 8 SCC 236
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  A group of minors had raised a plea of juvenility at the time
                  of the commission of an offence. The trial court, relying on
                  its own age estimates and without conducting a proper inquiry
                  tried them as adults, depriving them of benefit under the
                  Bihar Children Act, 1982 and Juvenile Justice Act, 1986. In
                  appeal, the HC dismissed the claim for juvenility since they
                  was insufficient supporting evidence to suggest they were
                  juveniles, without ordering an inquiry to determine their age.
                  The SC held that if there is any doubt as to the accused’s age
                  the court is obliged to investigate and record a finding. The
                  court then quashed the sentences of the minors, while
                  upholding their conviction
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The legal provisions in question in were the Section 2 of the
                  Bihar Children Act, 1982, which defines a ‘child’ and provides
                  for trial in juvenile courts and detention in approved schools
                  instead of adult prison for the same. Section 32 of the
                  Juvenile Justice Act, 1986 lays down the procedure when claims
                  of juvenility are made.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  When a person raises a plea of juvenility, the court cannot
                  rely solely on its own estimate or existing records; if there
                  is any doubt about the accused’s age, the court is obliged to
                  conduct an inquiry and record a finding. The conviction of a
                  minor under ‘adult law’ may be upheld, but the sentence
                  awarded must be quashed if the accused was a minor at the time
                  of the offence. It was also held that Juvenile justice
                  legislation must be interpreted keeping in mind its
                  welfare-oriented, reformative character. Courts should err on
                  the side of granting the benefit of doubt in favour of
                  juvenility consistent with Article 39(f) of the Constitution,
                  which protects conditions of ‘freedom and dignity’ for
                  children
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  It is now standard practice that any doubt about age triggers
                  a formal inquiry by the court in order to determination the
                  age of the minor.
                </p>
                

                <a
                  className="link aboutpara fs-6 aboutpara"
                  href="https://indiankanoon.org/doc/1020083/"
                  target="_blank"
                >
                  Click here for the full text of the judgement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandmarkPage7;
