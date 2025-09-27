import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage9() {
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
                Guidelines for Action on Children in the Criminal Justice System
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        21 July 1997
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Information on rights should be made widely accessible to children [Guideline 11(b)].
                  </li>
                  <li>
                    States must ensure effective birth registration and objective age assessment for children
                    in the justice system [Guideline 12]. No child below the legal age of criminal
                    responsibility should face criminal charges [Guideline 14(c)].
                  </li>
                  <li>States should establish juvenile courts or incorporate special child-specific procedures in
                    regular courts [Guideline 14(d)].</li>
                  <li>Diversion and alternative initiatives must be preferred over the classical criminal justice
                    system, such as mediation and restorative justice, to avoid recourse to criminal justice
                    for young offenders [Guideline 15].</li>
                  <li>Placement in closed institutions should be reduced, used only as a last resort for the
                    shortest period. Corporal punishment is prohibited [Guideline 18].</li>
                  <li>Legal and other assistance must be provided, often free of charge, from the moment a
                    child is detained [Guideline 16]. Particular attention should be given to children in need
                    of special protection [Guideline 17].</li>
                  <li>Detained children must be allowed to maintain links with their families and communities
                    [Guideline 20]. Independent bodies must monitor custodial facilities, allowing children
                    confidential communication with their families [Guideline 21].</li>
                  <li>All personnel interacting with children in the criminal justice system, including police,
                    judges, lawyers, and prison officers, must receive education and training in human rights
                    and relevant UN standards [Guideline 24].</li>
                  <li>States should ensure child victims and witnesses have appropriate access to justice, fair
                    treatment, restitution, compensation, and social assistance [Guideline 43].</li>
                  <li>Child victims should be treated with compassion and respect, offered assistance like
                    counselling and rehabilitation, and have access to mechanisms for redress [Guideline
                    45].</li>
                  <li>For child witnesses, measures should include avoiding direct contact with offenders,
                    prohibiting media identification where necessary, and considering the use of videotaped
                    testimony [Guideline 50].</li>


                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="criminaljusticesystem.pdf"
                  target="_blank"
                >
                  Click here to access the full text of the Convention
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ObligationPage9
