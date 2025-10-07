import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage5() {
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
                Policy Research on Children Deprived of Liberty in the
                Administration of Justice in South Asia, Kathmandu School of Law
                (2022)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        The Kathmandu School of Law (KSL) organized this
                        research study through support from the Global Campus of
                        Human Rights which continued the UN Global Study on
                        Children Deprived of Liberty under Manfred Nowak&#39;s
                        leadership. The research received editorial support from
                        Ravi Prakash Vyas and Victor Prasad Karunan and Pranjali
                        Kanel and Anusha Kharel. Local experts and institutions
                        joined the project to create country-specific chapters
                        which included Counsel to Secure Justice from India and
                        South Asian academics and child rights practitioners.
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The research examined eight South Asian countries to
                        determine their success in implementing international
                        standards for protecting detained children in juvenile
                        justice systems. The research study evaluated state
                        adherence to the UN Convention on the Rights of the
                        Child and other international treaties through an
                        analysis of legal frameworks against actual juvenile
                        justice system operations. The investigation examined
                        the methods by which South Asian children were deprived
                        of their liberty because of their involvement with
                        judicial proceedings.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        The study employed  a multi-country comparative analysis
                        which used desk review methods to analyze data from
                        Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal,
                        Pakistan and Sri Lanka. Different jurisdictions used
                        various data collection methods which involved studying
                        domestic laws and government records and judicial
                        rulings and human rights documentation and institutional
                        evaluation reports. The India section stands out because
                        it includes original research which involved speaking
                        with 12 children who were deprived of liberty. The
                        researchers applied established analytical frameworks
                        which focused on five main themes: arrest procedures and
                        pre-trial detention and sentencing methods and
                        institutionalization practices and confinement
                        alternatives. The research studied urban and rural areas
                        across every nation to examine how federal and
                        provincial/state governments operate at different
                        levels.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>

                <p className="aboutpara">
                  The research revealed pervasive enforcement deficits across
                  all studied jurisdictions.
                </p>
                <ul className="aboutpara">
                  <li>
                    Critical findings included inconsistent minimum ages of
                    criminal responsibility ranging from 7-12 years
                    (significantly below the internationally recommended 14
                    years), systematic violations of the “detention as last
                    resort” principle with extensive use of pre-trial detention,
                    and inadequate separation of children from adults in
                    detention facilities.
                  </li>
                  <li>
                    The CRC requires detention to function as a last resort yet
                    states frequently choose to detain children through arrest
                    and imprisonment for minor offenses and so-called “moral
                    danger” and vagrancy. Every juvenile facility suffered from
                    infrastructure problems which created prison-like
                    environments because of inadequate medical services and poor
                    sanitation and overcrowded conditions and insufficient
                    educational and recreational resources. The children in
                    India reported that they encountered discrimination which
                    led to their family separation and they experienced various
                    forms of mistreatment within institutional care settings.
                  </li>
                  <li>
                    Violence against detained children emerged as a systemic
                    regional problem, including physical and psychological abuse
                    by detention staff, violence from other detainees, and use
                    of prohibited practices like solitary confinement.
                  </li>
                  <li>
                    Access to legal representation remained critically
                    inadequate, with most children navigating complex legal
                    processes without proper counsel.
                  </li>
                  <li>
                    Family contact was severely restricted across jurisdictions,
                    violating children&#39;s rights to maintain family
                    relationships.
                  </li>
                  <li>
                    Armed conflicts (Nepal, Afghanistan, Kashmir) exacerbated
                    child detention, with child soldiers and security detentions
                    creating long-term psychological harm
                  </li>
                  <li>
                    The study documented significant variations in treatment
                    based on socioeconomic status, with children from
                    marginalized communities facing disproportionate rights
                    violations.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold">Conclusions:</h4>
                <p className="aboutpara">
                  Despite progressive legislative frameworks nominally aligned
                  with international standards, enforcement mechanisms
                  throughout South Asia remain fundamentally inadequate. Most
                  countries have child-specific legislation (e.g., India’s JJ
                  Act 2015; Bangladesh’s Children Act 2013; Maldives’ JJ Act
                  2019), but enforcement remains inconsistent due to resource
                  shortages, poor training, and punitive state approaches .The
                  study concludes that the substantial gap between legal
                  provisions and practical implementation represents a critical
                  regional failure in protecting children&#39;s rights.
                  Structural barriers including chronic underfunding,
                  insufficient numbers of trained personnel, absence of
                  specialized juvenile facilities, weak inter-agency
                  coordination, and inadequate monitoring systems perpetuate
                  systematic rights violations. The research identifies this
                  enforcement deficit as a regional pattern rather than isolated
                  national failures. The report concludes that South Asian
                  states continue to prioritise punitive over rehabilitative
                  responses to children in conflict with the law, undermining
                  their obligations under the UNCRC. Ultimately, the report
                  frames deprivation of liberty not merely as a justice issue,
                  but as a systemic human rights violation demanding coordinated
                  regional and national reform.
                </p>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://resourcecentre.savethechildren.net/pdf/GC-KTM-
PolicyResearch-ChildrenDeprivedofLiberty-SouthAsia.pdf"
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

export default NotablePage5;
