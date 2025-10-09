import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage11() {
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
                Status of Juvenile Justice System: Structures, Mechanisms, &amp;
                Processes, National Legal Services Authority (2019)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        National Legal Services Authority
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The aim of this report is to highlight the status of
                        implementation of the Juvenile Justice (Care and
                        Protection of Children) Act, 2015 and the Juvenile
                        Justice (Care and Protection of Children) Rules, 2016.
                        It also aims to provide an overview of the Juvenile
                        Justice Institutions, mechanisms, and structures across
                        India. The report specifically seeks to understand
                        whether these institutions are following the mandate of
                        the law and effectively monitoring the implementation of
                        the Act.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        A detailed questionnaire, devised with valuable inputs
                        from the Bachpan Bachao Andolan (BBA), was prepared by
                        NALSA. Responses to this questionnaire were provided by
                        the State Legal Services Authorities (SLSAs), who
                        collected information from the authorities concerned.
                        Data was collected by District Legal Services
                        Authorities (DLSAs) and compiled by the respective
                        SLSAs. The study covered all States and Union
                        Territories (UTs) of India, except Jammu &amp; Kashmir.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Findings:</h4>
                <ul className="aboutpara">
                  <li>
                    Structures and Mechanisms: All States/UTs have a State Child
                    Protection Society (SCPS), but only 37% maintain full
                    datasets. 97% have District Child Protection Units (DCPUs),
                    though only 51% keep complete information; Lakshadweep has
                    none. 77% have CWCs in every district, but only 13 follow
                    statutory composition; 8 States/UTs lack CWCs entirely. 86%
                    have JJBs, but only 13 sit 20+ days monthly; 5 States/UTs
                    lack JJBs. 97% have Special Juvenile Police Units, 91% have
                    Child Welfare Police Officers. 71% have a JJ Fund, but most
                    have not disbursed it.
                  </li>
                  <li>
                    MIS/Databases: 86% SCPSs and DCPUs record data on children
                    in care. CCIs are tracked by 94%, SAAs by over 90%, open
                    shelters by about 80%. Databases are weaker for fit persons,
                    foster parents, sponsors, aftercare organisations, and
                    specialised services like medical or vocational centres.
                  </li>
                  <li>
                    Child Care Institutions: Only 15% of States/UTs have
                    Observation Homes in every district; 5 lack homes for girls.
                    80% have Special Homes, 60% with separate facilities by
                    gender. 71% have Places of Safety, but 9 lack them. 34% have
                    Children’s Homes in every district, though most comply with
                    minimum care standards. 80% have Open Shelters, but 5 lack
                    any. 51% recognise Fit Facilities, while 14 do not.
                  </li>
                  <li>
                    Management Committees: Regular monthly meetings were
                    reported in 74.3% of Observation Homes and 82.9% of
                    Children’s Homes.
                  </li>
                  <li>
                    Children’s Committees: Present in 83% of Observation Homes,
                    60% of Places of Safety, 66% of Children’s Homes, 49% of
                    Open Shelters, and 37% of Fit Facilities.
                  </li>
                  <li>
                    Individual Care Plans (ICPs): 86% reported ICP development
                    in observation homes and children’s homes. 23 States/UTs
                    prepare ICPs even for open shelters. Ten States/UTs reported
                    full compliance.
                  </li>
                  <li>
                    Follow-up Post-Restoration: Follow-ups are stronger for
                    observation and children’s homes, but some States prepare
                    ICPs without follow-ups, while others conduct follow-ups
                    without ICPs, showing partial compliance.
                  </li>
                  <li>
                    Alternative Care: 25 States/UTs have SAAs, 11 have foster
                    care programmes, and 11 recognise fit persons. Aftercare
                    programmes exist in 15 States/UTs, while 9 lack them. Many
                    States/UTs fail to implement these provisions consistently.
                  </li>
                  <li>
                    Training: Induction training was provided in most States/UTs
                    for CWC and JJB members within 60 days of appointment.
                    Police officials in SJPUs (94%) and CWPOs (91%) were largely
                    trained. CCI staff training was more uneven: 68.6% in
                    Observation Homes, 79.2% in Places of Safety, 75% in Open
                    Shelters, and only 38.9% in Fit Facilities.
                  </li>
                  <li>
                    Awareness: 29 States/UTs conducted awareness campaigns using
                    varied media, though only Mizoram translated the JJ Act into
                    the local language.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  The report evaluated the implementation of the JJ Act, 2015,
                  highlighting certain deficiencies and implicitly calling for
                  changes. The report suggests that child rights have not been
                  given sufficient importance in the overall development plans
                  of various governments. It highlights the need to implement
                  these laws with sincerity so as to not amount to mere paper
                  recognition of the rights of children. The report suggests for
                  civil society organisations and non-government organisations
                  to crosscheck information and make efforts towards ensuring
                  accountability.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://mphc.gov.in/PDF/web_pdf/JJC/PDF/IN/Status%20of%20Juvenile%20Justice%20Syst
em.pdf"
                  target="_blank"
                >
                  Click here for the full Report
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

export default NotablePage11;
