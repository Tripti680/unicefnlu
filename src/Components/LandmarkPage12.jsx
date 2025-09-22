import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage12() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Bachpan Bachao Andolan v Union of India, (2011) 5 SCC 1
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  Bachpan Bachao Andolan filed a PIL under Article 32
                  challenging the employment of children in circuses, where
                  children were trafficked from Nepal and India. They were
                  subjected to physical, mental, and sexual abuse. Between 1996
                  and 2006, thousands of children were found to be forcibly
                  employed in travelling circuses. Subjected to harsh training,
                  physical beatings, sexual abuse, squalid living conditions,
                  and denial of education and play, they had no freedom of
                  movement and were bound by long‐term contracts.
                </p>
                <p className="aboutpara">
                  The Supreme Court, in this case, ordered a complete ban on
                  child employment in circuses, directed raids to rescue
                  trafficked children, mandated their placement in Care and
                  Protective Homes until the age of 18, required proper
                  rehabilitation schemes, and ordered verification of parents'
                  willingness and capability to take the children back.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provisions in this case are Section 154
                  CrPC (registration of First Information Report for cognizable
                  offences), Articles 21 (Right to Life with Dignity) and 24
                  (Right against Exploitation) of the Constitution, and various
                  provisions of the Juvenile Justice (Care and Protection of
                  Children) Act 2000, including Sections 18, 31(1), and 33(3).
                  The Court also interpreted the Child Labour (Prohibition and
                  Regulation) Act 1986 and international conventions on child
                  rights.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  This case established the constitutional obligation to protect
                  the children from trafficking and exploitation, particularly
                  in circuses. The Court interpreted Articles 21 (Right to Life)
                  and 24 (Right against Exploitation) to encompass comprehensive
                  child protection, along with right to education, health, and
                  development. The Court also emphasised that the State must
                  enforce domestic laws and international conventions in order
                  to prevent child exploitation, ensure rescue, and provide
                  rehabilitation.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The judgement established mandatory FIR registration for
                  missing children cases with an initial presumption of
                  abduction or trafficking. Along with that, this case also
                  established the following:
                </p>
                <ul className="aboutpara">
                  <li>
                    Standard Operating Procedures for Missing Children: Every
                    police station must appoint a trained Juvenile Welfare
                    Officer and a para-legal volunteer. Any missing-child case
                    that remains unresolved within four months must be referred
                    to the Anti-Human Trafficking Unit.
                  </li>
                  <li>
                    {" "}
                    State Monitoring by SCPCR: State Commissions for Protection
                    of Child Rights are empowered to supervise the
                    implementation of child welfare schemes.{" "}
                  </li>
                  <li>
                    {" "}
                    Care Implementation: Recovered children must be
                    photographed, medically examined for trafficking indicators,
                    and placed only in state‐run or registered homes meeting JJ
                    Act infrastructure standards.{" "}
                  </li>
                  <li>
                    {" "}
                    Rehabilitation Schemes: States are mandated to develop
                    structured, time‐bound rehabilitation and educational
                    programmes for rescued children, with periodic compliance
                    reporting to the Supreme Court
                  </li>
                </ul>
                <p className="fw-bold fs-6">
                  Click here for the full text of the judgement <sup>12</sup>{" "}
                </p>

                <a
                  className="aboutpara"
                  href="/https://indiankanoon.org/doc/653695/"
                >
                  https://indiankanoon.org/doc/653695/
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

export default LandmarkPage12;
