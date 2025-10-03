import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/crc-conflict.pdf";


function ObligationPage2() {
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
                Optional Protocol to the Convention on the Rights of the Child on the Involvement of Children
                in Armed Conflict
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        25 May 2000
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        12 February 2002
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        30 November 2005
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Governments of States Parties must take all possible steps to ensure that members of
                    their armed forces who are under 18 years old do not directly participate in fighting
                    [Article 1].
                  </li>
                  <li>
                    Governments must ensure that no one under 18 years old is forced to join their armed
                    forces [Article 2].
                  </li>
                  <li>If governments allow people to voluntarily join their national armed forces before
                    turning 18, they must raise the minimum age for this and implement safeguards. Such
                    recruitment must be truly voluntary, carried out with the informed consent of parents
                    or legal guardians, that recruits are fully aware of their duties, and provide reliable proof
                    of age [Article 3].</li>
                  <li>Armed groups that are separate from a country’s official armed forces must not recruit
                    or use anyone under 18 years old in fighting [Article 4, paragraph 1]. Governments are
                    required to take all possible measures to prevent such recruitment and use, including
                    making these practices illegal and criminal [Article 4, paragraph 2].</li>
                  <li>Governments must ensure that children recruited or used in fighting are released from
                    service and receive all necessary help for their physical and psychological recovery and
                    social reintegration [Article 6, paragraph 3].</li>
                  <li>Governments are encouraged to work together to implement the protocol, including
                    preventing activities that go against it and helping child victims recover [Article 7,
                    paragraph 1].</li>
                  <li>Each government must provide reports to the Committee on the Rights of the Child on
                    the measures they have taken to implement the protocol [Article 8, paragraph 1].</li>

                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
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

export default ObligationPage2
