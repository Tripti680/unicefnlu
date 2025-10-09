import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/C138.pdf";

function ObligationPage4() {
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
             Minimum Age Convention, 1973 (No. 138)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">26 June 1973</td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">19 June 1976</td>
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
                    Each Member must pursue a national policy aimed at the
                    effective abolition of child labour. This policy must raise
                    the minimum age for employment to a level consistent with
                    the fullest physical and mental development of young persons
                    (Article 1).
                  </li>
                  <li>
                    The minimum age shall not be less than the age of completion
                    of compulsory schooling and, in any case, shall not be less
                    than 15 years (Article 2.2).
                  </li>
                  <li>
                    A Member whose economy and educational facilities are
                    insufficiently developed may initially specify a minimum age
                    of 14 years with reasons submitted via reports (Article
                    2.4).
                  </li>
                  <li>
                    The minimum age for employment or work that is likely to
                    jeopardize the health, safety or morals of young persons
                    must not be less than 18 years (Article 3.1). This may be
                    lowered to 16 years for certain types of work, provided that
                    health, safety, and morals are fully protected and they have
                    received adequate specific instruction and vocational
                    training (Article 3.3).
                  </li>
                  <li>
                    Members with insufficiently developed economies and
                    administrative facilities may limit the scope of application
                    and specify the branches of economic activity or types of
                    undertakings to which it will apply (Article 5.1).
                  </li>
                  <li>
                    The Convention must apply at minimum to employment in mining
                    and quarrying; manufacturing; construction; electricity, gas
                    and water; sanitary services; transport, storage and
                    communication; and plantations and other agricultural
                    undertakings mainly producing for commercial purposes
                    (excluding specific family and small-scale holdings)
                    (Article 5.3).
                  </li>
                  <li>
                    The best interest of the child is a primary concern in the
                    justice system [Articles 8 (3) and 26].
                  </li>
                  <li>
                    The Convention generally does not apply to work done by
                    young persons in schools for general, vocational, or
                    technical education, or in training institutions (Article
                    6).
                  </li>
                  <li>
                    National laws or regulations may permit the employment or
                    work of persons 13 to 15 years of age on light work if not
                    harmful to their health/development or affecting their
                    schooling (Article 7.1).
                  </li>
                  <li>
                    {" "}
                    Permits for exceptions to the general prohibition of
                    employment for participation in artistic performances may be
                    granted (Article 8).{" "}
                  </li>
                  <li>
                    {" "}
                    National laws or regulations must require employers to
                    register or maintain documents containing the names, ages,
                    and dates of birth of persons whom they employ or work for,
                    who are less than 18 years of age (Article 9.3).
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

export default ObligationPage4;
