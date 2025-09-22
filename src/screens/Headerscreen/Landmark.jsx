import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router";
// import Construction from '../../Components/Construction'

function Landmark() {
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
      textDecoration: "none",
      cursor:'pointer'
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                LANDMARK JUDGEMENTS
              </h4>
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
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigation("/landmark1");
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
                                onClick={() => navigation("/landmark2")}
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
                               onClick={() => navigation("/landmark3")}
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
                                 onClick={() => navigation("/landmark4")}
                                rel="noreferrer"
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
                                onClick={() => navigation("/landmark5")}
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
                                 onClick={() => navigation("/landmark6")}
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
                                  "6-6": !activeSubSub["6-6"],
                                })
                              }
                            >
                              2.5 Bhola Bhagat Vs. State of Bihar, [1997 8 SCC
                              720]
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
                                If there is any doubt about the accused’s age,
                                the court is obliged to conduct an inquiry and
                                record a finding.{" "}
                              </p>
                              <a
                                onClick={() => navigation("/landmark7")}
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
                            setActiveSub({ ...activeSub, 4: !activeSub[4] })
                          }
                        >
                          III. Grant of Bail
                          <span style={styles.arrow(activeSub[4])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[4])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
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
                              3.1 Manoj @ Kali Vs. State (NCT of Delhi) [2006
                              Cri LJ 4759]
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
                                The ‘ends of justice’ exception under Section 12
                                cannot be invoked on mere procedural grounds
                                such as a pending trial or unexamined witnesses.
                                It can only be assessed in the context of the
                                juvenile’s welfare, developmental needs, and
                                potential for rehabilitation.
                              </p>
                              <a
                                onClick={() => navigation("/landmark8")}
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
                                  "6-6": !activeSubSub["6-6"],
                                })
                              }
                            >
                              3.2 Prahalad Gaur v. State of U.P [2009 Cri LJ
                              153]
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
                                A single instance of a child delinquent joining
                                the company of known criminals would not be
                                sufficient to satisfy the definition of
                                ‘association’ under Section 12.{" "}
                              </p>
                              <a
                                 onClick={() => navigation("/landmark9")}
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
                            setActiveSub({ ...activeSub, 7: !activeSub[7] })
                          }
                        >
                          IV. Heinous Offences/Trial as an Adult
                          <span style={styles.arrow(activeSub[7])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[7])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "7-7": !activeSubSub["7-7"],
                                })
                              }
                            >
                              4.1 Shilpa Mittal v. State of NCT of Delhi [(2020)
                              (2) SCC 787]
                              <span style={styles.arrow(activeSubSub["7-7"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["7-7"]
                              )}
                            >
                              <p style={styles.p}>
                                The Court while distinguishing between heinous
                                and serious offences stated that when one
                                interpretation favours the child and the other
                                does not, the interpretation favouring the child
                                must prevail.
                              </p>
                              <a
                                 onClick={() => navigation("/landmark10")}
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
                                  "8-8": !activeSubSub["8-8"],
                                })
                              }
                            >
                              4.2 Puneet S. v. State of Karnataka [2019 SCC
                              OnLine Kar 1835]
                              <span style={styles.arrow(activeSubSub["8-8"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["8-8"]
                              )}
                            >
                              <p style={styles.p}>
                                Police or ordinary magistrates cannot decide if
                                an offence by a child is “heinous,” since the JJ
                                Act entrusts this responsibility to the JJB.{" "}
                              </p>
                              <a
                                onClick={() => navigation("/landmark11")}
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
                          I. Protection from Exploitation
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
                              1.1 Bachpan Bachao Andolan v Union of India
                              [(2011) 5 SCC]
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
                                This case established the constitutional
                                obligation to protect the children from
                                trafficking and exploitation, particularly in
                                circuses. The Court interpreted Articles 21
                                (Right to Life) and 24 (Right against
                                Exploitation) to encompass comprehensive child
                                protection, along with right to education,
                                health, and development.
                              </p>
                              <a
                                 onClick={() => navigation("/landmark12")}
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
                              1.2 Vishal Jeet v Union of India [(1990) 3 SCC
                              318]
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
                                The court established the State's duty to take
                                preventive rather than merely punitive measures
                                against child trafficking and the Devadasi
                                system.{" "}
                              </p>
                              <a
                                 onClick={() => navigation("/landmark13")}
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
                            setActiveSub({ ...activeSub, 13: !activeSub[13] })
                          }
                        >
                          II. Child-Friendly Procedures
                          <span style={styles.arrow(activeSub[13])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[13])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
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
                              2.1 Prerana v State of Maharashtra [2002 SCC
                              OnLine BOM 984]
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
                                The case established that only Child Welfare
                                Committees, not regular magistrates, have
                                jurisdiction to decide on the release and
                                rehabilitation of minor girls rescued from
                                brothels.
                              </p>
                              <a
                                 onClick={() => navigation("/landmark14")}
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
                              2.2 Court on its own motion v State of Delhi [2007
                              SCC OnLine Del 1983]
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
                                The court recognised that all authorities in the
                                Criminal Justice System have a protective role
                                to prevent further victimisation of child
                                victims, interpreting Articles 21 and 14 to
                                mandate child-friendly procedures in sexual
                                abuse cases.{" "}
                              </p>
                              <a
                                 onClick={() => navigation("/landmark15")}
                                rel="noreferrer"
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
                          III. Institutional Accountability and Implementation
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
                              3.1 Re: Exploitation of children in orphanages in
                              the State of TN v Union of India [(2020) 14 SCC
                              327]
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
                                The judgment strengthened institutional
                                safeguards for children in care facilities,
                                enhanced enforcement of child protection laws,
                                and established comprehensive monitoring
                                mechanisms.
                              </p>
                              <a
                                 onClick={() => navigation("/landmark16")}
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
                              3.2 Independent Thought v Union of India [(2017)
                              10 SCC 800]
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
                                The Supreme Court, held that sexual intercourse
                                with a girl below 18 years of age is rape
                                irrespective of marital status, thereby reading
                                down Exception 2 to Section 375 IPC, which had
                                exempted penile intercourse by a husband with
                                his wife aged between 15 and 18 from the
                                definition of rape. This exception was found to
                                be arbitrary and discriminatory, violating
                                Articles 14, 15, and 21 of the Indian
                                Constitution.{" "}
                              </p>
                              <a
                                onClick={() => navigation("/landmark17")}
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
                              3.3 Sampurna Behura v Union of India [(2018) 4 SCC
                              433]
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
                                The court emphasised that caring for children is
                                not governmental charity but a constitutional
                                duty under Articles 21, 39(e), and 39(f), and
                                that effective implementation of juvenile
                                justice legislation is mandatory.{" "}
                              </p>
                              <a
                                 onClick={() => navigation("/landmark18")}
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

export default Landmark;
