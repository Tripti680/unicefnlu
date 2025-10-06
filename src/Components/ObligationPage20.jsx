import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/g20-2023.pdf";

function ObligationPage20() {
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
                G20 Statement - Maternal, Newborn, Child and Adolescent Health
                and Well-being, G20 India 2023
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Forum:</td>
                      <td className="px-3">G20 Summit, India</td>
                    </tr>
                    <tr>
                      <td className="">Date of Statement:</td>
                      <td className="px-3">20 May 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Brief Overview:</h4>
                <ul className="aboutpara">
                  <li>
                    The Statement stresses that improving maternal, newborn,
                    child and adolescent health is essential for human capital
                    and sustainable development, especially after setbacks from
                    the pandemic, climate change and conflict.
                  </li>
                  <li>
                    It highlights the need for greater investment, since these
                    groups make up more than half the world’s population and
                    returns on health spending are high.
                  </li>
                  <li>
                    Effective interventions exist, but inequities persist.
                  </li>
                  <li>
                    The G20, holding most of global GDP and population, must act
                    by prioritising funding, adopting multisectoral approaches,
                    strengthening data systems, institutionalising MNCAH&amp;W
                    in its agenda and ensuring meaningful participation of
                    women, children and adolescents in policy decisions.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                  Click here to access the full text of the Statement
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

export default ObligationPage20;
