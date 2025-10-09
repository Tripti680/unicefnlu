import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage22() {
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
                CRC@30 Pledge (2019)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Forum:</td>
                      <td className="px-3">
                        Global commemoration of the 30th Anniversary of the UN
                        Convention on the Rights of the Child (CRC)
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of Statement:</td>
                      <td className="px-3">25 September 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Brief Overview:</h4>
                <ul className="aboutpara">
                  <li>
                    India acceded to the CRC on 11 December 1992. It ratified
                    two Optional Protocols in 2005: one on children in armed
                    conflict, and another on the sale of children, child
                    prostitution, and child pornography.
                  </li>
                  <li>
                    In its CRC@30 pledge, India committed to promoting
                    non-institutional, community-based care for children in need
                    of protection and to ensuring safe neighborhoods for all
                    children.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.ohchr.org/en/treaty-
bodies/crc/celebrating-30-years-convention-rights-child/pledge-india"
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

export default ObligationPage22;
