import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage3() {
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
                A Decade of POCSO: Developments, Challenges, and Observations
                from Judicial Data, Vidhi Centre for Legal Policy and World Bank
                Data Evidence for Justice Reform Program (November 2022)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3" >
                        The research was carried out by Vidhi Centre for Legal
                        Policy in partnership with World Bank Data Evidence for
                        Justice Reform Program, or DE JURE.
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The evaluation of the Protection of Children from Sexual
                        Offences Act (POCSO) 2012 has been assessed since its
                        inception. The objectives of the Act were establishing a
                        child-friendly justice dispensation system and
                        facilitating time-bound disposal of cases in the first
                        decade.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        This is the most comprehensive empirical study on the
                        application of POCSO so far, which studied nearly
                        400,000 instances on eCourts data from 486 districts
                        spread over 28 states and Union Territories from
                        November 2012 up to February 2021. The integrated
                        methodology entailed quantitative enquiry on 230,730
                        cleansed case records, qualitative inquiry on 138 court
                        judgements covering multiple states, structured
                        interviews among child protection system actors, and
                        systematic reviews on policy interventions. Major data
                        cleaning challenges were addressed, including 688
                        versions of the Act spread over jurisdictions, which was
                        indicative of systemic problems in data handling. The
                        study did not incorporate 50,737 cases (12.7%) that
                        could in no way be categorized as POCSO cases though
                        labelled as such.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>

                <p className="aboutpara">
                  The study reveals catastrophic implementation failures
                  undermining POCSO&#39;s child protection mandate across
                  multiple dimensions.
                </p>
                <ul className="aboutpara">
                  <li>
                    Pendency rates remain critically high nationwide, with Uttar
                    Pradesh showing 77.77% of cases still pending, contrasting
                    sharply with Tamil Nadu&#39;s 80.2% disposal rate.
                  </li>
                  <li>
                    Average case disposal time reaches 509.78 days,
                    significantly exceeding the statutory one-year requirement,
                    with Delhi recording the highest average case length of
                    1,284 days in 2020.
                  </li>
                  <li>
                    Most alarmingly, acquittals outnumber convictions
                    three-to-one (43.44% vs 14.03%), with an additional 22.76%
                    of disposals being mere administrative transfers between
                    courts.
                  </li>
                  <li>
                    Over 56% of cases involve the most serious
                    offenses—penetrative sexual assault (31.18%) and aggravated
                    penetrative sexual assault (25.59%)—yet conviction rates
                    remain dismally low across all offense categories.
                  </li>
                  <li>
                    The evidence stage consumes over 40% of total trial time and
                    hearings, indicating severe procedural bottlenecks.
                  </li>
                  <li>
                    Geographic disparities are stark, with reporting varying
                    from 0.03 cases per 100,000 population in Bihar&#39;s Patna
                    to 510.19 in Sikkim&#39;s Namchi district.
                  </li>
                  <li>
                    Investigation delays plague the system, with only 35% of
                    cases completing investigation within 60 days and 36% taking
                    over six months
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  The POCSO Act fails to fulfil its essential goals after ten
                  years of implementation according to this assessment. The
                  investigation reveals a dysfunctional system which fails to
                  protect children because it lacks proper facilities and
                  trained staff and delays investigations and follows procedures
                  that cause additional harm to victims. The system faces
                  multiple critical problems because support persons remain
                  unappointed in 96% of cases while Special Public Prosecutors
                  lack adequacy and forensic reports experience extreme delays
                  and compensation systems function at only 1% of awarded cases.
                  The research shows that consensual teenage relationships make
                  up a large number of prosecution cases which suggests
                  lawmakers should think about changing the legal age of
                  consent. The Act introduces modern legislative techniques
                  which need total system transformation through new laws and
                  better court facilities and improved data management and child
                  protection system restructuring and enhanced operational
                  capabilities for full implementation.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://vidhilegalpolicy.in/wp-content/uploads/2022/11/POCSO_final_draft_DIGITAL.pdf"
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

export default NotablePage3;
