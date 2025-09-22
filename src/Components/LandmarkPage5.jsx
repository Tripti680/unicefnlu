import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage5() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Ram Vijay Singh v. State of U.P. [2021 SCC OnLine SC 142]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The appellant claimed juvenility and sought the benefit of the
                  JJ Act. The Supreme Court noted that when a person is produced
                  before the Juvenile Justice Board, their physical appearance
                  should first be assessed to determine age. Only if doubt
                  exists should further documentary or medical evidence be
                  sought. In this case, the appellant was about 55 years old at
                  the time of ossification testing. The Court held that
                  ossification tests at such an advanced age could not yield
                  reliable results. Since no trustworthy medical evidence was
                  available, the Court refused to accept the juvenility claim
                  and held that the appellant could not be declared a juvenile
                  on the date of the incident.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Sections 2(35) and 94 of the Juvenile
                  Justice (Care and Protection of Children) Act, 2015 which deal
                  with the definition of “juvenile” and “child in conflict with
                  law”, and down the procedure for age determination.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The Court clarified the hierarchy of age determination under
                  the JJ Act. Physical appearance is the first step, followed by
                  reliance on documentary evidence, and only in the absence of
                  these medical evidence, such as an ossification test, should
                  be considered. Moreover, ossification tests lose reliability
                  at older ages, and the law cannot demand reliance on
                  ‘impossible or unreliable’ procedures, applying the maxim lex
                  non cogit ad impossibilia.{" "}
                  <span className="fst-italic">
                    “The essence of the JJ Act, 2000 and Rules is restorative
                    and not retributive, providing for rehabilitation and
                    reintegration of CICL into mainstream society.”
                  </span>
                </p>
                <p className="fw-bold fs-6">
                  Click here for the full text of the judgement <sup>5</sup>{" "}
                </p>

                <a
                  className="aboutpara"
                  href="/https://indiankanoon.org/doc/19530662/"
                >
                  https://indiankanoon.org/doc/19530662/
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

export default LandmarkPage5;
