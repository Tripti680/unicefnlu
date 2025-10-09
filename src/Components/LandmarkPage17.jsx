import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage17() {
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
                Independent Thought v Union of India, (2017) 10 SCC 800
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  The petitioner, Independent Thought, challenged the
                  constitutionality of Exception 2 in IPC Section 375 that
                  shielded husbands from rape charges if their wives were aged
                  15-18. The Supreme Court observed that this exemption
                  conflicts with the statutory purpose of prohibiting sexual
                  activity with children under 18 as outlined in the IPC, POCSO
                  Act, and the Prohibition of Child Marriage Act (PCMA).
                  Legislative history showed increasing ages for marriage and
                  consent, yet the Exception 2 age remained at 15. After a
                  comprehensive examination of constitutional and international
                  human rights protections, and extensive discussion on the
                  harms of child marriage, the Court declared the exception
                  constitutionally impermissible, citing health risks, lack of
                  consent, and social consequences, effectively criminalising
                  all sexual acts with girls below 18 years even in marriage.
                  The Court issued a purposive harmonising interpretation
                  without striking down the provision, urging legislative action
                  to amend it accordingly.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provisions in this case include Section 375
                  IPC (definition of rape) and Exception 2 thereof, which
                  exempted husbands from rape charges for wives, aged 15-18. The
                  Court interpreted Sections 5 and 6 of the POCSO Act 2012,
                  Articles 14 (Equality), 15(3) (Special provisions for women
                  and children), and 21 (Right to life and personal liberty) of
                  the Constitution. The judgment also analysed Section 41 IPC
                  regarding special laws and provisions of the Prohibition of
                  Child Marriage Act (PCMA).
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The Supreme Court, in this case, held that sexual intercourse
                  with a girl below 18 years of age is rape irrespective of
                  marital status, thereby reading down Exception 2 to Section
                  375 IPC, which had exempted penile intercourse by a husband
                  with his wife aged between 15 and 18 from the definition of
                  rape. This exception was found to be arbitrary and
                  discriminatory, violating Articles 14 (Equality), 15
                  (Prohibition of discrimination), and 21 (Right to life and
                  personal liberty) of the Indian Constitution. <br />
                  The Court emphasised that the Protection of Children from
                  Sexual Offences (POCSO) Act and related child protection laws
                  override the inconsistent provisions of IPC due to their
                  status as special legislation under Article 15(3).
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  This judgment marked a landmark shift in child protection
                  jurisprudence by aligning Indian criminal law with national
                  and international child rights commitments. It reinforced the
                  constitutional rights of girls to bodily integrity, dignity,
                  and reproductive choice, denying archaic cultural or social
                  practices a shield for child marriage-related sexual violence.
                </p>

               

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://indiankanoon.org/doc/87705010/"
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

export default LandmarkPage17;
