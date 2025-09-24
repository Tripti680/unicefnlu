import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage8() {
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
                Child and Adolescent Labour (Prohibition &amp; Regulation) Act,
                1986
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The Child Labour (Prohibition &amp; Regulation) Act was
                  enacted in 1986 based on recommendations from the Gurupadswamy
                  Committee (1979), which advocated for a pragmatic approach
                  focusing on banning child labour in hazardous areas while
                  regulating other sectors. The Act was significantly amended
                  in 2016 to align with constitutional mandates (Article 24) and
                  international standards, introducing a complete ban on
                  employment of children below 14 years in all occupations and
                  processes, and stricter penalties for violations.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The Act&#39;s primary objective is to prohibit the engagement
                  of children in all occupations and of adolescents (14-18
                  years) in hazardous occupations and processes. It aims to
                  eradicate child labour by creating a robust framework for
                  criminalization of offenders, while also providing a
                  rehabilitation mechanism for rescued children.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Prohibits employment of any child (&lt;14 yrs) in all
                    occupations and prohibits adolescents (14-18 yrs) from
                    working in hazardous occupations/processes listed in the
                    Act&#39;s Schedule (Section 3)
                  </li>
                  <li>
                    All offences under the Act are cognizable, meaning police
                    can register and investigate cases without prior approval of
                    a magistrate. (Section 14A)
                  </li>
                  <li>
                    Prescribes imprisonment (6 months-2 years) and/or a fine
                    (₹20,000-₹50,000) for a first offence. Repeat offenders face
                    heightened imprisonment of 1-3 years. (Section 14)
                  </li>
                  <li>
                    Mandates the rehabilitation of rescued child or adolescent
                    (Section 14C)
                  </li>
                  <li>
                    Mandates that all fines collected from violators be
                    deposited into a fund used for the welfare and
                    rehabilitation of the rescued child. (Section 14B)
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 3:</td>
                      <td className="px-3">
                        Prohibition of employment of children (&lt;14 years) in
                        any occupation or process.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 14:</td>
                      <td className="px-3">
                        Penalties for employing children (&lt;14 years) or
                        adolescents (14-18 years) in hazardous work.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 9-11:</td>
                      <td className="px-3">
                        Setting out punishments for contracting, solemnising,
                        abetting or permitting child marriages.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 14B and 14C:</td>
                      <td className="px-3">
                        Fines collected are credited to a fund for
                        rehabilitating rescued children.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/19582/1/the_child_and_adolescent_labour
_%28prohibition_and_regulation%29_act%2C_1986_no._61_of_1986_date_23.12.1986.pdf"
                >
                  Click here to access the full text of the Child and Adolescent
                  Labour (Prohibition and Regulation) Act, 1986
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

export default LegislationPage8;
