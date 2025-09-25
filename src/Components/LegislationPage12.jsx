import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage12() {
   const styles = {
   
    accordionHeader: {
      background: "#0a2c5f",
      color: "#fff",
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
                Bharatiya Nyaya Sanhita, 2023
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The act repeals the Indian Penal Code. The objective behind
                  this new legislation is to update and reform the existing
                  criminal law framework by consolidating and amending previous
                  provisions.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The primary objectives include decolonizing India&#39;s legal
                  system by removing outdated provisions and incorporating
                  contemporary criminal justice principles. The BNS introduces
                  new offenses like organized crime, terrorism, and mob lynching
                  while enhancing protection for women, children, and
                  marginalized communities. It emphasizes community service as
                  an alternative punishment, incorporates technology in legal
                  processes, and introduces stricter penalties for crimes
                  against the state and public order.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Heightened Protection and Severe Penalties for Sexual
                    Offences Against Minors (Ss. 63(v), 70(2))
                  </li>
                  <li>
                    Comprehensive Criminalization of Child Exploitation (Chapter
                    V)
                  </li>
                  <li>
                    Provisions Against Abandonment, Concealment of Birth, and
                    Abduction (Ss. 93, 94)
                  </li>
                  <li>
                    Protection from Obscenity and Abetment of Suicide (Ss. 107,
                    295)
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 63(vi), 70(2):</td>
                      <td className="px-3">Rape of a minor</td>
                    </tr>
                    <tr>
                      <td className="">Sections 93-99:</td>
                      <td className="px-3">
                        Chapter V- on offences against child
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 107:</td>
                      <td className="px-3">Abetment of suicide of child</td>
                    </tr>
                    <tr>
                      <td className="">Section 137:</td>
                      <td className="px-3">Kidnapping</td>
                    </tr>
                    <tr>
                      <td className="">Section 139:</td>
                      <td className="px-3">
                        Kidnapping or maiming a child for purposes of begging
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 141:</td>
                      <td className="px-3">
                        Importation of girl or boy from foreign country
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 295:</td>
                      <td className="px-3">
                        Sale, etc., of obscene objects to child.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf"
                  target="_blank"
                >
                  Click here to access the full text of the BNS, 2023
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

export default LegislationPage12;
