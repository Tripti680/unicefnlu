import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage1() {

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
                The Convention on the Rights of the Child
              </h4>
<div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        20 November 1989
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                       2 September 1990
                      </td>
                    </tr>
                     <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                       11 December 1992
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                   In all decisions and actions concerning children, their best interests must be the most
important consideration [Article 3(1)].
                  </li>
                 
                </ul>
              </div>

              
              
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="crc.pdf"
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

export default ObligationPage1
