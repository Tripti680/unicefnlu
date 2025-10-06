import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/beijingrules.pdf";

function ObligationPage6() {
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
              <h4
                className="fw-bold mt-3 bluetxt yellowclr "
                style={styles.accordionHeader}
              >
                UN Standard Minimum Rules for the Administration of Juvenile
                Justice
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">29 November 1985</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Prioritizing the well-being of the juvenile and their family
                    is a fundamental principle. Member States should foster a
                    life free from crime and delinquency for juveniles and their
                    families, mobilizing community resources for this purpose
                    [Rule 1]. The juvenile justice system shall emphasize this
                    well-being and ensure that any reaction to juvenile
                    offenders is proportionate to the circumstances of both the
                    offenders and the offence [Rule 5.1].
                  </li>
                  <li>
                    The principles and rules apply not only to juvenile
                    offenders but also to juveniles involved in “status
                    offences” (behaviours not punishable if committed by an
                    adult), welfare and care proceedings, and young adult
                    offenders [Rule 3].
                  </li>
                  <li>
                    The minimum age of criminal responsibility should not be
                    fixed at too low a level, considering emotional, mental, and
                    intellectual maturity [Rule 4.1].
                  </li>
                  <li>
                    {" "}
                    Basic procedural safeguards must be guaranteed at all stages
                    of proceedings. These include the presumption of innocence,
                    the right to be notified of charges, the right to remain
                    silent, the right to counsel, the right to parental presence
                    or a guardian, the right to confront and cross-examine
                    witnesses, and the right to appeal [Rule 7.1].
                  </li>
                  <li>
                    {" "}
                    The juvenile’s right to privacy must be respected at all
                    stages to avoid harm from undue publicity or stigmatization
                    [Rule 8.1]. Information leading to the identification of a
                    juvenile offender should generally not be published [Rule
                    8.2].
                  </li>
                  <li>
                    {" "}
                    Upon apprehension, parents or guardians must be immediately
                    notified [Rule 10.1]. A judge or competent official shall
                    promptly consider the juvenile’s release [Rule 10.2].
                    Contacts between law enforcement and juveniles should
                    promote well-being and avoid harm [Rule 10.3].
                  </li>
                  <li>
                    {" "}
                    Police officers dealing with juveniles should be specially
                    instructed and trained. In large cities, special police
                    units should be established for this purpose [Rule 12.1].
                  </li>
                  <li>
                    {" "}
                    Detention, whether pending trial or as a disposition, is a
                    measure of last resort and for the shortest possible period
                    [Rule 13.1]. Juveniles in detention must be kept separate
                    from adults and receive comprehensive care, including
                    social, educational, vocational, psychological, medical, and
                    physical assistance [Rule 13.4]. Deprivation of personal
                    liberty should only be imposed for serious acts involving
                    violence or persistent serious offenses when no other
                    appropriate response exists [Rule 17.1].
                  </li>
                  <li>
                    {" "}
                    Capital punishment and corporal punishment are prohibited
                    for juveniles [Rules 17.2 and 17.3].
                  </li>
                  <li>
                    {" "}
                    Removal from parental supervision should only occur when
                    absolutely necessary [Rule 18.2]. Similarly, placement in an
                    institution is always a disposition of last resort and for
                    the minimum necessary period [Rule 19.1].
                  </li>
                  <li>
                    {" "}
                    Records of juvenile offenders must be kept strictly
                    confidential and closed to third parties [Rule 21.1]. These
                    records should not be used in adult proceedings in
                    subsequent cases involving the same offender [Rule 21.2].
                  </li>
                  <li>
                    {" "}
                    Juveniles should receive necessary assistance like lodging,
                    education, and vocational training at all stages of
                    proceedings to facilitate their rehabilitation [Rule 24.1].
                    Efforts shall also be made to mobilize volunteers and
                    community services for rehabilitation within a community
                    setting and, as far as possible, within the family unit
                    [Rule 25.1].
                  </li>
                  <li>
                    Conditional release should be used to the greatest possible
                    extent and granted at the earliest possible time, with
                    community support [Rule 28]. Semi-institutional arrangements
                    like half-way houses, educational centers, and day-time
                    training centers should be provided to assist their
                    reintegration into society [Rule 29.1].
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                  Click here to access the full text of the Rules
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

export default ObligationPage6;
