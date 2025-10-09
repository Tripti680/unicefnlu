import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/C182.pdf";

function ObligationPage5() {
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
              <h4
                className="fw-bold mt-3 bluetxt yellowclr "
                style={styles.accordionHeader}
              >
            Worst Forms of Child Labour Convention, 1999 (No. 182)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">17 June 1999</td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">19 November 2000</td>
                    </tr>
                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">13 June 2017</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Each Member must take immediate and effective measures to
                    secure the prohibition and elimination of the worst forms of
                    child labour (Article 1).
                  </li>
                  <li>
                    The worst forms of child labour includes four main
                    categories: Slavery, prostitution/pornograpohic
                    performances, illicit activities such as the production and
                    trafficking of drugs, and hazardous work (Article 3).
                  </li>
                  <li>
                    Members must establish or designate appropriate mechanisms
                    to monitor the implementation of the Convention (Article 5).
                  </li>
                  <li>
                    Members must design and implement programmes of action as a
                    priority measure to eliminate the worst forms of child
                    labour (Article 6).
                  </li>
                  <li>
                    Members must take all necessary measures to ensure effective
                    implementation (Article 7). This includes the following:
                    <ul>
                      <li>
                        Prevent the engagement of children in the worst forms of
                        child labour.
                      </li>
                      <li>
                        Provide direct assistance for the removal of children
                        from the worst forms of child labour and for their
                        rehabilitation and social integration.
                      </li>
                      <li>
                        Ensure access to free basic education, and vocational
                        training.
                      </li>
                      <li>
                        Identify and reach out to children at special risk.
                      </li>
                      <li>Take account of the special situation of girls.</li>
                    </ul>
                  </li>
                  <li>
                    Need for enhanced international cooperation, including
                    support for universal education, poverty eradication, and
                    social/economic development (Article 8).
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                  Link to full text
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

export default ObligationPage5;
