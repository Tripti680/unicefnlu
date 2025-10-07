import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage4() {
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
                Child Rights in India - Stakeholder’s Report on Universal
                Periodic Review III (April 2022)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        Prepared by “HAQ: Centre for Child Rights”, New Delhi,
                        on behalf of various coalitions and networks including
                        Ankuram (Hyderabad), HOPE (Puducherry), HLRN (New
                        Delhi), Jabala (Kolkata), Leher (New Delhi), MJAS
                        (Ajmer), Mines, Minerals &amp; People, Samata
                        (Vishakhapatnam), Nine is Mine Campaign, Pratyek (New
                        Delhi), and SAKTHI - VIDIYAL (Madurai).
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        To what extent have India&#39;s interventions been
                        amenable with child rights commitments accepted during
                        Universal Periodic Review (UPR)-2. The paper
                        specifically examines the implementation gap between
                        political-legal commitments and outcomes for children’s
                        lives, and whether India has meaningfully improved
                        children&#39;s status and conditions following its 2011
                        UPR obligations.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        Data Collection Sources include policy documents of the
                        Government of India, National Crime Records Bureau
                        statistics, Census 2011 data and demographic surveys,
                        newspaper reports and academic journal findings. Field
                        experiences from partner organizations working on child
                        rights as well as international reports such as ILO,
                        UNICEF, WHO, Global Slavery Index are also looked into.
                        This analysis uses a rights-based framework to compare
                        the adequacy of legal policies with how effectively they
                        are put into practice, using both numerical data and
                        qualitative insights from organizations. The report is a
                        pan-Indian analysis with specific attention to
                        rural-urban disparities and state-level variations.
                        Special emphasis on heavily militarized zones (Jammu
                        &amp; Kashmir), mining areas, and regions with extreme
                        gender disparities.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>
                <ul className="aboutpara">
                  <li>
                    Birth Registration: Though legally mandatory since 1969,
                    registration in 2012 was only 84.4% (up from 82%), with
                    states like Manipur as low as 28% versus Goa near 99%.
                  </li>
                  <li>
                    Child Labour: Estimates differ, with ILO says 5.7 million in
                    the age bracket of 5-17, government claims 4.3 million,
                    undercounting marginal work. 80% of child workers are rural,
                    they are employed mostly in agriculture or home-based
                    industries. The 2016 Amendment Act still allows adolescents
                    (15–19) to work and legalizes work in family enterprises and
                    entertainment. This dilutes the prohibitions and it is
                    conflicting with ILO norms.
                  </li>
                  <li>
                    Sexual Violence and Crimes Against Children: POCSO Act
                    (2012) is progressive in intent, but faces significant
                    implementation issues. Institutional child abuse is still a
                    problem, case backlogs are common, and the victim
                    compensation system is poorly defined and discriminatory.
                    Furthermore, court environments often lack child-friendly
                    design and special educators to support young victims.
                  </li>
                  <li>
                    Corporal Punishment: Although juvenile law includes a
                    provision, corporal punishment remains culturally tolerated
                    across settings. Enforcement is weak despite bans in the RTE
                    Act and select state laws.
                  </li>
                  <li>
                    Child Trafficking: Human trafficking including children is
                    widespread. It is observed that legal frameworks are
                    disjointed. Anti-Human Trafficking Units lack clarity,
                    funding, staff, and coordination. Data is unreliable and
                    enforcement frameworks are fragmented without concrete
                    objectives.
                  </li>
                  <li>
                    Child Marriage: Law is ambiguous and it leads to
                    inconsistent rulings from judges due to shifting
                    interpretations due to this underage marriage remains
                    common, with 30.2% of girls marrying before 18 in 2011. Law
                    permits marriages to remain legally valid unless contested,
                    enforcement and marriage registration issues persist
                  </li>
                  <li>
                    Right to Education: RTE Act (2009) covers ages 6–14 only;
                    high drop-out rates, poor teaching quality, discrimination
                    (Dalit, Adivasi, girls), lack of human rights education,
                    underfunded SSA, and violent environments for schooling.
                  </li>
                  <li>
                    Additional Issues: Sex Ratio, Health, Juvenile Justice:
                    Declining child/adolescent sex ratio; adolescent health is
                    neglected beyond 6 years of age; systematic provisions are
                    needed for children with disabilities as well as those
                    suffering from HIV/AIDS  juvenile justice law allows
                    conviction of 16–18-year-olds as adults; detainment in
                    militarized areas violates international norms
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  Under each of the above heads, the report mentions positive
                  recommendations to ameliorate the existing problems.
                  Recommendations include strengthening existing mechanisms to
                  achieve 100% universal birth registration to address state
                  disparities ranging from 99% in Goa to 28% in Manipur, while
                  reviewing and updating data collection mechanisms for child
                  labour. A robust monitoring mechanism for small and medium
                  industries including family enterprises is required. Hazardous
                  occupations lists must be regularly updated based on global
                  market trends. The report calls for introducing specific
                  guidelines for victim protection during sexual violence trials
                  and streamlining victim compensation procedures. Ensuring
                  child-friendly court infrastructure is a prerequisite to
                  justice delivery. Besides, the Right to Education Act coverage
                  should be expanded from the current 6-14 years to 0-18 years
                  with quality education retention, human rights curriculum
                  promotion, and increased budget allocations. Additional
                  priorities include amending the definition of child under the
                  child marriage legislation to include all persons under 18 as
                  children regardless of gender. Child marriages need to be made
                  illegal, overriding personal laws. Moreover, steps need to be
                  taken for creating prevention environments for child
                  trafficking through community empowerment and establishing
                  standardized rehabilitation measures.The study concludes that
                  although some legislative progress exists, India&#39;s child
                  rights enforcement remains highly inadequate. The well-meaning
                  laws including POCSO and RTE face implementation challenges
                  because of complex compensation structures and insufficient
                  staffing for trafficking units alongside educational programs
                  that lack adequate resources. Marginalized communities face
                  the largest discrepancy between legal provisions and their
                  actual lived experiences. The report recommends complete
                  system reform and improved inter-ministerial and inter-state
                  coordination to achieve actual child protection in India.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://upr-info.org/sites/default/files/documents/2017-04/js17_upr27_ind_e_main.pdf"
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

export default NotablePage4;
