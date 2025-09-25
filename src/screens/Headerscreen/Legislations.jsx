import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router";
import Construction from "../../Components/Construction";

function Legislations() {
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState({});
  const [activeSubSub, setActiveSubSub] = useState({});

  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "#fff",
      // padding: "20px",
    },
    accordion: {
      // maxWidth: "1000px",
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
      borderRadius: "7px",
    },
     accordionHeaderupper: {
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
      textDecoration: "none",
      cursor: "pointer",
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
        <div className="container my-lg-5 px-lg-4">
          <div className="row">
            <div className="col-12 px-lg-4" style={styles.accordion}>
              <h3 className="fw-bold pt-lg-0 pt-3">
                Child Rights and the Indian Criminal Justice System
              </h3>
              <h4
                className=" fw-bold mt-3 yellowclr bluetxt "
                style={styles.accordionHeaderupper}
              >
                LEGISLATIONS
              </h4>
              <p className="pt-3">
                This resource outlines the Acts and Rules relevant to child
                rights within the Indian criminal justice system divided into
                legislations dealing with children in need of care and
                protection, and children in conflict with the law. These have
                been categorised as child-specific legislations and general
                legislations having child rights components.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 p-0 bg-white">
              <div style={styles.body} className="px-lg-4">
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
                          I. Child-specific Legislations
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
                              1.1 Juvenile Justice Act, 2015
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
                                The Act consolidates and amends the law relating
                                to children alleged and found to be in conflict
                                with law and children in need of care and
                                protection by catering to their basic needs
                                through proper care, protection, development,
                                treatment, social re-integration.
                              </p>
                              <a
                                href="/legislation1"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(
                                    window.location.origin + "/legislation1",
                                    "_blank",
                                    "noreferrer"
                                  );
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
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
                              1.2 Juvenile Justice Act, 2021
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
                                The Amendment Act of 2021 came into being to
                                address operational challenges and governance
                                issues in the implementation of the JJ Act 2015.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation2");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "20-20": !activeSubSub["20-20"],
                                })
                              }
                            >
                              1.3 Juvenile Justice Rules, 2022
                              <span style={styles.arrow(activeSubSub["20-20"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["20-20"]
                              )}
                            >
                              <p style={styles.p}>
                                The rules operationalize the amendments made in
                                2021 and provide detailed procedural guidance
                                for implementation.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation3");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
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
                          II. General Legislations with Child Rights Components
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
                              2.1 Bharatiya Nyaya Sanhita, 2023
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
                                The BNS strives to decolonize India&#39;s legal
                                system by removing outdated provisions and
                                incorporating contemporary criminal justice
                                principles.
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation4");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 10 ? null : 10)
                      }
                    >
                      Children in Need of Care and Protection
                      <span style={styles.arrow(activeMain === 10)}>▼</span>
                    </div>
                    <div style={styles.accordionBody(activeMain === 10)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 10: !activeSub[10] })
                          }
                        >
                          I. Child-specific Legislations
                          <span style={styles.arrow(activeSub[10])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[10])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "10-10": !activeSubSub["10-10"],
                                })
                              }
                            >
                              1.1 Protection of Children From Sexual Offences
                              (POCSO) Act, 2012
                              <span style={styles.arrow(activeSubSub["10-10"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["10-10"]
                              )}
                            >
                              <p style={styles.p}>
                                The Act provides a comprehensive, child-centric
                                legal framework for protecting children (under
                                18) from sexual assault, sexual harassment and
                                child pornography.
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation5");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "12-12": !activeSubSub["12-12"],
                                })
                              }
                            >
                              1.2 Protection of Children From Sexual Offences
                              Rules, 2020
                              <span style={styles.arrow(activeSubSub["12-12"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["12-12"]
                              )}
                            >
                              <p style={styles.p}>
                                The Rules are designed to implement the POCSO
                                Act with greater efficacy by detailing
                                procedures.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation6");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "13-13": !activeSubSub["13-13"],
                                })
                              }
                            >
                              1.3 Prohibition of Child Marriage Act, 2006
                              <span style={styles.arrow(activeSubSub["13-13"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["13-13"]
                              )}
                            >
                              <p style={styles.p}>
                                The Act prohibits the solemnisation of child
                                marriages and related matters connected
                                therewith.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation7");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "14-14": !activeSubSub["14-14"],
                                })
                              }
                            >
                              1.4 Child and Adolescent Labour (Prohibition &amp;
                              Regulation) Act, 1986
                              <span style={styles.arrow(activeSubSub["14-14"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["14-14"]
                              )}
                            >
                              <p style={styles.p}>
                                The Act prohibits the engagement of children in
                                all occupations and of adolescents (14-18 years)
                                in hazardous occupations and processes..{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation8");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 15: !activeSub[15] })
                          }
                        >
                          II. General Legislations with Child Rights Components
                          <span style={styles.arrow(activeSub[15])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[15])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "15-15": !activeSubSub["15-15"],
                                })
                              }
                            >
                              2.1 Immoral Traffic (Prevention) Act, 1956
                              <span style={styles.arrow(activeSubSub["15-15"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["15-15"]
                              )}
                            >
                              <p style={styles.p}>
                                This Act prevents and combats trafficking and
                                sexual exploitation for commercial purposes.
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation9");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "16-16": !activeSubSub["16-16"],
                                })
                              }
                            >
                              2.2 Information Technology Act, 2000
                              <span style={styles.arrow(activeSubSub["16-16"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["16-16"]
                              )}
                            >
                              <p style={styles.p}>
                                This Act provides legal recognition for
                                transactions carried out by means of electronic
                                data interchange and other means of electronic
                                communication.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation10");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "17-17": !activeSubSub["17-17"],
                                })
                              }
                            >
                              2.3 Information Technology Rules, 2021
                              <span style={styles.arrow(activeSubSub["17-17"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["17-17"]
                              )}
                            >
                              <p style={styles.p}>
                                The Rules create a comprehensive framework for
                                digital governance and prescribes a framework
                                for the regulation of content by online
                                publishers of news and current affairs content,
                                and curated audio-visual content while ensuring
                                e a grievance redressal mechanism for resolving
                                complaints from users or victims.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation11");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "18-18": !activeSubSub["18-18"],
                                })
                              }
                            >
                              2.4 Bharatiya Nyaya Sanhita, 2023
                              <span style={styles.arrow(activeSubSub["18-18"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["18-18"]
                              )}
                            >
                              <p style={styles.p}>
                                The BNS strives to decolonize India&#39;s legal
                                system by removing outdated provisions and
                                incorporating contemporary criminal justice
                                principles.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation12");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "19-19": !activeSubSub["19-19"],
                                })
                              }
                            >
                              2.5 Bharatiya Nagarik Suraksha Sanhita 2023
                              <span style={styles.arrow(activeSubSub["19-19"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["19-19"]
                              )}
                            >
                              <p style={styles.p}>
                                The Act aims to create a more efficient,
                                transparent, and victim-oriented criminal
                                justice system that reduces delays and ensures
                                timely access to justice.{" "}
                              </p>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/legislation13");
                                }}
                                style={styles.link}
                              >
                                Continue reading &#10219;
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

export default Legislations;
