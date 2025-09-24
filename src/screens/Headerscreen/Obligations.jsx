import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router";
import Construction from "../../Components/Construction";

function Obligations() {
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
      // background: "#f0f0f0",
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
      padding: "12px 18px",
    },
    link: {
      color: "#0a2c5f",
      textDecoration: "none",
      cursor: "pointer",
      padding: "12px 18px",
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
                Child Rights and the Indian Criminal Justice
              </h3>
              <h4 className="fw-bold mt-3 yellowclr bluetxt px-2">
                OBLIGATIONS UNDER INTERNATIONAL LAW
              </h4>
              <p className="pt-3">
                The following resource provides a comprehensive list of India’s
                obligations under international law with regard to children and
                the criminal justice system.{" "}
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
                      I. International Conventions focussed on Child Rights
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
                          1.1 UN Convention on the Rights of the Child (CRC)
                          <span style={styles.arrow(activeSub[0])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[0])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Recognizes the importance of international
                            co-operation for improving the living conditions of
                            children in every country, in particular in the
                            developing countries.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 1: !activeSub[1] })
                          }
                        >
                          1.2 Optional Protocol to the Convention on the Rights
                          of the Child on the involvement of children in armed
                          conflict
                          <span style={styles.arrow(activeSub[1])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[1])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Recognizes the special needs of those children who
                            are particularly vulnerable to recruitment or use in
                            hostilities.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 2: !activeSub[2] })
                          }
                        >
                          1.3 Optional Protocol to the Convention on the Rights
                          of the Child on the sale of children, child
                          prostitution and child pornography
                          <span style={styles.arrow(activeSub[2])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[2])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Recognizes the importance of the implementation of
                            the provisions of the Programme of Action for the
                            Prevention of the Sale of Children, Child
                            Prostitution and Child Pornography.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 3: !activeSub[3] })
                          }
                        >
                          1.4 Minimum Age Convention, 1973 (No. 138)
                          <span style={styles.arrow(activeSub[3])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[3])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Requires member states to set a national minimum age
                            for employment to effectively eliminate child
                            labour.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 4: !activeSub[4] })
                          }
                        >
                          1.5 Worst Forms of Child Labour Convention, 1999 (No.
                          182)
                          <span style={styles.arrow(activeSub[4])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[4])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Defines and requires member states to prohibit and
                            eliminate, as a matter of urgency, the most harmful
                            forms of child labour. These include, slavery and
                            similar practices, such as forced labour and debt
                            bondage; forced recruitment for use in armed
                            conflicts; prostitution, pornography, and the use of
                            children in illicit activities like drug
                            trafficking; and work that is likely to jeopardize
                            children&#39;s health, safety, or morals.
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

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 5 ? null : 5)}
                    >
                      II. International Rules and Guidelines
                      <span style={styles.arrow(activeMain === 5)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 5)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 5: !activeSub[5] })
                          }
                        >
                          2.1 UN Standard Minimum Rules for the Administration
                          of Juvenile Justice (Beijing Rules)
                          <span style={styles.arrow(activeSub[5])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[5])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Establishes minimum standards for humane treatment
                            and fair procedures in juvenile justice systems
                            worldwide.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 6: !activeSub[6] })
                          }
                        >
                          2.2 UN Rules for the Protection of Juveniles Deprived
                          of their Liberty (Havana Rules)
                          <span style={styles.arrow(activeSub[6])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[6])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Establishes minimum standards for the treatment of
                            juveniles in detention and to foster the use of
                            alternatives to imprisonment.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 7: !activeSub[7] })
                          }
                        >
                          2.3 UN Guidelines for the Prevention of Juvenile
                          Delinquency (Riyadh Guidelines)
                          <span style={styles.arrow(activeSub[7])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[7])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Guides countries in developing policies and programs
                            to prevent young people from engaging in delinquent
                            behaviour.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 8: !activeSub[8] })
                          }
                        >
                          2.4 Guidelines for Action on Children in the Criminal
                          Justice System
                          <span style={styles.arrow(activeSub[8])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[8])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Emphasizes a child-focused, rights-based approach,
                            promoting principles like the best interests of the
                            child, dignity, and protection from discrimination.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 9: !activeSub[9] })
                          }
                        >
                          2.5 Guidelines on Justice in Matters Involving Child
                          Victims and Witnesses of Crime
                          <span style={styles.arrow(activeSub[9])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[9])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            These guidelines were created to help make sure that
                            children who have been harmed by crime and children
                            who have seen others harmed are protected and
                            treated fairly when they say what happened to them
                            in a court of law.
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

                  {/* MAIN ITEM 3 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 10 ? null : 10)
                      }
                    >
                      III. International Conventions with ancillary focus on
                      Child Rights
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
                          3.1 United Nations Declaration of Human Rights (UDHR)
                          <span style={styles.arrow(activeSub[10])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[10])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            The Universal Declaration of Human Rights (UDHR) is
                            a milestone document in the history of human rights.
                            The UDHR is widely recognized as having inspired,
                            and paved the way for, the adoption of more than
                            seventy human rights treaties.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 11: !activeSub[11] })
                          }
                        >
                          3.2 International Covenant on Economic, Social and
                          Cultural Rights (ICESCR)
                          <span style={styles.arrow(activeSub[11])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[11])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Obligates signatory nations to respect and protect
                            the civil and political rights of individuals within
                            their territory and jurisdiction.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 12: !activeSub[12] })
                          }
                        >
                          3.3 International Covenant on Civil and Political
                          Rights (ICCPR)
                          <span style={styles.arrow(activeSub[12])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[12])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Obligates signatory nations to respect and protect
                            the civil and political rights of individuals within
                            their territory and jurisdiction.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 13: !activeSub[13] })
                          }
                        >
                          3.4 2030 Agenda for Sustainable Development
                          <span style={styles.arrow(activeSub[13])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[13])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            A global plan to end poverty, protect the planet,
                            and ensure peace and prosperity for all by 2030. Its
                            core is the 17 Sustainable Development Goals (SDGs),
                            which provide a shared blueprint for global and
                            national development, integrating economic, social,
                            and environmental dimensions to achieve universal
                            well-being and respect for human rights.
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

                  {/* MAIN ITEM 4 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 14 ? null : 14)
                      }
                    >
                      IV. Regional Conventions
                      <span style={styles.arrow(activeMain === 14)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 14)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 14: !activeSub[14] })
                          }
                        >
                          4.1 SAARC Convention on Regional Arrangements for the
                          Promotion of Child Welfare in South Asia
                          <span style={styles.arrow(activeSub[14])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[14])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            A regional agreement by SAARC member countries to
                            work together to improve the well-being of children
                            in South Asia.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 15: !activeSub[15] })
                          }
                        >
                          4.2 SAARC Convention on Preventing and Combating
                          Trafficking in Women and Children for Prostitution
                          <span style={styles.arrow(activeSub[15])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[15])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Emphasizes that the evil of trafficking in women and
                            children for the purpose of prostitution is
                            incompatible with the dignity and honour of human
                            beings and is a violation of basic human rights.
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

                  {/* MAIN ITEM 5 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 16 ? null : 16)
                      }
                    >
                      V. Bilateral Commitments
                      <span style={styles.arrow(activeMain === 16)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 16)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 16: !activeSub[16] })
                          }
                        >
                          5.1 MoU between India and USA to access tip line
                          reports on Missing and Exploited Children
                          <span style={styles.arrow(activeSub[16])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[16])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Enables the sharing of crucial information through
                            CyberTipline, which receives reports from the public
                            and intermediaries, with NCRB then forwarding these
                            reports to the relevant Indian authorities for
                            investigation and the removal of CSAM from
                            cyberspace.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 17: !activeSub[17] })
                          }
                        >
                          5.2 Memorandum of Understanding between the Government
                          of the Republic of India and the Government of The
                          Kingdom of Cambodia on Cooperation for Prevention of
                          Human Trafficking especially Trafficking in Women and
                          Children; Rescue, Recovery, Repatriation and Re.
                          Integration of Victims of Trafficking
                          <span style={styles.arrow(activeSub[17])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[17])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            To strengthen the bonds of friendship between the
                            two countries and to increase the bilateral
                            cooperation on the issues of prevention, rescue,
                            recovery and repatriation related to human
                            trafficking especially women and children
                            expeditiously.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 18: !activeSub[18] })
                          }
                        >
                          5.3 MoU between India and Myanmar on bilateral
                          cooperation for Prevention of Trafficking in Persons;
                          Rescue, Recovery, Repatriation and Re-integration of
                          victims of Trafficking
                          <span style={styles.arrow(activeSub[18])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[18])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Strengthening cooperation between border control
                            agencies and establishment of direct channels of
                            communication between India and Myanmar and to be an
                            effective tool in countering trafficking in persons
                            and promoting cross-border and regional cooperation.
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

                  {/* MAIN ITEM 6 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 19 ? null : 19)
                      }
                    >
                      VI. Statements made in International Fora
                      <span style={styles.arrow(activeMain === 19)}>▼</span>
                    </div>

                    <div style={styles.accordionBody(activeMain === 19)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 19: !activeSub[19] })
                          }
                        >
                          6.1 G20 Statement - Maternal, newborn, child and
                          adolescent health and well-being (India 2023)
                          <span style={styles.arrow(activeSub[16])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[19])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            The Statement stresses that improving maternal,
                            newborn, child and adolescent health is essential
                            for human capital and sustainable development,
                            especially after setbacks from the pandemic, climate
                            change and conflict.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 20: !activeSub[20] })
                          }
                        >
                          6.2 Foreign Secretary’s Statement at the UN Security
                          Council Open Debate on Children and Armed Conflict
                          (June 28, 2021)
                          <span style={styles.arrow(activeSub[20])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[20])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            Highlighted the impact of the COVID-19 pandemic on
                            the specific vulnerabilities of children in armed
                            conflict, and urged that child protection must
                            remain central in pandemic response and recovery
                            planning.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 21: !activeSub[21] })
                          }
                        >
                          6.3 CRC@30 Pledge (2019)
                          <span style={styles.arrow(activeSub[21])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[21])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            In its CRC@30 pledge, India committed to promoting
                            non-institutional, community-based care for children
                            in need of protection and to ensuring safe
                            neighbourhoods for all children.
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

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 22: !activeSub[22] })
                          }
                        >
                          6.4 G20 Statement - Early Childhood Development
                          (Argentina 2018)
                          <span style={styles.arrow(activeSub[22])}>▼</span>
                        </div>

                        <div style={styles.accordionSubBody(activeSub[22])}>
                          {/* DIRECT CONTENT (removed grey row) */}
                          <p style={styles.p}>
                            The G20’s Early Childhood Development (ECD)
                            Initiative recognizes that neglect in early years
                            can trap children in cycles of poverty and
                            vulnerability.
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Obligations;
