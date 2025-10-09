import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function LandmarkPage16() {
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
                Re: Exploitation of children in orphanages in the State of TN v
                Union of India, (2020) 14 SCC 327
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  Following reports of systematic sexual abuse of children in
                  the orphanages in Tamil Nadu, including a sting operation
                  revealing sexual services of children being provided to
                  foreigners and Indian tourists with rates fixed over
                  telephone, the Supreme Court directed all States and Union
                  Territories to implement protective provisions of POCSO Act
                  2012, Right to Education Act 2009, and Commission for
                  Protection of Child Rights Act 2005. The Court mandated the
                  establishment of State Commissions for the Protection of Child
                  Rights and required proper utilisation of grants under the
                  Integrated Child Protection Scheme.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The relevant legal provisions include the Juvenile Justice
                  (Care and Protection of Children) Act, 2015, particularly
                  Section 2(14) defining “children in need of care and
                  protection,” Section 41 regarding registration of child-care
                  institutions, and Sections 53-54 on rehabilitation and
                  inspection. <br />
                  The Court also enforced provisions of the Protection of
                  Children from Sexual Offences (POCSO) Act 2012, Commissions
                  for Protection of Child Rights Act 2005, and interpreted
                  Article 39(f) of the Constitution alongside Article 19 of the
                  Convention on the Rights of the Child (CRC).
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <ul className="aboutpara">
                  <li>
                    Expansive Interpretation of Child Protection  -  Section
                    2(14) of the JJ Act must be read broadly and purposively,
                    treating its list of “children in need of care and
                    protection” as illustrative rather than exhaustive, to
                    include victims of sexual abuse under POCSO and child
                    trafficking.{" "}
                  </li>
                  <li>
                    e-institutionalisation as Priority  -  Institutionalisation
                    is a last resort. In line with CRC Article 20, authorities
                    must first seek family-based alternatives such as foster
                    care, adoption, or sponsorship before placing a child in an
                    institution.{" "}
                  </li>
                  <li>
                    Mandatory Individual Child Care Plans  -  Every child in a
                    care institution must have an individual child-care plan;
                    this personalised plan is “the heart of rehabilitation and
                    social reintegration.”
                  </li>
                </ul>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <ul className="aboutpara">
                  The judgment strengthened institutional safeguards for
                  children in care facilities, enhanced enforcement of child
                  protection laws, and established comprehensive monitoring
                  mechanisms.
                  <li>
                    Revolutionised child protection approach by promoting
                    de-institutionalisation: making foster care, adoption and
                    sponsorship preferred alternatives to institutional care
                  </li>
                  <li>
                    Mandated preparation of individual child-care plans for
                    every child in care institutions, recognising this as ‘the
                    heart of rehabilitation and social re-integration’{" "}
                  </li>
                  <li>
                    Established comprehensive institutional safeguards through
                    mandatory registration of all child-care institutions by
                    December 31, 2017{" "}
                  </li>
                  <li>
                    Emphasised the State’s constitutional obligation under
                    Article 39(f) to protect children’s rights, establishing
                    that funding shortages cannot excuse non-compliance when
                    grants remain unutilized{" "}
                  </li>
                  <li>
                    Introduced annual social audit requirements for transparency
                    and accountability in child-care institution management and
                    JJ Act implementation
                  </li>
                </ul>

               

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://cdnbbsr.s3waas.gov.in/s3d04863f100d59b3eb688a11f95b0ae60/uploads/2025/06/20250617139853866.pdf"
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

export default LandmarkPage16;
