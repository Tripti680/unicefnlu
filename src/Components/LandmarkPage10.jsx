import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage10() {
   const styles = {
   
    accordionHeader: {
      background: "#ffc107",
      color: "#0a2c5f",
      padding: "15px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
  
  };
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row m-1">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Shilpa Mittal v. State of NCT of Delhi [(2020) (2) SCC 787]
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  A juvenile was accused of committing culpable homicide not
                  amounting to murder, an offence carrying no statutory minimum
                  punishment but a maximum sentence of 10 years. The Juvenile
                  Justice Board and the Children’s Court classified the offence
                  as ‘heinous’ and, on that basis, ordered a preliminary
                  assessment under Section 15 of the JJ Act to determine whether
                  the child should be tried as an adult. On appeal, the Supreme
                  Court held that the trial court had misclassified the offence:
                  only offences with a statutory minimum of seven years or more
                  fall within the category of ‘heinous offences.’ Since this
                  case lacked such a minimum, it should instead be treated as a
                  ‘serious offence.’
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provisions include Section 2(33) of the
                  Juvenile Justice (Care and Protection of Children) Act, 2015
                  which defines ‘heinous offences’ as offences for which the
                  minimum punishment is seven years or more under any law.
                  Section 15 allows the JJB to conduct an assessment into
                  children who commit such ‘heinous offences’ to determine
                  whether they can stand trial as an adult. The following
                  sections are useful to understand the broader categorisation
                  of cases: Section 2(45) defines petty offences as those for
                  which the maximum punishment under the IPC or any other law is
                  imprisonment up to three years, while Section 2(54) defines
                  serious offences as those punishable with imprisonment between
                  three to seven years. Lastly, Section 18 details the orders
                  the JJB can pass depending on the category of offence.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  Under Section 2(33) of the JJ Act heinous offences are those
                  for which the minimum punishment is seven years or more under
                  the IPC or any other law. An offence that prescribes a maximum
                  punishment of more than seven years but no minimum punishment
                  (or a minimum less than 7 years) it cannot be treated a
                  heinous offence. The court stated that such offences fall into
                  a ‘gap’ category not expressly covered by the Act, and it
                  could not, by judicial interpretation, expand the statutory
                  definition of the heinous offences to accommodate the same.
                  The court elected to treat such offences as ‘serious offences’
                  instead, aiming to fill a gap in the law until Parliament
                  amends the Act. The Court stated that when one interpretation
                  favours the child and the other does not, the interpretation
                  favouring the child must prevail.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The court filled an important gap in the law and provided
                  clarity on how to try cases that did not fit into the neat
                  categories of the Act. In doing so it addressed the many
                  inconsistencies in sentencing and procedure that were arising
                  in different states on this point of law. The Supreme Court
                  said this was an interim solution until Parliament intervenes.
                  However, no major amendment has plugged this so the court’s
                  directive in this regard still stands. This case is also
                  important as children tried under such offences would be
                  shielded from the intrusive preliminary inquiry under Section
                  15. Therefore, juveniles accused of offences with no minimum
                  but a maximum over 7 years can be shielded from adult trial
                  and kept within the ‘reformative’ fold of the JJ system.
                </p>
                

                <a
                  className="aboutpara link aboutpara fs-6"
                  href=""
                  target="_blank"
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

export default LandmarkPage10;
