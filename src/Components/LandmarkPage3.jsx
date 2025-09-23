import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage3() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Parag Bhati v. State of U.P., (2016) 12 SCC 744
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The accused claimed juvenility at the time of committing the
                  offence. He produced his school/matriculation certificate as
                  proof of age. The trial court relied instead on
                  medical/ossification tests to determine age. The court was
                  tasked with determining whether ossification/medical test can
                  override a valid matriculation certificate under the Juvenile
                  Justice Act, 2000 (Section 7A + Rule 12 of JJ Rules, 2007).
                  The Supreme Court held that a matriculation certificate is
                  conclusive evidence of age, unless there are <span className="fst-italic">specific doubts
                  about its authenticity.</span> Only in the absence of matriculation
                  or school certificate can ossification/medical test be used.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Section 7A of the Juvenile Justice (Care
                  and Protection of Children) Act, 2000; and Rule 12 of the
                  Juvenile Justice (Care and Protection of Children) Rules, 2007
                  which deal with the procedure to claim juvenility at any stage
                  of proceedings, and method of age determination, prescribing a
                  hierarchy of evidence respectively.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The Court laid down a hierarchy of age-determination evidence-
                  <ul className="aboutpara">
                    <li>
                      Matriculation certificate (highest evidentiary value).
                    </li>
                    <li>School first attended.</li>
                    <li>Birth certificate from corporation/municipality.</li>
                    <li>
                      Only if none of these are available → ossification/medical
                      test.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  This case established that documentary evidence prevails over
                  medical tests in determining juvenility. Additionally, the
                  court held that age determination should occur with the best
                  interest of the juvenile in mind.
                </p>
                
                <a
                  href="https://indiankanoon.org/doc/85936912/?type=print"
                  className="fw-bold link aboutpara fs-6"
                >
                    Click here for the full text of the judgement
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

export default LandmarkPage3;
