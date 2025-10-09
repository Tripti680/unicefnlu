import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/udhr_booklet_en_web.pdf"

function ObligationPage11() {
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
          <div className="row m-1">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Universal Declaration of Human Rights
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        10 December 1948
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    States have to give all children, whether they are born in or out of wedlock, the same
                    social protection. Childhood is entitled to special assistance. (Article 25)
                  </li>
                  <li>
                    Children’s parents would have the right to choose the kind of education they want to
                    give their children. (Article 26)
                  </li>



                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                Click here to access the full text of the Declaration
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

export default ObligationPage11
