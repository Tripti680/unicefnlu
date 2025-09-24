import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage10() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Information Technology Act, 2000
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  Enacted in pursuance to United Nations Resolution
                  (A/RES/51/162) on the Model Law on Electronic Commerce adopted
                  in 1997. Keeping in consideration, the model law of the United
                  Nations while enacting its domestic law as it was considered
                  necessary to give effect to the said resolution and to promote
                  efficient delivery of Government services by means of reliable
                  electronic records.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  Enacted to provide legal recognition for transactions carried
                  out by means of electronic data interchange and other means of
                  electronic communication involving the use of alternatives to
                  paper-based methods of communication and storage of
                  information and to ensure the lawful conduct of digital
                  transactions and the reduction of cybercrimes including those
                  related to children.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    Comprehensive protection to children from online sexual
                    exploitation
                  </li>
                  <li>
                    Coverage for various forms of involvement in online sexual
                    exploitation of children including recording, enticing,
                    cultivating and facilitating resources harmful to children
                  </li>
                  <li>
                    Laying down punishment for involvement in such offences
                  </li>
                </ul>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Important Provisions</h4>
                <p className="aboutpara">
                  Section 67B: Punishment for publishing or transmitting of
                  material depicting children in sexually explicit act, etc., in
                  electronic form
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf"
                >
                  Click here to access the full text of the IT Act, 2000
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

export default LegislationPage10;
