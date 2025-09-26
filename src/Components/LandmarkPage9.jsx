import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage9() {
   const styles = {
   
    accordionHeader: {
      background: "#ffc107",
      color: "#0a2c5f",
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr"style={styles.accordionHeader}>
                Prahalad Gaur v. State of U.P. [2009 Cri LJ 153]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  A criminal case was registered against a minor for murder
                  under Section 302 of the IPC. He was apprehended and produced
                  before the JJB. It is to be noted that he was one of the many
                  co-accused in the offence but had no prior criminal record. He
                  moved an application of bail to the JJB and Sessions Court
                  consequentially. However, his application was rejected
                  uniformly on the grounds that there is a likelihood the
                  juvenile may be brought into the association of criminals. The
                  Allahabad HC granted bail to the minor, reasoning that the
                  standard for the same had not been met.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Section 12 of the Juvenile Justice (Care
                  and Protection of Children) Act, 2015 dealing with the
                  procedure and grounds for bail. It pertained to Section 12(a)
                  which permits refusal of bail if release is likely to bring
                  the juvenile into ‘association with criminals.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  A single instance of a child delinquent joining the company of
                  known criminals would not be sufficient to satisfy the
                  definition of ‘association’ under Section 12. The past conduct
                  of the child must indicate continuous association with known
                  criminal or criminals, and must give an impression that they
                  would continue to join them in the future.
                </p>
              </div>
              <div className="main mt-4">
             

              

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.casemine.com/judgement/in/56b491dc607dba348fffd480"
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

export default LandmarkPage9;
