import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage14() {
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr "style={styles.accordionHeader}>
                Prerana v State of Maharashtra [2002 SCC OnLine BOM 984]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  After a police raid on a brothel rescued 24 women and girls, a
                  magistrate ordered medical examination and released adult
                  women while directing minor girls to be released based on
                  their expressed desire. The Bombay High Court held this
                  violated the Juvenile Justice Act, as only a Child Welfare
                  Board is authorized to decide on the release and
                  rehabilitation of minors. It issued guidelines for courts
                  handling cases involving girls removed from brothels.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Bombay High Court analysed provisions of the Juvenile
                  Justice (Care and Protection of Children) Act 2000,
                  particularly Section 2(d)(vi) defining children in need of
                  care and protection, Section 29 regarding the Child Welfare
                  Committee constitution, and Section 31 establishing the
                  Committee's final authority. The Court also interpreted the
                  Immoral Traffic (Prevention) Act 1956, specifically Sections
                  15 and 16.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The case established that only Child Welfare Committees, not
                  regular magistrates, have jurisdiction to decide on the
                  release and rehabilitation of minor girls rescued from
                  brothels, emphasising that minors rescued from trafficking are
                  “children in need of care and protection” rather than
                  offenders.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The judgment established crucial procedural safeguards for
                  trafficking victims, prohibited advocates from representing
                  both traffickers and victims in the same case, mandated that
                  rescued minors can only be released to fit parents/guardians
                  after proper inquiry by Probation Officers, while emphasising
                  that the primary focus should be on rehabilitation rather than
                  punishment of the child victims.
                </p>

                

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://indiankanoon.org/doc/380556/"
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

export default LandmarkPage14;
