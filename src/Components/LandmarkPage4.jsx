import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage4() {
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Rishipal Singh Solanki v. State of U.P [2021 SCC OnLine SC 1079]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The accused raised a claim of juvenility under Section 94 of
                  the JJ Act, 2015. The issue was whether Section 94 prescribes
                  a strict evidentiary hierarchy (documentary evidence first,
                  medical evidence only if unavailable) or whether courts have
                  discretion in this regard. The Supreme Court held that Section
                  94 is procedural, not substantive. It does not impose a rigid
                  rule but merely provides guidance. Courts and Juvenile Justice
                  Boards must consider the totality of evidence, including
                  school records, birth certificates, and medical opinion, to
                  determine age.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Sections 2(35) and 95 of the Juvenile
                  Justice (Care and Protection of Children) Act, 2015.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The court held that Section 94 must be interpreted flexibly to
                  advance the beneficial object of juvenile justice law. The
                  court stated that while documentary evidence is generally
                  preferred, if doubts remain, medical evidence can be
                  considered for the purposes of determining the age of a
                  juvenile. By and large, the courts retain discretion about
                  which test to use and are not bound by a rigid evidentiary
                  straitjacket.
                </p>
                

                 <a
                  href="https://indiankanoon.org/doc/190473838/"
                  className="link aboutpara fw-bold fs-6"
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

export default LandmarkPage4;
