import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/g20-2018.pdf"

function ObligationPage23() {
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
                G20 Statement - Early Childhood Development, Buenos Aires,
                Argentina (2018)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Forum:</td>
                      <td className="px-3">
                        G20 Initiative for Early Childhood Development at Buenos
                        Aires, Argentina
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of Statement:</td>
                      <td className="px-3">30 November 2018</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Brief Overview:</h4>
                <ul className="aboutpara">
                  <li>
                    The G20’s Early Childhood Development (ECD) Initiative
                    recognizes that neglect in early years can trap children in
                    cycles of poverty and vulnerability.
                  </li>
                  <li>
                    Quality, well-financed ECD programs are framed as tools to
                    reduce inequality and structural disadvantage, which often
                    correlate with higher risks of exploitation, abuse, and
                    later involvement with the criminal justice system. By
                    addressing vulnerabilities early, the initiative indirectly
                    aims to prevent intergenerational patterns of exclusion and
                    crime, building stronger human capital and safer societies.
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

export default ObligationPage23;
