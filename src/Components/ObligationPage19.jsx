import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage19() {
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
                Memorandum of Understanding (MoU) between India and Myanmar on
                bilateral cooperation for Prevention of Trafficking in Persons;
                Rescue, Recovery, Repatriation and Re-integration of victims of
                Trafficking
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Signatories:</td>
                      <td className="px-3">India and Myanmar</td>
                    </tr>
                    <tr>
                      <td className="">Objective:</td>
                      <td className="px-3">
                        Enhance cooperation on trafficking prevention, rescue,
                        recovery, and repatriation.
                      </td>
                    </tr>

                    <tr>
                      <td className="">Signed on:</td>
                      <td className="px-3">27 February 2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Collaborate to prevent trafficking and protect victims.
                  </li>
                  <li>
                    Ensure fast investigation and prosecution of traffickers and
                    crime networks.
                  </li>
                  <li>
                    Strengthen immigration and border control cooperation with
                    relevant agencies.
                  </li>
                  <li>
                    Establish joint Working Groups/Task Forces on trafficking
                    prevention. Share secure databases on traffickers and
                    victims through designated focal points.
                  </li>
                  <li>
                    Conduct capacity-building programs for concerned agencies.
                  </li>
                  <li>
                    Develop and adopt SOPs for rescue, recovery, repatriation,
                    and reintegration of victims.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1593659"
                  target="_blank"
                >
                  Click here to access the GoI press note on the MoU
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

export default ObligationPage19;
