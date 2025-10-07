import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/icescr.pdf";

function ObligationPage12() {
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
                International Covenant on Economic, Social, and Cultural Rights
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
                        3 January 1976
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
                    States that are a party to this Covenant have to protect and assist the family unit as it is
                    recognized as the fundamental group unit of society. It is responsible for the care and
                    education of dependent children. (Article 10)
                  </li>
                  <li>
                    Mothers have to be given special protection for a reasonable period before and after
                    childbirth. (Article 10)
                  </li>
                  <li>Special protection and assistance has to be provided on behalf of all children and young
                    people. There should be no discrimination due to their parentage or any other reason.
                    (Article 10)</li>
                  <li>They should be protected from economic and social exploitation. Any work which may
                    be harmful to their morals or health or interfere with their development should be
                    made punishable by law. (Article 10)</li>
                  <li>States also have a requirement to set age limits below which paid employment of child
                    labour is not allowed and would be punishable by law. (Article 10)</li>
                  <li>To fully realize the right to health, states have to make provisions for the reduction of
                    the stillbirth rate and infant mortality. Moreover, they need to take measures for the
                    healthy development of children. (Article 12)</li>
                  <li>Parents or legal guardians of the children would have the right to choose the religious
                    and moral education of their children according to their own beliefs. (Article 13)</li>



                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
               Click here to access the full text of the ICESCR
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

export default ObligationPage12
