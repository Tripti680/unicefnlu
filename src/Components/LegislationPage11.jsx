import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage11() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Information Technology Rules, 2021
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  Enacted as a result of the growing need to regulate
                  India&#39;s expanding digital ecosystem and growing concerns
                  around misuse of these platforms for the proliferation of
                  illegal or harmful content such as child sex abuse material
                  etc. Passed in exercise of the powers conferred by section 87
                  (1) and section 87(2)(z), (zg) of the Information Technology
                  Act, 2000. The rules replaced the 2011 Intermediary
                  Guidelines.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  To create a comprehensive framework for digital governance
                  with multiple objectives and prescribe a framework for the
                  regulation of content by online publishers of news and current
                  affairs content, and curated audio-visual content while
                  ensuring e a grievance redressal mechanism for resolving
                  complaints from users or victims. To establish Significant
                  Social Media Intermediaries as a distinct category and
                  imposing special requirements upon them.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Imposition of the duty on the intermediary to inform its
                    rules and regulations, privacy policy and user agreement to
                    the and to make reasonable efforts by itself, and to cause
                    the users not to display, upload, modify, publish, transmit,
                    store, update or share any information that may be harmful
                    to child. (Rule 3(1)(b)(iii))
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Rule 3(1)(b)(iii):</td>
                      <td className="px-3">
                        Due diligence by intermediatory with reference to
                        material that is harmful to child
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.meity.gov.in/static/uploads/2024/02/IT-Intermediary-Rules-2021-updated-on-
28.10.2022-2.pdf"
                >
                  Click here to access the full text of the IT Rules, 2021
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

export default LegislationPage11;
