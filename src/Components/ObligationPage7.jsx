import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/havanarules.pdf"

function ObligationPage7() {
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
              <h4
                className="fw-bold mt-3 bluetxt yellowclr "
                style={styles.accordionHeader}
              >
                UN Rules for the Protection of Juveniles Deprived of their
                Liberty
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">14 December 1990</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    Imprisonment should be a disposition of last resort, for the
                    minimum necessary period, and limited to exceptional cases,
                    with early release possible. [Rule 2]
                  </li>
                  <li>
                    Juveniles detained awaiting trial are presumed innocent and
                    must be treated as so. [Rule 17]
                  </li>
                  <li>
                    Detention before trial should be avoided to the extent
                    possible and limited to exceptional circumstances, with
                    priority given to expeditious processing. [Rule 17]
                  </li>
                  <li>
                    Juveniles have the right to legal counsel (including free
                    legal aid if available) and regular, private communication
                    with advisers. [Rule 18.1]
                  </li>
                  <li>
                    Upon admission, juveniles must be provided with facility
                    rules, their rights and obligations, and contact information
                    for complaint authorities and legal assistance agencies, in
                    a language they can understand. [Rule 24]
                  </li>
                  <li>
                    Parents/guardians must be notified promptly of admission,
                    transfer, or release. [Rules 21.4, 22]
                  </li>
                  <li>
                    Detention conditions must consider the juvenile’s age,
                    personality, sex, type of offense, and mental/physical
                    health. [Rule 28]
                  </li>
                  <li>
                    Juveniles must be separated from adults, unless they are
                    family members or part of a beneficial special program.
                    [Rule 29]
                  </li>
                  <li>
                    Facilities must meet health and human dignity requirements.
                    [Rule 31]
                  </li>
                  <li>
                    Designs should support rehabilitation, privacy, social
                    interaction, and safety. [Rule 32]
                  </li>
                  <li>
                    Adequate, hygienic, and culturally/religiously appropriate
                    food and drinking water must be provided. [Rule 37]
                  </li>
                  <li>
                    Juveniles of compulsory school age have the right to
                    education suited to their needs and abilities, preferably
                    outside the facility in community schools and integrated
                    with the national education system. [Rule 38]
                  </li>
                  <li>
                    Every juvenile should be allowed to satisfy their religious
                    and spiritual needs, including attending services,
                    possessing religious items, and receiving visits from
                    religious representatives, with the right not to participate
                    if they choose. [Rule 48]
                  </li>
                  <li>
                    Juveniles must receive adequate preventive and remedial
                    medical care. [Rule 49]
                  </li>
                  <li>
                    Mentally ill juveniles should be treated in specialized
                    institutions. [Rule 53]
                  </li>
                  <li>
                    Drug abuse prevention and rehabilitation programs must be
                    available. [Rule 54]
                  </li>
                  <li>
                    Families/guardians must be informed of the juvenile’s health
                    status and significant changes, or in cases of death or
                    serious illness requiring external medical care. [Rule 56]
                  </li>
                  <li>
                    Juveniles must have adequate communication with the outside
                    world, including regular and frequent visits from family,
                    friends, and legal counsel. [Rules 59, 60]
                  </li>
                  <li>
                    Disciplinary Procedures: Disciplinary measures must uphold
                    the juvenile’s dignity and foster a sense of justice and
                    self-respect. [Rule 66]
                  </li>
                  <li>
                    Cruel, inhuman, or degrading treatment is strictly
                    prohibited. [Rules 67, 87.1]
                  </li>
                  <li>Labor cannot be imposed as a sanction. [Rule 67]</li>
                  <li>
                    Arrangements should be made to assist juveniles in returning
                    to society, family life, education, or employment after
                    release. [Rule 79]
                  </li>{" "}
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

export default ObligationPage7;
