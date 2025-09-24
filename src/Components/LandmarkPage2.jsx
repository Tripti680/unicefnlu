import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Construction from "./Construction";

function LandmarkPage2() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12 px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Subramanian Swamy Vs. Raju [(2014) 8 SCC 390]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  Raju, one of the accused in Nirbhaya case was a minor and his
                  case was referred to the Juvenile Justice Board for inquiry,
                  per the provisions of the JJ Act 2015. Dr Subramaniam Swamy
                  challenged the application of the JJ Act to juveniles accused
                  of serious and heinous crimes. He contended that it violates
                  Article 14 insofar as it treated all offenders below 18 the
                  same, regardless of mental maturity or gravity of the crime.
                  He further argued that to advance the purpose of the law, the
                  concept of ‘juvenility’ should consider mental maturity in
                  addition to chronological age. Additionally, such an approach
                  would harmonize JJ Act with Section 82 and 83 of the IPC where
                  children are only liable if they have a sufficient
                  understanding of right and wrong. The Court, however, held
                  that age is a practical and objective criterion, and such a
                  broad classification is consistent with the scheme of Article
                  14. It relied on various international treaties and
                  conventions to support this approach. The Court concluded that
                  the Act need not be read down, as it is not unconstitutional.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  Primarily, the case engaged Article 14 of the Constitution
                  insofar as it was classifying persons below the age of 18 in
                  class or group and creating a separate scheme of trial and
                  punishment for them. The court drew extensively from
                  international treaties and conventions to support the
                  classification argument. These include the UN Standard Minimum
                  Rules for the Administration of Juvenile Justice (Beijing
                  Rules, 1985), Convention on the Rights of the Child (CRC,
                  1990), Havana Rules (UN Rules for the Protection of Juveniles
                  Deprived of Liberty, 1990), Riyadh Guidelines and Vienna
                  Guidelines. Section 83 of the IPC was invoked to support a
                  maturity-based interpretation of the JJ Act 2015. This
                  provision states that a child can commit an offence if he has
                  sufficient maturity of understanding to judge of the nature
                  and consequences of his conduct on that occasion.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The JJ Act is constitutional under Article 14 because the
                  classification of persons as juveniles below 18 is
                  identifiable and bears a reasonable connection with the object
                  of the law. Chronological age is a legitimate, practical, and
                  objective test for determining “juvenility” under the Act. The
                  Court noted a considerable body of world opinion that all
                  persons under 18 should be treated as juveniles and subject to
                  separate treatment for offences, and that the JJ Act aligns
                  with India’s international commitments regarding juvenile
                  justice. Even if some countries or international commentators
                  suggest that mental maturity should be considered for all
                  juvenile offenders, India’s Parliament is free to legislate
                  differently. The object of the JJ Act is to ensure
                  rehabilitation and enable young offenders to become useful
                  members of society in later years.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  This case solidified the Juvenile Justice Scheme in the Indian
                  context; no major challenge has arisen to the Act
                  subsequently. India’s approach to Juvenile Justice was also
                  harmonised with international norms and best practices marking
                  an extremely progressive step.
                </p>
                

                 <a
                  href="https://indiankanoon.org/doc/134314390/"
                  className="fw-bold link aboutpara"
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

export default LandmarkPage2;
