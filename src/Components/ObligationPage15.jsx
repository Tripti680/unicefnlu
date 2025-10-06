import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/saarc-welfare.pdf"

function ObligationPage15() {
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
                SAARC Convention on Regional Arrangements for the Promotion of Child Welfare in South Asia
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        5 January 2002
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        15 November 2005
                      </td>
                    </tr>

                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        5 January 2002
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Objective is to enable states to fulfil their promises related to child protection and to set
                    up the required regional arrangements to assist the States in protecting the rights of the
                    Child. (Article 2)
                  </li>
                  <li>
                    States will try to implement the UN Convention on the Rights of the Child. (Article 3)
                  </li>
                  <li>The principle “the best interests of the child” shall be upheld as the paramount
                    principle. (Article 3)</li>
                  <li>The convention will serve as a guiding force for all national laws and bilateral or
                    multilateral agreements. (Article 3)</li>
                  <li>A special emphasis on regional priorities will be placed, benefitting from bilateral and
                    regional cooperation. (Article 4)</li>
                  <li>A policy of development will be pursued to ensure basic services such as education and
                    health care. (Article 4)</li>
                  <li>Legal safeguards require member states to establish administrative mechanisms
                    protecting children from all forms of exploitation, including measures to eliminate child
                    labor through multilayered strategies incorporating both education and family support
                    systems. (Article 4)</li>
                  <li>Judicial procedures have to be expedited for cross border child welfare matters,
                    emphasizing preserving dignity in juvenile justice administration that prioritizes
                    reintegration. (Article 4)</li>
                  <li>Implementation mechanisms include structured information sharing, human resource
                    development through specialized training programs, strengthened institutional capacity
                    for preventing inter-country child abuse, and regional nutrition initiatives addressing
                    food security concerns. (Article 5)</li>





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

export default ObligationPage15
