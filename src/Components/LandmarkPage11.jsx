import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage11() {
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
                Puneet S. v. State of Karnataka (2019 SCC OnLine Kar 1835)
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  In this case, the Karnataka High Court addressed the question
                  of who has the authority to decide whether an offence
                  committed by a juvenile is “heinous.” The Court held that this
                  determination lays exclusively with the Juvenile Justice Board
                  (JJB), which must conduct a preliminary assessment under
                  Section 15 of the JJ Act, 2015, before deciding whether the
                  child should be tried as an adult.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Section 2(33), 14, 15, and 18(3) of the
                  Juvenile Justice (Care and Protection of Children) Act, 2015.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The legal principle established was that police or ordinary
                  magistrates cannot decide if an offence by a child is
                  “heinous,” since the JJ Act entrusts this responsibility to
                  the JJB.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The impact of this ruling was to strengthen the role of the
                  JJB as the sole authority in determining whether a juvenile
                  can face trial as an adult, thereby ensuring greater
                  protection for children and preventing premature or arbitrary
                  categorisation by police or other courts, in line with the
                  rehabilitative and welfare-oriented objectives of the Act.
                </p>
                

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://indiankanoon.org/doc/1849142/"
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

export default LandmarkPage11;
