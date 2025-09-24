import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage2() {
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Juvenile Justice Act, 2021
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The Amendment Act 2021 came into being to address operational challenges and governance
                  issues in the implementation of the JJ Act 2015. The amendments reflect the need for
                  strengthening administrative oversight and accountability alongside streamlining adoption
                  procedures, addressing gaps in the functioning of Child Welfare Committees and improving
                  the classification and handling of offenses.
                </p>

              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  Enhance oversight mechanisms by empowering District Magistrates with supervisory roles
                  over child protection institutions and committees. Establish stricter eligibility criteria for
                  Child Welfare Committee members to ensure qualified and ethical personnel handle child
                  protection cases. To streamline adoption Processes and enhance accountability.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Salient Features
                </h4>
                <ul className="aboutpara">
                  <li>Enhanced Role of District Magistrate, Supervision over Child Protection Units
                    and Quarterly reviews of Child Welfare Committees. District Magistrates become
                    the grievance redressal authority for CWC-related complaints.</li>
                  <li>Stricter CWC Member Eligibility, Mandatory educational qualifications, active
                    involvement in Child welfare activities required for seven years and addition of
                    comprehensive disqualification criteria. (Section 9)</li>
                  <li>Adoption proceedings transferred from courts to District Magistrates and
                    expedited disposal of appeals within four weeks. (Ss. 14-25)</li>
                  <li>Offense Classification Reform- Redefined &quot;serious offences&quot; with clearer
                    imprisonment criteria and a new three-tier classification system for offenses
                    (Section 26)</li>

                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">

                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 9:</td>
                      <td className="px-3">Appointment to Child Welfare Committees</td>
                    </tr>
                    <tr>
                      <td className="">Section 13:</td>
                      <td className="px-3">CWC Reports to the District Magistrate</td>
                    </tr>
                    <tr>
                      <td className="">Ss. 14-25:</td>
                      <td className="px-3">Administrative Powers to the District Magistrate</td>
                    </tr>
                    <tr>
                      <td className="">Section 26:</td>
                      <td className="px-3">Classification of Offences</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://cara.wcd.gov.in/PDF/JJ%20Amendment%20Act%20-2021_.PDF"
                >
                  Click here to access the full text of the JJ Act, 2021
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

export default LegislationPage2
