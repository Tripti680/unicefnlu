import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage1() {
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
                Annual Report 2024-25, Ministry of Women and Child Development,
                Government of India
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        Ministry of Women and Child Development, Government of
                        India, with data compiled from National Commission for
                        Protection of Child Rights (NCPCR), Central Adoption
                        Resource Authority (CARA), and state-level child
                        protection agencies.
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        This administrative report lacks a specific Research
                        Objective, functioning instead as a compliance document
                        reviewing implementation of child protection schemes and
                        legal frameworks during fiscal year 2024-25.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        The methodology relied exclusively on administrative
                        data collection from 36 states/UTs, institutional
                        records, and complaint databases. Geographic coverage
                        was nationwide with emphasis on aspirational districts.
                        The report is not based on primary fieldwork but
                        collates official government data, inter-ministerial
                        inputs, and statutory reports from bodies such as the
                        National Commission for Protection of Child Rights
                        (NCPCR), State Commissions, police portals, and judicial
                        institutions. Geographic coverage spans all States and
                        Union Territories. The methodology emphasizes
                        <span className="fst-italic">
                          enforcement monitoring, policy review, and
                          infrastructural assessment
                        </span>{" "}
                        (e.g., number of Juvenile Justice Boards, Child Welfare
                        Committees, Special POCSO Courts, and Fast Track
                        Courts).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>

                <ul className="aboutpara">
                  <li>
                    Criminal Justice Interface: NCPCR registered 40,408 new
                    complaints regarding child rights violations, resolving
                    35,342 cases. The POCSO e-Box received substantial reports
                    of sexual offenses against children, indicating both
                    increased reporting mechanisms and persistent violations
                    within the criminal justice pipeline
                  </li>
                  <li>
                    POCSO Implementation – The Protection of Children from
                    Sexual Offences (POCSO) Act, 2012, strengthened through 2019
                    amendments, remains central. Special Courts have been
                    mandated, but delays persist despite Fast Track Special
                    Courts (FTSCs) sanctioned in 389 districts. The POCSO e-box
                    and tracking portals facilitate reporting and case
                    monitoring, yet under-reporting, weak investigation quality,
                    and poor victim support continue to undermine enforcement .
                  </li>
                  <li>
                    Juvenile Justice (Care and Protection of Children) Act, 2015
                    (Amended 2021) – Enforcement emphasizes children in conflict
                    with law and in need of care. District Magistrates are now
                    central implementing authorities, but concerns remain
                    regarding capacity deficits and delayed rehabilitation.
                    NCPCR audits of Child Care Institutions (CCIs) revealed
                    widespread non-compliance, poor living conditions, and lack
                    of registration.
                  </li>
                  <li>
                    Institutional Infrastructure: By 2024, 781 Child Welfare
                    Committees and 774 Juvenile Justice Boards were functional .
                    However, gaps in training and uneven state-level enforcement
                    affect children’s experiences in the justice system.
                    Initiatives like Mission Vatsalya seek integration of Track
                    Child, Khoya-Paya, and helplines, yet efficacy depends on
                    local-level cooperation. The report documents 1,799
                    operational homes serving 62,592 children, but lacks data on
                    quality of care or rehabilitation outcomes.
                  </li>
                  <li>
                    Institutional Gaps: Only 5,534 of 7,163 audited Child Care
                    Institutions were properly registered under the Juvenile
                    Justice Act, revealing widespread non-compliance with legal
                    mandates. This represents a 23% non-compliance rate in
                    critical child protection infrastructure.
                  </li>
                  <li>
                    Support and Awareness – The Ministry, along with NCERT and
                    schools, has institutionalized awareness of child protection
                    (e.g., inclusion of 1098 helpline in textbooks, safety
                    pledges, child protection films). Yet, awareness does not
                    always translate into trust in enforcement agencies.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  The report reveals fundamental enforcement loopholes in
                  India&#39;s child protection framework within the criminal
                  justice system.The amended Juvenile Justice Act 2015, and
                  POCSO Act, 2012 show mixed enforcement results. While
                  reporting mechanisms improved, the gap between legal
                  provisions and ground-level implementation persists,
                  particularly in rural and aspirational districts. The heavy
                  reliance on institutional metrics rather than child welfare
                  outcomes suggests a compliance-focused rather than
                  rights-based approach. Critical gaps include inadequate
                  monitoring of Child Care Institution standards, insufficient
                  coordination between criminal justice agencies and child
                  protection bodies, and absence of systematic outcome tracking
                  for children entering the justice system.The enforcement
                  mechanism appears reactive, focusing on complaint redressal
                  rather than preventive interventions. The lack of independent
                  evaluation frameworks and over- dependence on self-reported
                  institutional data undermines the reliability of progress
                  claims. Effective enforcement requires capacity building of
                  duty-bearers, social audits, stronger monitoring of CCIs, and
                  integration of child-sensitive practices into the broader
                  criminal justice system.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://wcd.gov.in/documents/uploaded/1752655749_unGJajpBQ1.pdf"
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

export default NotablePage1;
