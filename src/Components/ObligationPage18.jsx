import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage18() {
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
                MoU between the Government of the Republic of India and the
                Government of the Kingdom of Cambodia on Cooperation for
                Prevention of Human Trafficking especially Trafficking in Women
                and Children; Rescue, Recovery, Repatriation and Re. Integration
                of Victims of Trafficking
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Signatories:</td>
                      <td className="px-3">
                        Republic of India, and the Government of the Kingdom of
                        Cambodia
                      </td>
                    </tr>
                    <tr>
                      <td className="">Objective:</td>
                      <td className="px-3">
                        Increase bilateral co-operation on issues of prevention,
                        rescue, recovery and repatriation related to human
                        trafficking especially women and children expeditiously.
                      </td>
                    </tr>

                    <tr>
                      <td className="">Signed on:</td>
                      <td className="px-3">27 January 2018</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Human trafficking women and children is a severe violation
                    of rights and dignity.
                  </li>
                  <li>
                    Parties share the common concern against transnational human
                    trafficking specifically of women and children.
                  </li>
                  <li>
                    Mutual co-operation through law enforcement and criminal
                    procedure to prevent and combat crime of human trafficking
                    against women and children to be effected.
                  </li>
                  <li>
                    To ensure speedy investigation and prosecution of
                    traffickers and organized crime groups in both countries.
                  </li>
                  <li>
                    The MoU has defined trafficking, victims in trafficking,
                    traffickers, child and focal point.
                  </li>
                  <li>
                    Preventive measures shall be taken by both parties to ensure
                    that the respective legal frameworks of the parties conform
                    with the associated International Standards. This shall
                    include use of Task Forces and competent authorities,
                    capacity building programmes for concerned agencies of both
                    countries, regulation of activities of manpower recruiting,
                    and development and sharing database on traffickers and
                    victims in trafficking.
                  </li>
                  <li>
                    Treatment of women and children found as victims of
                    trafficking as victims of trafficking and not violators or
                    offenders of the immigration law.
                  </li>
                  <li>
                    Repatriation of victims to be arranged and conducted and if
                    it goes beyond six months in absence of action, it can be
                    escalated to the higher authorities.
                  </li>
                  <li>
                    Both parties shall establish a Joint Task Force to monitor
                    and assess the implementation of MoU, make recommendations
                    for further development, review implementation every two
                    years and called to meet when the need arises.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://drive.google.com/drive/folders/1BPu-cWezzCwASKsK-U8nRKuINXYE-Z9E"
                  target="_blank"
                >
                  Click here to access the full text of the MoU
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

export default ObligationPage18;
