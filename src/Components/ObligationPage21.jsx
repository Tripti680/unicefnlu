import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/crcdeclare.png";

function ObligationPage21() {
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
                Foreign Secretary’s Statement at the UN Security Council Open
                Debate on Children and Armed Conflict (June 2021)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Forum:</td>
                      <td className="px-3">
                        UN Security Council Open Debate on Children and Armed
                        Conflict
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of Statement:</td>
                      <td className="px-3">28 June 2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Brief Overview:</h4>
                <ul className="aboutpara">
                  <li>
                    The Ministry of External Affairs (MEA) states that the
                    Foreign Secretary highlighted how the COVID-19 pandemic
                    exacerbated vulnerabilities faced by children in armed
                    conflict, particularly hindering access to education,
                    health, and social services, and urged that child protection
                    must remain central in pandemic response and recovery
                    planning.
                  </li>
                  <li>
                    The statement urged countries to ratify the Optional
                    Protocol to the CRC on child involvement in armed conflict
                    and warned against expanding the Council’s mandate in a way
                    that politicizes child protection.
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

export default ObligationPage21;
