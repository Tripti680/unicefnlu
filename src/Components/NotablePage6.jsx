import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage6() {
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
                “Romantic” Cases under the POCSO Act: An Analysis of Judgments
                of Special Courts in Assam, Maharashtra &amp; West Bengal,
                Enfold Proactive Health Trust (2022)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">Enfold Proactive Health Trust</td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The research aimed to understand the proportion of
                        “romantic” cases under the POCSO Act and the manner in
                        which the law is being used to regulate or criminalize
                        adolescents in non- exploitative consensual
                        relationships.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"14%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        “Romantic Case” are defined as cases where the victim
                        admitted to being in a romantic relationship with the
                        accused at any stage of the investigation or trial, or
                        where a romantic relationship was inferred by the judge.
                        Cases where only the defence or accused claimed a
                        romantic relationship, but not the victim, her family,
                        the prosecution, or the court, were excluded. 7,560
                        judgments disposed by Special Courts in Assam,
                        Maharashtra, and West Bengal between 2016-2020 were
                        downloaded from e-courts. After sorting, 1,715 cases
                        were identified as “romantic” cases under the POCSO Act.
                        The analysis was based solely on the facts and details
                        explicitly stated in these judgments. An in-depth
                        quantitative and qualitative analysis of the 1,715
                        “romantic” cases was undertaken. The study focused on
                        Assam, Maharashtra, and West Bengal. The study did not
                        include data on romantic cases involving children in
                        conflict with the law.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Findings:</h4>
                <p className="aboutpara">The findings of the study revealed:</p>

                <ul className="aboutpara">
                  <li>
                    Romantic cases formed a substantial share of POCSO cases -
                    30.1% in Assam, 22.8% in Maharashtra, and 25.8% in West
                    Bengal.
                  </li>
                  <li>
                    Parents were the main informants (70.8%); girls themselves
                    filed FIRs in only 18.3%. Reporting was usually triggered by
                    the girl leaving home (64.9%), breach of promise to marry
                    (17.5%), or pregnancy (15.4%), with caste/religion
                    differences and violence also cited.
                  </li>
                  <li>
                    All victims were girls, most (46.6%) aged 16–18; 87.9%
                    admitted to the relationship. The majority of accused
                    (77.5%) were under 25, mainly from low-income, blue-collar
                    backgrounds.
                  </li>
                  <li>
                    Girls were married to the accused in 46.5% of cases, either
                    before (10.5%) or after (36.0%) the FIR; conviction rates in
                    such cases were just 1.9%.
                  </li>
                  <li>
                    Most girls (81.5%) did not testify against the accused,
                    often turning hostile. Even when they testified, 51.2% were
                    deemed unreliable. Minority of the girl was not established
                    in 44.9% cases due to lack of documentation, leading to
                    acquittals.
                  </li>
                  <li>
                    Charges were mainly IPC rape (70.4%) and kidnapping (66.8%)
                    along with POCSO; acquittal rates reached 93.8%.
                  </li>
                  <li>
                    Judicial approaches varied: many courts considered
                    consensual claims, marital life, or lack of intent to
                    acquit; some inferred romance even against the girl’s
                    denial. A minority applied strict interpretation, treating
                    minor’s consent as irrelevant and convicting, especially in
                    exploitation cases.
                  </li>
                  <li>
                    Trials were lengthy - only 11.4% concluded within a year.
                    Median disposal time was 1.4 years in Assam and 2.3 years in
                    Maharashtra/West Bengal. POCSO presumptions were rarely
                    discussed (90%) or applied.
                  </li>
                </ul>
              </div>

              <div className="main mt-4 aboutpara">
                <h4 className="fw-bold"> Conclusions:</h4>
                <p className="aboutpara">
                  The conclusions drawn by the report are:
                </p>

                <ul className="aboutpara">
                  <li>
                    Criminal law is widely used to address consensual adolescent
                    relationships, driving extremely high acquittal rates.
                  </li>
                  <li>
                    The framework often causes prolonged trials and detention of
                    accused even in acquittal-bound cases.
                  </li>
                  <li>
                    Courts adopt inconsistent approaches to minor’s consent,
                    sometimes prioritizing consensual claims, marital life, or
                    intent over the legal rule that minor’s consent is invalid.
                  </li>
                  <li>
                    High rates of hostile testimony and frequent failure to
                    establish minority contribute significantly to acquittals.
                  </li>
                  <li>
                    A re-examination of age of consent laws is needed,
                    particularly for close-in-age cases, supported by empirical
                    research to balance child protection with adolescent
                    realities and avoid blanket criminalization of
                    non-exploitative relationships.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://enfoldindia.org/wp-content/uploads/2025/01/Romantic-
cases-under-the-POCSO-Act.pdf"
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

export default NotablePage6;
