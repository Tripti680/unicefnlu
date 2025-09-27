import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage13() {
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
                International Covenant on Civil and Political Rights
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        16 December 1966
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        23 March 1976
                      </td>
                    </tr>

                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        10 April 1979
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Judgments which are in the interest of juvenile persons or concern the guardianship of
                    children do not have to be made public. (Article 14)
                  </li>
                  <li>
                    Parents and legal guardians are given the liberty to conduct the religious and moral
                    education of their children according to their own beliefs and convictions. (Article 18)
                  </li>
                  <li>The Covenant requires states to make provisions for the protection of children in the
                    case of dissolution of marriages. (Article 23)</li>




                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="iccpr.pdf"
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

export default ObligationPage13
