import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/riyadhguidelines.pdf";

function ObligationPage8() {
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
                UN Guidelines for the Prevention of Juvenile Delinquency
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        14 December 1990
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Preventive programs should prioritize the well-being of young persons [Guideline 4].
                    Policies should avoid criminalizing and penalizing children for behaviour that does not
                    cause serious harm or is often part of the natural maturation and growth process
                    [Guideline 5].
                  </li>
                  <li>
                    Community-based services and programs for delinquency prevention should be
                    developed, with formal agencies of social control utilized only as a last resort [Guideline
                    6].
                  </li>
                  <li>Labelling a young person as “deviant,” “delinquent,” or “pre-delinquent” is recognized
                    by experts as potentially contributing to a consistent pattern of undesirable behaviour
                    [Guideline 5(f)].</li>
                  <li>Societies should prioritize the needs and well-being of the family and its members, with
                    governments and social efforts preserving family integrity [Guideline 11]. Assistance,
                    stable family environments, and alternative placements (like foster care or adoption)
                    should be provided when necessary [Guideline 14].</li>
                  <li>Public education must be accessible to all young persons [Guideline 20]. Special care,
                    prevention programs, and support services should be extended to youth at social risk
                    [Guideline 24].</li>
                  <li>Community-based services and programs that respond to the special needs and
                    problems of young persons should be developed or strengthened [Guideline 32].
                    Governments have a special responsibility to provide services for street children
                    [Guideline 38].</li>
                  <li>The mass media should be encouraged to provide diverse information, portray the
                    positive contributions of young persons, disseminate information on available services,
                    and minimize the portrayal of pornography, drugs, and violence [Guideline 40].</li>
                  <li>Government agencies should give high priority to plans for young persons, allocating
                    sufficient funds for medical and mental health care, nutrition, housing, and drug/alcohol
                    abuse prevention and treatment [Guideline 45].</li>
                  <li>Institutionalization of young persons should be a measure of last resort for the minimum
                    necessary period, with strict criteria [Guideline 46].</li>
                  <li>Governments should enact laws to protect the rights and well-being of all young
                    persons, preventing victimization, abuse, exploitation, and criminal activities [Guideline
                    52].</li>
                  <li>Harsh or degrading correction or punishment is prohibited [Guideline 54].</li>
                  <li>Legislation should ensure that conduct not considered an offense for an adult is also not
                    an offense for a young person [Guideline 56].</li>

                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                 Click here to access the full text of the Guidelines
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

export default ObligationPage8
