import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage6() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Pratap Singh Vs. State of Jharkhand (2000) 5 SCC 488
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  Pratap Singh was produced in the trial court in lieu of
                  committing a serious offence. However, a key issue arose about
                  what age should be considered for determining whether he was a
                  juvenile. The lower courts, relying on the logic laid down in
                  Arnit Das v State of Bihar, held that juvenility should be
                  determined based on date of production before the competent
                  authority. The Supreme Court overturned Das on this point,
                  holding that the date the offence is committed is the only
                  correct date to determine juvenility.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provisions include Section 3 of the
                  Juvenile Justice Act 1986 which states that if a juvenile
                  ceases to be so during enquiry proceedings continue as if he
                  were still juvenile. Additionally, Section 2(e) defines a
                  ‘delinquent juvenile’ as a ‘juvenile who has been found to
                  have committed an offence’.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The court stated that based on Section 2(e) and 3 of the JJ
                  Act, it is evident that the legislature intended the relevant
                  point to be the time of commission of the offence. The court
                  also observed that the Juvenile Justice Act is a beneficial
                  legislation aimed at protecting children; its provisions must
                  be construed liberally in favour of the accused child.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The court settled the position of law on the relevant age for
                  juvenility. Earlier, Arnit Das and Umesh Chandra v State of
                  Rajasthan provided contrary decisions on this point of law.
                </p>
                <p className="fw-bold fs-6">
                  Click here for the full text of the judgement <sup>6</sup>{" "}
                </p>

                <a
                  className="aboutpara"
                  href="/https://indiankanoon.org/doc/254131/"
                >
                  https://indiankanoon.org/doc/254131/
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

export default LandmarkPage6;
