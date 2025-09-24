import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage8() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Manoj @ Kali Vs. State (NCT of Delhi) [2006 Cri LJ 4759]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The JJB and Sessions court rejected the bail application of a
                  minor on the grounds that it would ‘defeat the ends of
                  justice’ under Section 12(1) of the JJ Act. The courts
                  justified this by relying on concerns about the efficacy of at
                  since the minor’s trial was yet to start, witnesses yet to be
                  examined, cases against his co-accused were pending and his
                  release affecting the trial of his adult co-accused was a
                  possibility, it would be impeding the cause of justice. In
                  appeal, the Delhi High Court granted bail to the minor stating
                  that ‘ends of justice’ was wrongly interpreted to include
                  trial related concerns and must be read in the context of the
                  juvenile’s welfare instead. Relying on the SIR report, the
                  court observed the minor had shown no criminal history, no
                  adverse family or social background, and no negative peer
                  influences so the prescribed grounds under Section 12 did not
                  apply.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provision is Section 12(1) of the Juvenile
                  Justice (Care and Protection of Children) Act, 2000 which
                  pertains to the grant of bail to a juvenile. The law allows
                  denial of bail if the court has reasonable grounds for
                  believing that the release is likely to bring him into
                  association with any known criminal or expose him to moral,
                  physical or psychological danger or that his release would
                  defeat the ends of justice.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The ‘ends of justice’ exception under Section 12 cannot be
                  invoked on mere procedural grounds such as a pending trial or
                  unexamined witnesses. It can only be assessed in the context
                  of the juvenile’s welfare, developmental needs, and potential
                  for rehabilitation. The court also held that a juvenile is
                  mandatorily entitled to bail under the JJ Act unless the court
                  believes there are reasonable grounds that the specific three
                  conditions to refuse bail are met.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  This judgement ensured the discretion accorded to judges in
                  interpreting the ‘ends of justice’ proviso under Section 12
                  was tailored to advance the ethos of the Act. The National
                  Commission for Protection of Child Rights (NCPCR) and other
                  organizations have released guidelines or state level roles
                  that explicitly emphasize the mandatory nature of bail under
                  Section 12, unless the exceptions are clearly made out.
                </p>
                

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https:/indiankanoon.org/doc/743968/"
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

export default LandmarkPage8;
