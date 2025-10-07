import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage8() {
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
              <h4
                className="fw-bold mt-3 bluetxt yellowclr "
                style={styles.accordionHeader}
              >
                Children in Conflict with the Law – A Primer based on NCRB&#39;s
                Crime in India Report, 2020
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">HAQ: Centre for Child Rights</td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        Analysis of crime statistics involving children in
                        conflict with the law in India
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        Secondary data analysis of National Crime Records Bureau
                        (NCRB) statistics for 2018-2020
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Key Findings:</h4>
                <ul className="aboutpara">
                  <li>
                    The analysis of NCRB data for 2020 reveals that 29,768
                    crimes were alleged against children, representing a 7.6%
                    decline from 2019&#39;s 32,235 cases. However, this overall
                    decrease masks several concerning demographic and regional
                    patterns that warrant attention from policymakers.
                  </li>
                  <li>
                    Delhi recorded the highest crime rate at 44.3% for crimes
                    against children, while 35,352 children were apprehended
                    nationwide. The gender disparity was stark, with boys
                    accounting for 34,958 cases (99%) compared to only 394 girls
                    (1%). Age distribution showed that 68% of apprehended
                    children were between 16-18 years, indicating late
                    adolescence as the highest risk period for involvement in
                    criminal activities.
                  </li>
                  <li>
                    POCSO cases showed a concerning upward trajectory, rising
                    from 1,165 in 2018 to 1,668 in 2020. Educational profiles
                    highlighted systemic vulnerabilities, with 7.2% of children
                    being illiterate and 26.2% having only primary education.
                    Family circumstances showed that while 82.8% lived with
                    parents, 6.6% were homeless, indicating vulnerable
                    populations at higher risk.
                  </li>
                  <li>
                    Judicial outcomes presented mixed results, with conviction
                    rates improving from 86.8% in 2019 to 91.6% in 2020,
                    suggesting better case processing. However, case pendency
                    also increased by 2.9%, indicating ongoing challenges in
                    timely case resolution that could impact rehabilitation
                    efforts.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  It is important to note that despite the overall decline in
                  reported crimes against children, the data reveals persistent
                  vulnerabilities, particularly among adolescent boys from
                  disadvantaged educational and social backgrounds. The increase
                  in POCSO cases and higher conviction rates suggest improved
                  reporting mechanisms and judicial processing capabilities.
                  However, the rise in case pendency and the concentration of
                  cases among older adolescents highlight the need for targeted
                  prevention programs and more efficient judicial processes. The
                  findings underscore the importance of addressing educational
                  gaps, strengthening family support systems, and developing
                  age-appropriate intervention strategies for children in
                  conflict with the law.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.haqcrc.org/wp-content/uploads/2021/11/cii-2020-
children-in-conflict-with-law.pdf"
                  target="_blank"
                >
                  Click here for the full Report
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

export default NotablePage8;
