import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router";
import Construction from "../../Components/Construction";

function Notable() {
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
    accordionBody: (isActive) => ({
      maxHeight: isActive ? "2000px" : "0",
      overflow: "hidden",
      transition: "max-height 0.5s ease",
      background: "#fff",
       padding:isActive ? "5px 20px":"0 18px",
      
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
      background: "#fff",
     
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
                Status of Child Rights within the Indian Criminal Justice System
              </h3>
              <h4 className="fw-bold mt-3 yellowclr bluetxt " style={styles.accordionHeader}>
                NOTABLE REPORTS
              </h4>
              <p className="pt-3 px-lg-2">
                The following resource outlines some recent reports on the
                implementation of child rights legislations and policies within
                the Indian criminal justice system.{" "}
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
                      Annual Report 2024-25, Ministry of Women and Child
                      Development, Government of India
                      <span style={styles.arrow(activeMain === 0)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 0)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        It is a compliance document reviewing implementation of
                        child protection schemes and legal frameworks during
                        fiscal year 2024-25.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 1 ? null : 1)}
                    >
                      Crime in India statistics, National Crime Records Bureau
                      (2022)
                      <span style={styles.arrow(activeMain === 1)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 1)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        NCRB functions as a repository of information on crime
                        and criminals to assist the investigators in linking the
                        crime to the perpetrators. Their annual report in 2022
                        gives us a statistical overview of crimes against
                        children and juveniles in conflict with law.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 3 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 2 ? null : 2)}
                    >
                      A Decade of POCSO: Developments, Challenges, and
                      Observations from Judicial Data, Vidhi Centre for Legal
                      Policy and World Bank Data Evidence for Justice Reform
                      Program (November 2022)
                      <span style={styles.arrow(activeMain === 2)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 2)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        This is the most comprehensive empirical study on the
                        application of POCSO so far, which studied nearly
                        400,000 instances on eCourts data from 486 districts
                        spread over 28 states and Union Territories from
                        November 2012 up to February 2021.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 4 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 3 ? null : 3)}
                    >
                      Child Rights in India - Stakeholder’s Report on Universal
                      Periodic Review III (April 2022)
                      <span style={styles.arrow(activeMain === 3)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 3)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The report specifically examines the implementation gap
                        between political-legal commitments and outcomes for
                        children’s lives, and whether India has meaningfully
                        improved children&#39;s status and conditions following
                        its 2011 UPR obligations.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 5 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 4 ? null : 4)}
                    >
                      Policy Research on Children Deprived of Liberty in the
                      Administration of Justice in South Asia, Kathmandu School
                      of Law (2022)
                      <span style={styles.arrow(activeMain === 4)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 4)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The research examined eight South Asian countries to
                        determine their success in implementing international
                        standards for protecting detained children in juvenile
                        justice systems. The study evaluated state adherence to
                        the UN Convention on the Rights of the Child and other
                        international treaties through an analysis of legal
                        frameworks against actual juvenile justice system
                        operations.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 6 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 5 ? null : 5)}
                    >
                      “Romantic” Cases under the POCSO Act: An Analysis of
                      Judgments of Special Courts in Assam, Maharashtra &amp;
                      West Bengal, Enfold Proactive Health Trust (2022)
                      <span style={styles.arrow(activeMain === 5)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 5)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The research aimed to understand the proportion of
                        “romantic” cases under the POCSO Act and the manner in
                        which the law is being used to regulate or criminalize
                        adolescents in non- exploitative consensual
                        relationships.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 6 ? null : 6)}
                    >
                      Strategy for Ending Violence against Children (EVAC),
                      UNICEF India (2020)
                      <span style={styles.arrow(activeMain === 6)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 6)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        This report provides a comprehensive strategy
                        development for preventing and responding to violence
                        against children in India. The EVAC strategy recommends
                        improved multi-sectoral collaboration, evidence-based
                        interventions, and prevention mechanisms targeting the
                        community level for protection of children.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 7 ? null : 7)}
                    >
                      Children in Conflict with the Law – A Primer based on
                      NCRB&#39;s Crime in India Report, HAQ Centre for Child
                      Rights (2020)
                      <span style={styles.arrow(activeMain === 7)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 7)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The report provides an analysis of crime statistics
                        involving children in conflict with the law in India.
                        Secondary data analysis of National Crime Records Bureau
                        statistics for 2018-2020 was carried out for the purpose
                        of understanding persistent vulnerabilities,
                        particularly among adolescent boys from disadvantaged
                        educational and social backgrounds.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 8 ? null : 8)}
                    >
                      Research on the Sexual Exploitation of Boys: Findings,
                      Ethical Considerations and Methodological Challenges,
                      UNICEF Data and Analytics Section (2020)
                      <span style={styles.arrow(activeMain === 8)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 8)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        A systematic literature review of quantitative and
                        qualitative research published between 1999 and March
                        2020, examining male minors within the wider context of
                        global youth studies spanning across multiple countries
                        to provide a global overview, was carried out. The
                        research reveals significant knowledge gaps surrounding
                        sexual exploitation of boys globally.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 9 ? null : 9)}
                    >
                      Mapping Needs and Priorities: Study of Child Rape Victim
                      in Delhi, Delhi Commission for Protection and Human
                      Development Society (2019)
                      <span style={styles.arrow(activeMain === 9)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 9)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The primary aim of this study was to understand the
                        personal, familial, and societal needs of minor victims
                        of rape, analyse the challenges they face in fulfilling
                        these needs, and determine their life priorities that
                        are relevant to their rehabilitation and social
                        reintegration. Additionally, the study sought to assess
                        the extent and nature of governmental or non-
                        governmental support and compensation received by these
                        victims and to suggest measures for the constitution and
                        operationalization of &#39;Smile Clubs&#39; as a
                        targeted intervention for their rehabilitation in Delhi.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
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
                      Status of Juvenile Justice System: Structures, Mechanisms,
                      &amp; Processes, National Legal Services Authority (2019)
                      <span style={styles.arrow(activeMain === 10)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 10)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The aim of this report is to highlight the status of
                        implementation of the Juvenile Justice (Care and
                        Protection of Children) Act, 2015 and the Juvenile
                        Justice (Care and Protection of Children) Rules, 2016.
                        It also provides an overview of the Juvenile Justice
                        Institutions, mechanisms, and structures across India.
                        The report specifically explores whether these
                        institutions are following the mandate of the law and
                        effectively monitoring the implementation of the Act.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
                        }}
                        style={styles.link}
                      >
                        Continue reading &#10219;
                      </a>
                    </div>
                  </div>
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 11 ? null : 11)
                      }
                    >
                      Implementation of the POCSO Act, 2012 by Special Courts:
                      Challenges and Issues, Centre for Child and the Law,
                      National Law School of India University (2018).
                      <span style={styles.arrow(activeMain === 11)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 11)}>
                      {/* DIRECT CONTENT (no yellow row) */}
                      <p style={styles.p}>
                        The report seeks to address common hurdles and issues in
                        the functioning of Special Courts established under the
                        POCSO Act, 2012 to improve implementation and access to
                        justice for victims. Data was gathered through analysis
                        of judgements and interviews with various stakeholders
                        such as the judiciary, lawyers, prosecutors, child
                        protection systems, NGOs, and children.
                      </p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigation("/obligation1");
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
      </section>
      <Footer />
    </>
  );
}

export default Notable;
