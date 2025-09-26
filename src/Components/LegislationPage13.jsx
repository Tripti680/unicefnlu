import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage13() {
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
                Bharatiya Nagarik Suraksha Sanhita 2023
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The BNSS, 2023 replaces the Code of Criminal Procedure, 1973
                  as part of India’s shift to a new criminal law framework. It
                  modernizes procedural criminal law to reflect contemporary
                  justice needs, streamline trials, and strengthen victim
                  protection.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The Act aims to create a more efficient, transparent, and
                  victim-oriented criminal justice system that reduces delays
                  and ensures timely access to justice. By modernizing
                  procedures, empowering magistrates, and reinforcing safeguards
                  for vulnerable groups, it seeks to balance the rights of the
                  accused with the protection of victims and dependents.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Swift judicial relief on sworn complaint of
                    abduction/unlawful detention. (Section 101)
                  </li>
                  <li>
                    Magistrates (district/first class) empowered to order
                    restoration, using force if necessary. (Section 101)
                  </li>
                  <li>
                    Ensures liberty and safety for women and girl children.
                    (Section 101)
                  </li>
                  <li>
                    Recognizes legal right of dependents (wife, children and
                    parents) to claim interim and final maintenance, based on
                    the claimant’s needs and the respondent’s means. (Section
                    144)
                  </li>
                  <li>
                    Safeguards included for variation/dismissal in case of
                    remarriage, financial improvement, or duplication of relief.
                    (Section 144)
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 101:</td>
                      <td className="px-3">
                        Power to compel restoration of abducted/unlawfully
                        detained women and girls under 18.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 144:</td>
                      <td className="px-3">
                        Mandates monthly maintenance for wife, children
                        (legitimate/illegitimate/minor/disabled), and parents
                        unable to maintain themselves.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.mha.gov.in/sites/default/files/2024-04/250884_2_english_01042024.pdf"
                  target="_blank"
                >
                  Click here to access the full text of BNSS, 2023
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

export default LegislationPage13;
