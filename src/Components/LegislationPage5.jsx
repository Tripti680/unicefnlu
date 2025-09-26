import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage5() {
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
                Protection Of Children From Sexual Offences (POCSO) Act, 2012
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  India ratified the UN Convention on the Rights of the Child in 1992, creating an obligation to
                  protect children from abuse. Before POCSO, child sexual abuse was prosecuted under
                  general IPC sections (rape, molestation, “unnatural” offences) which had major gaps, for
                  example, IPC 375 (rape) did not cover male victims or non-vaginal penetration and IPC 354
                  (“outraging modesty”) carried only light penalties. The lack of a specific child-protection law,
                  together with public outrage over brutal child abuse cases (including past cases like Mathura
                  and the Anchorage orphanage incident) highlighted these loopholes. In response, Parliament
                  enacted the POCSO Act in June 2012 to create a dedicated legal framework for protecting
                  minors from sexual crimes.
                </p>

              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  To provide a comprehensive, child-centric legal framework for protecting children (under 18)
                  from sexual assault, sexual harassment and child pornography. The Act aims to safeguard the
                  interests of the child at every stage with mandatory child-friendly reporting, evidence-
                  recording, investigation and speedy trial through designated courts.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Salient Features
                </h4>
                <ul className="aboutpara">
                  <li>POCSO defines offences like penetrative and non-penetrative assault, sexual
                    harassment, and child pornography, and it applies to all minors under 18.</li>
                  <li>It ensures child-friendly procedures, such as recording statements in safe places,
                    allowing a support person, and holding trials in-camera. (Sections 23, 24, 33)</li>
                  <li>Special POCSO Courts handle cases (Section 28)</li>
                  <li>The Act protects the child’s identity in order to prevent infringement of privacy
                    (Section 23)</li>
                  <li>Punishments are strict. The 2019 amendment increased minimum sentences (e.g., 20
                    years for victims under 16), allowed the death penalty in severe cases, and expanded
                    the definition of child pornography to include digital content.</li>


                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">

                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 3 &amp; 4:</td>
                      <td className="px-3">Penetrative sexual assault- minimum 10 years’ imprisonment (20

                        years if victim is under 16).</td>
                    </tr>
                    <tr>
                      <td className="">Section 5 &amp; 6:</td>
                      <td className="px-3">Aggravated penetrative sexual assault- punishment up to life

                        imprisonment or death (2019 amendment).</td>
                    </tr>
                    <tr>
                      <td className="">Section 7 &amp; 8:</td>
                      <td className="px-3">Sexual assault- non-penetrative acts, punishable with 3-5 years and a

                        fine.</td>
                    </tr>
                    <tr>
                      <td className="">Section 11 &amp; 12:</td>
                      <td className="px-3">Sexual harassment- punishable with up to 3 years and a fine.</td>
                    </tr>
                    <tr>
                      <td className="">Section 19, 21:</td>
                      <td className="px-3">Mandatory reporting of offences by any person; failure is punishable.</td>
                    </tr>
                    <tr>
                      <td className="">Section 28 &amp; 33:</td>
                      <td className="px-3">Establishment of Special Courts and child-friendly trial procedures.</td>
                    </tr>
                    <tr>
                      <td className="">Section 32:</td>
                      <td className="px-3">State Government to appoint Special Public Prosecutor (SPP) for
                        every Special Court; only advocates with minimum 7 years’ practice
                        eligible.</td>
                    </tr>
                    <tr>
                      <td className="">Section 35:</td>
                      <td className="px-3">Speedy trial- child’s evidence to be recorded within 30 days of
                        cognizance; trial to be completed within 1 year as far as possible.</td>
                    </tr>
                    <tr>
                      <td className="">Section 42 &amp; 42A:</td>
                      <td className="px-3">If offence is punishable under both IPC and POCSO, the harsher

                        penalty applies; Act overrides conflicting laws.</td>
                    </tr>



                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/2079/1/AA2012-32.pdf"
                  target="_blank"
                >
                  Click here to access the full text of the POCSO Act, 2012
                </a>


              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default LegislationPage5
