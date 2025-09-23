import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Construction from "./Construction";

function LandmarkPage1() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Salil Balil Vs. Union of India [(2013) 7 SCC 705]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The Supreme Court was asked to examine the constitutional
                  validity of the Juvenile Justice (Care and Protection of
                  Children) Act, 2000, in the wake of the Nirbhaya gang rape
                  case, where one of the accused was a juvenile. The challenge
                  was that treating all offenders below 18 years as “juveniles”
                  and restricting their punishment to a maximum of three years
                  in a special home violated Articles 14 and 21. The Court
                  upheld the Act, holding that the classification of juveniles
                  as persons below 18 was not arbitrary. The decision stressed
                  that reform, not retribution, is the guiding principle of
                  juvenile justice in India.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Court analysed Sections 2(k), 2(l), 15 and 16 of the
                  Juvenile Justice (Care and Protection of Children) Act, 2000;
                  Articles 14 and 21 of the Constitution and also the
                  international law obligations under the UN Convention on the
                  Rights of the Child (CRC), 1989 to treat all persons under 18
                  as children, emphasizing rehabilitation and reintegration.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The legislature has wide latitude in setting the age of
                  juvenility, and once the classification is based on a clear
                  and rational standard (in this case, the age of 18), it does
                  not offend Article 14. The Juvenile Justice Act is a
                  beneficial and reformative legislation aligned with India’s
                  international obligations under the UN Convention on the
                  Rights of the Child.{" "}
                  <span className="fst-italic">
                    “The essence of the JJ Act, 2000 and Rules is restorative
                    and not retributive, providing for rehabilitation and
                    reintegration of CICL into mainstream society.”
                  </span>
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The judgment reaffirmed the rehabilitative rather than
                  punitive approach of Indian juvenile law, insulating the
                  statutory framework from public outrage and demands for
                  harsher punishment. It entrenched the principle that even in
                  heinous crimes, juveniles are to be treated with a focus on
                  reformation, though it also triggered legislative
                  reconsiderations that later culminated in the Juvenile Justice
                  Act, 2015, which introduced preliminary assessment and allowed
                  juveniles between 16–18 years to be tried as adults in heinous
                  offences.
                </p>
               
                <a className="aboutpara link" href="https://indiankanoon.org/doc/78971373/">
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

export default LandmarkPage1;
