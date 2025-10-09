import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage7() {
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
                Strategy for Ending Violence Against Children (EVAC), UNICEF
                India
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">UNICEF India Country Office</td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Year:</td>
                      <td className="px-3">June 2020</td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        Comprehensive strategy development for preventing and
                        responding to violence against children in India
                      </td>
                    </tr>
                    <tr>
                      <td className="">Methodology:</td>
                      <td className="px-3">
                        Stakeholder consultations, policy analysis, and evidence
                        synthesis from global geographic areas with emphasis on
                        India by the report.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Findings:</h4>
                <ul className="aboutpara">
                  <li>
                    The report reflects the worldwide dimension of violence
                    against children, with a minimum estimate suggesting that
                    one out of two children between the ages of 2 and 17 years
                    faces some form of violence every year. Among younger
                    children, perhaps three in four, from age 2 to age 4,
                    regularly undergo violent discipline from their caregivers.
                    An alarming set of statistics continues to emerge for sexual
                    abuse, maintaining lifetime prevalence rates of 18% for
                    girls and 8% for boys. The economic burden is huge. The cost
                    of violence against children has been put at $7 trillion
                    each year-8% of World&#39;s GDP.
                  </li>
                  <li>
                    India&#39;s data reveals significant gaps in understanding
                    the true scope of violence against children, as no national
                    prevalence surveys specifically examining this issue exist.
                    However, available indicators paint a concerning picture.
                    POCSO (Protection of Children from Sexual Offences) cases
                    have increased dramatically from 14,000 in 2014 to 39,827 in
                    2018, with 85.8% of victims being girls aged 12-18 years.
                    The perpetrator profile is particularly alarming, as 94.6%
                    of child sexual abuse cases involve known individuals, with
                    53.7% being close family members, relatives, or friends.
                  </li>
                  <li>
                    The educational environment presents additional challenges,
                    with the{" "}
                    <span className="fst-italic">
                      Eliminating corporal punishment in schools, New Delhi:
                      National Commission for Protection of Child Rights
                    </span>{" "}
                    (NCPCR) study. This NCPCR study indicates that 99% of school
                    children face physical and mental abuse by teachers. Gender
                    differences emerge in childhood experiences, with 45% of men
                    reporting being spanked or slapped during childhood and 64%
                    experiencing school-based corporal punishment. The COVID-19
                    pandemic has intensified existing vulnerabilities, evidenced
                    by a 50% increase in distress calls to childline within just
                    two weeks of lockdown implementation.
                  </li>
                  <li>
                    The report identifies particularly vulnerable groups facing
                    heightened risks. Tribal children, comprising 8.6% of
                    India&#39;s population, experience the highest dropout rates
                    and mortality levels. The digital landscape presents new
                    dangers, with India generating 12% of global child sexual
                    abuse material, equivalent to 25,000 images uploaded daily.
                    Caste-based discrimination compounds vulnerability for
                    marginalized communities, creating intersectional risks.
                    Children in alternative care settings face especially
                    concerning circumstances, with ‘1,575’ victims of sexual
                    abuse identified in institutional settings, comprising
                    “1,286 girls” and “286 boys”.
                  </li>
                  <li>
                    Despite comprehensive legal frameworks including POCSO, the
                    Juvenile Justice Act, and Right to Education Act,
                    significant implementation gaps persist. Child protection
                    receives merely 0.06% of union budget allocation, reflecting
                    inadequate prioritization. The system suffers from weak
                    enforcement mechanisms, limited community-level prevention
                    structures, and insufficient coordination between sectors
                    and ministries. The current approach focuses heavily on
                    institutional responses rather than family- based prevention
                    strategies.
                  </li>
                  <li>
                    The EVAC strategy proposes a comprehensive three-pillar
                    approach to address these challenges systematically. The
                    first pillar focuses on creating an enabling environment
                    through multi-sectoral coordination, evidence generation,
                    and policy advocacy. The second pillar emphasizes systems
                    strengthening by building capacity across justice, social
                    services, education, and health sectors. The third pillar
                    targets social behavior change through community engagement,
                    adolescent empowerment, and positive parenting programs.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  India struggles with multi-faceted violence against children
                  that is influenced by denial, systemic gaps and structural
                  vulnerabilities. While promising legal structures are in
                  place, implementation is fraught with weakly developed or
                  underfunded responses, and limited coordination. The impact of
                  the COVID-19 pandemic has compounded vulnerabilities among
                  children, especially those marginalized. The EVAC strategy
                  recommends improved multi- sectoral collaboration,
                  evidence-based interventions, and prevention mechanisms
                  targeting the community level for protection of children.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.unicef.org/india/sites/unicef.org.india/files/2020-07/UNICEF%20India%20EVAC%20Programme%20Strategy_web%20version.pdf"
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

export default NotablePage7;
