import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/childvictimswitnesses.pdf";

function ObligationPage10() {
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
                Guidelines on Justice in Matters Involving Child Victims and Witnesses of Crime
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        22 July 2005
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Objectives include ensuring that national and domestic legislation frameworks respect
                    the rights of child victims and witnesses and contribute to the implementation of the
                    Convention on the Rights of the Child, to assist governments and professionals for the
                    same etc. (Guideline I)
                  </li>
                  <li>
                    Child victims and witnesses should be treated with dignity and compassion throughout
                    the entire justice process. Any interference should be limited to a minimum. Trained
                    professionals should conduct any form of investigation required to prevent any hardship

                    to the child. Any interaction should be conducted in a child-sensitive manner that
                    accommodates their needs. (Guideline V)
                  </li>
                  <li>All children should be treated fairly and equally without any form of discrimination. In
                    certain cases, special arrangements may have to be instituted to take account of gender
                    or the specific nature of the offence. (Guideline VI)</li>
                  <li>Children of every age would be treated as capable witnesses and their testimony should
                    not be presumed as invalid just by virtue of their age. (Guideline VI)</li>
                  <li>Child victims, their guardians, parents or legal representatives should be informed of the
                    availability of health, psychological, social and other services along with any available
                    financial support, procedure of the trial, support mechanisms for the child, specific
                    places and times of hearing any other relevant details, mechanisms for review of
                    decisions etc. (Guideline VII)</li>
                  <li>They should also be informed of the progress and disposition of their case, relevant post
                    trial development and opportunities to obtain reparations from the offender or the
                    State. (Guideline VII)</li>
                  <li>Child victims should be able to express their views and concerns about their
                    involvement in the process, both about the accused and their feelings about the
                    conclusions of the process. (Guideline VIII)</li>
                  <li>They should have access to assistance provided by professionals with the relevant
                    training. This would include a variety of financial, legal, social, health etc services.
                    (Guideline IX)</li>
                  <li>Their right to privacy should be protected by maintaining confidentiality. (Guideline X)</li>
                  <li>Professionals should ensure that the child is not faced with any form of hardship, nor is
                    their right to safety compromised in any manner. (Guideline XI)</li>
                  <li>Child victims should get reparations wherever possible to ensure full reintegration and
                    recovery. (Guideline XIII)</li>
                  <li>Implementation will be done by providing the requisite training and education to
                    professionals who will work with child victims and witnesses. (Guideline XV)</li>


                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                  Click here to access the full text of the Convention
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

export default ObligationPage10
