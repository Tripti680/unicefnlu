import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage16() {
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
                SAARC Convention on Preventing and Combating Trafficking in
                Women and Children for Prostitution
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">5 January 2002</td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">15 November 2005</td>
                    </tr>

                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">5 January 2002</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    The Convention aims to foster regional cooperation among
                    SAARC nations to prevent, suppress, and address trafficking
                    in women and children, including their repatriation,
                    rehabilitation, and protection from international
                    prostitution networks. (Article 2)
                  </li>
                  <li>
                    The State Parties shall criminalise trafficking in all
                    forms, punish those who manage, finance, or facilitate
                    places used for trafficking, and also penalise attempts,
                    abetment, or financing of such crimes. (Article 3){" "}
                  </li>
                  <li>
                    Courts must consider factors like organised crime
                    involvement, violence, public office misuse, child
                    victimisation, offences in custodial/educational spaces, and
                    prior convictions as aggravating circumstances. (Article 4)
                  </li>
                  <li>
                    Judicial authorities must protect the confidentiality of
                    women and child victims and provide them with counselling
                    and legal aid. (Article 5)
                  </li>
                  <li>
                    Member States shall grant each other broad mutual legal
                    assistance in investigations, trials, and proceedings,
                    covering evidence, records, searches, extradition, and
                    related cooperation. (Article 6)
                  </li>
                  <li>
                    Trafficking offences are extraditable; where extradition is
                    denied, States must prosecute offenders domestically,
                    including their own nationals. (Article 7)
                  </li>
                  <li>
                    States must strengthen authorities, train agencies, set up
                    regional and bilateral mechanisms, exchange information,
                    regulate recruitment agencies, focus on source areas, and
                    promote awareness through media. (Article 8)
                  </li>
                  <li>
                    States must arrange repatriation, provide interim care,
                    shelters, legal and health aid, rehabilitation, and involve
                    NGOs in prevention and victim support. (Article 9)
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://drive.google.com/file/d/1wghhl2RQy_uJpp2HLisetsoQIY_4mi64/view"
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
  );
}

export default ObligationPage16;
