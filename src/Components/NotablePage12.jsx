import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage12() {
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
                Implementation of the POCSO Act, 2012 by Special Courts:
                Challenges and Issues, Centre for Child and the Law, National
                Law School of India University (2018).
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        Centre for Child and the Law, National Law School of
                        India University
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The report seeks to address common hurdles and issues in
                        the functioning of Special Courts established under the
                        POCSO Act, 2012 to improve implementation and access to
                        justice for victims. Specific chapters of the report
                        delve into: Structural and procedural compliance of
                        Special Courts with the POCSO Act; Factors contributing
                        to acquittals; Charges and sentencing patterns;
                        Compensation under the Act; Challenges in age-
                        determination of victims; Appreciation of medical
                        evidence and children&#39;s testimonies; Issues related
                        to “love”, consent, and “romantic cases”; Specific
                        challenges faced by children with disabilities; Impact
                        of the “culture of shame and silence” on reporting; and
                        Gaps in support systems and linkages between the
                        criminal justice and child protection systems.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        The report is based on empirical data from five state
                        studies - Delhi, Assam, Maharashtra, Karnataka, and
                        Andhra Pradesh - conducted by the Centre for Child and
                        the Law (CCL), National Law School of India University
                        (NLSIU), Bangalore. Data was gathered through analysis
                        of judgements and interviews with various stakeholders
                        such as the judiciary, lawyers, prosecutors, child
                        protection systems, NGOs, and children. The research
                        involved both quantitative and qualitative analysis.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>
                <p className="aboutpara">The findings of the study revealed:</p>

                <ul className="aboutpara">
                  <li>
                    Special Courts rarely exclusively handle POCSO cases,
                    leading to delays, overworked personnel, and potential
                    re-exposure of children to accused individuals.
                  </li>
                  <li>
                    Delays in recording evidence and completing trials are
                    common, with few reasons for delays being officially
                    recorded. The identity of child victims is often poorly
                    protected.
                  </li>
                  <li>
                    Lapses in investigation, such as failure to collect proof of
                    age or file appropriate charges, are significant. Judicial
                    errors, including a lack of understanding of child sexual
                    abuse dynamics, lead to acquittals where apparent “consent”
                    is misinterpreted.
                  </li>
                  <li>
                    Issues include ambiguous medical documentation, inconsistent
                    DNA collection/analysis, and judges giving insufficient
                    weight to scientific evidence when witnesses turn hostile.
                  </li>
                  <li>
                    Children&#39;s difficulty in recalling exact details or
                    providing consistent accounts over time is often held
                    against them.
                  </li>
                  <li>
                    “Romantic cases”, where the victim is in a romantic
                    relationship with the accused, frequently result in
                    acquittals because victims turn hostile or claim consent.
                  </li>
                  <li>
                    Children with disabilities face significant barriers due to
                    inaccessible courts and a lack of interpreters or
                    specialized educators.
                  </li>
                  <li>
                    There is a severe shortage of trained Support Persons, and
                    their engagement with child victims is inconsistent and
                    insufficient.
                  </li>
                  <li>
                    Mandatory minimum sentences often lead to judges imposing
                    only the minimum punishment or even acquitting, especially
                    when they perceive the sentences as excessively harsh.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Conclusions:</h4>
                <p className="aboutpara">
                  The conclusions drawn by the report are:
                </p>

                <ul className="aboutpara">
                  <li>
                    Special Courts require significant structural modifications,
                    including dedicated courts for POCSO matters, separate
                    child-friendly entrances and waiting rooms, and accessible
                    facilities for children with disabilities.
                  </li>
                  <li>
                    Extensive and periodic training for judges, police,
                    prosecutors, and medical professionals is crucial.
                  </li>
                  <li>
                    States should establish acquittal review mechanisms to
                    address police and prosecutorial failures, and judges should
                    actively manage trials, deny unnecessary adjournments, and
                    ensure time-bound disposal of cases.
                  </li>
                  <li>
                    Special Courts must proactively consider and direct
                    compensation from the State, not just fines, and not be
                    constrained by the limitations of State Victim Compensation
                    Schemes.
                  </li>
                  <li>
                    A robust support system, including trained Support Persons
                    and victim/witness protection schemes, is essential.
                  </li>
                  <li>
                    The entire criminal justice system needs to adopt a
                    child-friendly and trauma- informed approach.
                  </li>
                  <li>
                    Mandatory minimum sentences should be replaced with
                    comprehensive sentencing guidelines.
                  </li>
                  <li>
                    There is a need to review the age of consent, particularly
                    for close-in-age relationships, and conduct further research
                    to inform policy changes regarding “romantic cases”.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://ccl.nls.ac.in/wp-content/uploads/2021/10/8.-
Implementation-of-the-POCSO-Act-2012-by-speical-courts-challenges-and-issues.pdf"
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

export default NotablePage12;
