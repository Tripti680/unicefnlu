import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
// import Construction from '../../Components/Construction'

function Landmark() {
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState({});
  const [activeSubSub, setActiveSubSub] = useState({});

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "#fff",
      padding: "20px",
    },
    accordion: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    accordionItem: {
      marginBottom: "40px",
      borderRadius: "6px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    },
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
    },
    accordionBody: (isActive) => ({
      maxHeight: isActive ? "2000px" : "0",
      overflow: "hidden",
      transition: "max-height 0.5s ease",
      background: "#fafafa",
    }),
    accordionSubheader: {
      background: "#ffc107",
      color: "#000",
      padding: "12px 18px",
      cursor: "pointer",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #ddd",
    },
    accordionSubBody: (isActive) => ({
      maxHeight: isActive ? "1200px" : "0",
      overflow: "hidden",
      transition: "max-height 0.5s ease",
      background: "#f0f0f0",
    }),
    accordionSubSubheader: {
      background: "#e0e0e0",
      padding: "10px 18px",
      cursor: "pointer",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #ccc",
    },
    accordionSubSubContent: (isActive) => ({
      maxHeight: isActive ? "500px" : "0",
      overflow: "hidden",
      background: "#ffffff",
      padding: isActive ? "12px 18px" : "0 18px",
      transition: "max-height 0.5s ease, padding 0.5s ease",
    }),
    p: {
      margin: "12px 0",
      textAlign: "justify",
      fontSize: "15px",
      lineHeight: "1.6",
    },
    link: {
      color: "#0a2c5f",
      textDecoration: "underline",
    },
    arrow: (isActive) => ({
      fontSize: "14px",
      transition: "transform 0.3s",
      transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
    }),
  };
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container-fluid my-lg-5">
          <div className="row">
            <div className="col-12" style={styles.accordion}>
              <h3 className="fw-bold pt-lg-0 pt-3">
                Child Rights and the Indian Criminal Justice System
              </h3>
              <h4 className="fw-bold pt-3">LANDMARK JUDGEMENTS</h4>
              <p className="pt-3">
                The following resource outlines the landmark judgments of the
                Indian Supreme Court on issues pertaining to child rights and
                the Indian criminal justice system. The judgements have been
                categorised to highlight the main principles laid down by the
                courts pertaining to children in need of care and protection and
                children in conflict with the law.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 p-0 bg-white">
              <div style={styles.body}>
                <div style={styles.accordion}>
                  {/* MAIN ITEM 1 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 0 ? null : 0)}
                    >
                      Children in Conflict with the Law (CCL)
                      <span style={styles.arrow(activeMain === 0)}>▼</span>
                    </div>
                    <div style={styles.accordionBody(activeMain === 0)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 0: !activeSub[0] })
                          }
                        >
                          I. Constitutionality of the Juvenile Justice Act / Age
                          Classification
                          <span style={styles.arrow(activeSub[0])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[0])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "0-0": !activeSubSub["0-0"],
                                })
                              }
                            >
                              1.1 Salil Balil Vs. Union of India [(2013) 7 SCC
                              705]
                              <span style={styles.arrow(activeSubSub["0-0"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["0-0"]
                              )}
                            >
                              <p style={styles.p}>
                                The legislature has wide latitude in setting the
                                age of juvenility, and once the classification
                                is based on a clear and rational standard (in
                                this case, the age of 18), it does not offend
                                Article 14.
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/136445499/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "1-1": !activeSubSub["1-1"],
                                })
                              }
                            >
                              1.2 Subramanian Swamy Vs. Raju [(2014) 8 SCC 390]
                              <span style={styles.arrow(activeSubSub["1-1"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["1-1"]
                              )}
                            >
                              <p style={styles.p}>
                                The JJ Act is constitutional under Article 14
                                because the classification of persons as
                                juveniles below 18 is identifiable and bears a
                                reasonable connection with the object of the
                                law. Chronological age is a legitimate,
                                practical, and objective test for determining
                                “juvenility” under the Act.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 2: !activeSub[2] })
                          }
                        >
                          II. Claim of Juvenility/Determination of Age
                          <span style={styles.arrow(activeSub[2])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[2])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "2-2": !activeSubSub["2-2"],
                                })
                              }
                            >
                              2.1 Parag Bhati v. State of U.P [(2016) 12 SCC
                              744]
                              <span style={styles.arrow(activeSubSub["2-2"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["2-2"]
                              )}
                            >
                              <p style={styles.p}>
                                The Court laid down a hierarchy of
                                age-determination evidence.
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/136445499/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "3-3": !activeSubSub["3-3"],
                                })
                              }
                            >
                              2.2 Rishipal Singh Solanki v. State of U.P [SCC
                              OnLine SC 1079]
                              <span style={styles.arrow(activeSubSub["3-3"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["3-3"]
                              )}
                            >
                              <p style={styles.p}>
                                The court stated that while documentary evidence
                                is generally preferred, if doubts remain,
                                medical evidence can be considered for the
                                purposes of determining the age of a juvenile.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "4-4": !activeSubSub["4-4"],
                                })
                              }
                            >
                              2.3 Ram Vijay Singh v. State of U.P. 2021 [SCC
                              OnLine SC 142]
                              <span style={styles.arrow(activeSubSub["4-4"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["4-4"]
                              )}
                            >
                              <p style={styles.p}>
                                Ossification tests lose reliability at older
                                ages, and the law cannot demand reliance on
                                ‘impossible or unreliable’ procedures.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "5-5": !activeSubSub["5-5"],
                                })
                              }
                            >
                              2.4 Pratap Singh Vs. State of Jharkhand [2005 (3)
                              SCC 551]
                              <span style={styles.arrow(activeSubSub["5-5"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["5-5"]
                              )}
                            >
                              <p style={styles.p}>
                                The court settled the position of law on the
                                relevant age for juvenility by overturning two
                                landmark judgements.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                           <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "6-6": !activeSubSub["6-6"],
                                })
                              }
                            >
                              2.5 Bhola Bhagat Vs. State of Bihar, [1997 8 SCC 720]
                              <span style={styles.arrow(activeSubSub["6-6"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["6-6"]
                              )}
                            >
                              <p style={styles.p}>
                               If there is any doubt about the accused’s age, the court is obliged to conduct an inquiry and record a finding. {" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landmark;
