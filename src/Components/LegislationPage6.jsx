import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage6() {
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
          <div className="row m-1">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Protection Of Children From Sexual Offences Rules, 2020
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The POCSO Rules were formally notified on 9 th March 2020
                  (notification G.S.R. 165(E)), replacing the earlier 2012
                  Rules. This was done to operationalize the amended Act and to
                  address urgent systemic shortcomings, such as low compensation
                  delivery and the absence of support personnel. The drafting
                  was spurred by Supreme Court directives following reports
                  showing that only 1% of minor survivors received compensation
                  and 96% were deprived of supportive assistance during legal
                  processes, with high-profile child abuse incidents in care
                  institutions (e.g., Muzaffarpur, Deoria) accentuating the
                  urgent need for reform.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The Rules are designed to implement the POCSO Act with greater
                  efficacy by detailing procedures for awareness campaigns,
                  reporting of offences (including online child pornography),
                  child-friendly investigation and trial mechanisms, medical and
                  legal aid, relief and rehabilitation, compensation, and
                  institutional monitoring- ensuring sensitive, comprehensive,
                  and timely responses to child sexual offences.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Define important roles like District Child Protection Units
                    (DCPU), experts, special educators, and support persons
                    assisting child victims (Rule 2, 5).
                  </li>
                  <li>
                    Mandate awareness programs and training for institutions
                    working with children, including sensitisation and
                    age-appropriate safety education (Rule 3).
                  </li>
                  <li>
                    Provide for child-friendly investigation and trial
                    procedures, including appointing a support person, ensuring
                    breaks and confidentiality, and free legal aid through
                    District Legal Services (Rule 5, 6, 7).
                  </li>
                  <li>
                    Courts are empowered to award interim compensation and
                    relief soon after the FIR, with prompt disbursal of funds
                    and ongoing monitoring (Rule 8, 9, 10).
                  </li>
                  <li>
                    Establish mandatory reporting of child pornography and
                    online abuse material to law enforcement or cyber portals
                    (Rule 11).
                  </li>
                  <li>
                    Require continuous monitoring and implementation oversight
                    by national and state bodies like NCPCR and SCPCR (Rule 12).
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Rule 3:</td>
                      <td className="px-3">
                        Specifies awareness-generation, training, and
                        institutional protection policies.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rule 5:</td>
                      <td className="px-3">
                        Defines support personnel structure- experts,
                        interpreters, special educators, support persons.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rule 6:</td>
                      <td className="px-3">
                        Medical aid- Child to be taken to hospital within 24
                        hours; emergency care given without requisition,
                        ensuring privacy, presence of guardian, treatment for
                        injuries, STDs, HIV, pregnancy, mental health; report to
                        be submitted within 24 hours.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rule 7:</td>
                      <td className="px-3">
                        Lays down mechanisms for free legal aid and
                        psychological assistance.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 19, 21:</td>
                      <td className="px-3">
                        Mandatory reporting of offences by any person; failure
                        is punishable.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rules 8-9:</td>
                      <td className="px-3">
                        Empower Special Courts and CWCs to grant interim relief
                        and compensation swiftly.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 32:</td>
                      <td className="px-3">
                        State Government to appoint Special Public Prosecutor
                        (SPP) for every Special Court; only advocates with
                        minimum 7 years’ practice eligible.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rule 11:</td>
                      <td className="px-3">
                        Imposes mandatory reporting of child pornography
                        content.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Rule 12:</td>
                      <td className="px-3">
                        Establishes monitoring responsibilities and compliance
                        oversight at national, state, and district levels.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://missionvatsalya.wcd.gov.in/public/pdf/children-related-
law/POCSO%20Rules%202020.pdf"
target="_blank"
                >
                  Click here to access the full text of the POCSO Rules 2020
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

export default LegislationPage6;
