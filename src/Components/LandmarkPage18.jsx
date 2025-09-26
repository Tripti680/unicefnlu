import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage18() {
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Sampurna Behura v Union of India, (2018) 4 SCC 433
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  Social activist Sampurna Behura filed a PIL highlighting the
                  virtual non-implementation of the Juvenile Justice Acts of
                  2000 and 2015. This included failure to properly establish
                  Child Welfare Committees (CWCs), Juvenile Justice Boards
                  (JJBs), Special Juvenile Police Units (SJUs), and adequate
                  Child Care Institutions. The Supreme Court issued
                  comprehensive directions covering 16 key areas, including
                  ensuring proper staffing of National and State Commissions for
                  Protection of Child Rights, establishing child-friendly
                  courts, mandatory training for all stakeholders, use of
                  information technology, proper funding through the Juvenile
                  Justice Fund, and regular monitoring through the NALSA.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Supreme Court, in this case, analysed the constitutional
                  obligations under Articles 21 (Right to Life), 39(e)
                  (protection from economic exploitation), and 39(f) (child
                  protection and development opportunities) of the Constitution.
                  The Court interpreted the Juvenile Justice (Care and
                  Protection of Children) Acts of 2000 and 2015, Article 39A
                  (equal justice and free legal aid), and provisions of the
                  Commission for Protection of Child Rights Act 2005. The
                  judgment also relied on the Convention on the Rights of the
                  Child and Article 32 (right to constitutional remedies).
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The case established that non-implementation or tardy
                  implementation of child welfare laws violates constitutional
                  obligations. Emphasised that caring for children is not
                  governmental charity but a constitutional duty under Articles
                  21, 39(e), and 39(f), and that effective implementation of
                  juvenile justice legislation is mandatory.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  This judgment provided a detailed roadmap for systemic reforms
                  in juvenile justice implementation, and strengthened
                  accountability mechanisms for both Central and State
                  Governments
                </p>
                <ul className="aboutpara">
                  <li>
                    The court strengthened accountability by mandating the
                    timely filling of vacancies in NCPCR, SCPCRs, JJBs, CWCs,
                    and related bodies.{" "}
                  </li>
                  <li>
                    Emphasised mandatory induction and periodic refresher
                    training for all stakeholders, including magistrates, social
                    worker members of JJBs, CWCs, probation officers, and
                    child-welfare police officers.{" "}
                  </li>
                  <li>
                    Advocated extensive use of technology for monitoring, data
                    collection, tracing missing and trafficked children, and
                    quarterly online reporting via the Central Level Monitoring
                    System.{" "}
                  </li>
                  <li>
                    Mandated adequate funding through the constitution and
                    replenishment of the Juvenile Justice Fund at the State and
                    national levels.{" "}
                  </li>
                  <li>
                     Directed the establishment of child-friendly and
                    vulnerable-witness courts for the sensitive handling of
                    juvenile and sexual-offence cases.{" "}
                  </li>
                  <li>	Instituted continuing judicial oversight by directing every High Court to initiate suo motu proceedings to monitor and address implementation challenges.</li>
                </ul>

               <a
                  className="aboutpara link aboutpara fs-6"
                  href=""
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

export default LandmarkPage18;
