import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage3() {
   const styles = {
   
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
  
  };
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr" style={styles.accordionHeader}>
                Juvenile Justice Rules, 2022
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  In exercise of the powers conferred by the proviso to sub-section (1) of section 110 of the
                  Juvenile Justice (Care and Protection of Children) Act, 2015 (2 of 2016), the Central
                  Government made amendments to the Juvenile Justice (Care and Protection of Children)
                  Model Rules, 2016. The immediate reason for developing the rules was to operationalize the
                  amendments made in 2021 and provide detailed procedural guidance for implementation.
                </p>

              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  Operationalization of the legislative amendment of 2021 with a special focus on enhancing
                  the role of the district magistrate and streamlining the process of adoption alongside
                  uniformization of formats utilized for various forms used by children in conflict with the law
                  and in need for care and protection.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Salient Features
                </h4>
                <ul className="aboutpara">
                  <li>District Magistrates to expediate adoption proceedings (Rule 29)</li>
                  <li>Strengthened Oversight and Reporting Mechanisms (Rule 9)</li>
                  <li>District Magistrate as Central Coordinating Authority</li>
                  <li>Providing uniform formats for forms related to children in conflict with the law
                    (Rules 60-68)</li>

                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">

                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Rule 6:</td>
                      <td className="px-3">Inspection of Child Care Units by the District Magistrate</td>
                    </tr>
                    <tr>
                      <td className="">Rule 9:</td>
                      <td className="px-3">CWC Reports to be checked by District Magistrate</td>
                    </tr>
                    <tr>
                      <td className="">Rule 28:</td>
                      <td className="px-3">District Magistrate as Inspection committee</td>
                    </tr>


                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://cara.wcd.gov.in/PDF/JJ%20Model%20Amendment%20Rules%202022%20(english)_
27.pdf"
target="_blank"
                >
                  Click here to access the full text of the JJ Rules 2022
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

export default LegislationPage3
