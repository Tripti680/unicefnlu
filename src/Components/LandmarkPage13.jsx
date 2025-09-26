import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LandmarkPage13() {
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
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Vishal Jeet v Union of India, (1990) 3 SCC 318
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Facts and Decision</h4>
                <p className="aboutpara">
                  An advocate filed a PIL seeking directions against police
                  officers in red-light districts and protection for victims of
                  forced prostitution, including children of prostitutes and
                  those in the Devadasi system. The Supreme Court directed the
                  Central and the State Governments to take appropriate action
                  under existing laws, establish adequate rehabilitative homes,
                  set up Advisory Committees with government officials and NGOs,
                  and provide proper medical aid, shelter, education, and
                  training to the victims. The main purpose of the advisory
                  committee was to make recommendations and suggest measures to
                  eradicate child prostitution and other social welfare programs
                  that should be implemented.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Relevant Legal Provisions</h4>
                <p className="aboutpara">
                  The Supreme Court, in this case, interpreted Articles 21
                  (Right to Life with Dignity) and23 (Right against
                  Exploitation) of the Constitution. The Court analysed
                  provisions of the Suppression of Immoral Traffic in Women and
                  Girls Act 1956 (sections 7, 8, 8A, 8B, 15, and 17(3)),
                  Juvenile Justice Act 1986 (Sections 13 and 15), and Article 35
                  of the Constitution regarding punishment for violations of
                  fundamental rights.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Legal Principle laid down by the Court
                </h4>
                <p className="aboutpara">
                  The case recognised trafficking and forced prostitution as
                  grave violations of fundamental rights under Articles 21
                  (Right to Life with Dignity) and 23 (Right against
                  Exploitation), as they deprive victims of bodily autonomy and
                  human dignity. It also established the State's duty to take
                  preventive rather than merely punitive measures against child
                  trafficking and the Devadasi system.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Impact</h4>
                <p className="aboutpara">
                  The Supreme Court mandated that State and Union Territory
                  governments must strictly and promptly enforce the existing
                  laws to eradicate child prostitution, establish zonal Advisory
                  Committees comprising Social Welfare and Law Secretaries,
                  sociologists, criminologists, women’s and child-welfare
                  representatives to devise eradication measures and
                  rehabilitation programmes, and ensure adequate protective
                  homes staffed by trained social workers, psychiatrists, and
                  doctors. The Court also directed the Union government to form
                  a parallel national committee to recommend welfare initiatives
                  and legal reforms, and all levels of government must create
                  machinery to implement these recommendations effectively.
                </p>
               
                

                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://indiankanoon.org/doc/1920113/"
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

export default LandmarkPage13;
