import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage15() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Court on its own motion v State of Delhi, 2007 SCC OnLine Del
                1983
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The Delhi High Court took suo motu cognisance based on a
                  complaint revealing insensitivity by various authorities while
                  dealing with a case of child sexual abuse. The Court issued
                  comprehensive guidelines covering police investigation
                  procedures (requiring non-uniformed officers, preferably
                  female Sub-Inspectors, to record statements at victim's
                  residence with trusted persons present), medical examination
                  protocols (mandating female doctors for girl
                  victims,psychiatric support, and expeditious reporting),
                  magistrate procedures (requiring prompt statement recording in
                  child-friendly environments with video recording where
                  possible), and trial court directions (ensuring in-camera
                  proceedings, avoiding confrontation with accused, and allowing
                  cross-examination questions through presiding officers).
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Delhi High Court analysed Articles 21 (Right to Life with
                  Dignity) and 14 (Right to Equality) of the Constitution to
                  mandate child-friendly procedures in sexual abuse cases. The
                  Court relied on POCSO Act provisions for child protection and
                  incorporated guidelines from landmark cases, including Sakshi
                  v. Union of India, Delhi Domestic Working Women's Forum, and
                  State of Punjab v. Gurmit Singh.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The case established that children, by reason of their
                  physical and mental status, need special safeguards and care,
                  and that child victims of sexual abuse must be treated with
                  compassion and dignity. It recognised that all authorities in
                  the Criminal Justice System have a protective role to prevent
                  further victimisation of child victims, interpreting Articles
                  21 (Right to Life with Dignity) and 14 (Right to Equality) to
                  mandate child-friendly procedures in sexual abuse cases.
                </p>
              </div>
              <div className="main mt-4">
                

               

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://cdnbbsr.s3waas.gov.in/s3d04863f100d59b3eb688a11f95b0ae60/uploads/2025/06/20250617139853866.pdf"
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

export default LandmarkPage15;
