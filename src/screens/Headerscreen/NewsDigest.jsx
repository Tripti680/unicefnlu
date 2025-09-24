import { useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Construction from "../../Components/Construction";

function NewsDigest() {
  const [activeMain, setActiveMain] = useState(null);
  const [activeSub, setActiveSub] = useState({});
  const [activeSubSub, setActiveSubSub] = useState({});

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "#fff",
      // padding: "20px",
    },
    accordion: {
      // maxWidth: "1000px",
      margin: "0 auto",
    },
    accordionItem: {
      marginBottom: "40px",
      borderRadius: "6px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    },
    accordionHeader: {
      background: "#0a2c5f",
      color: "#fff",
      padding: "15px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "7px",
    },
    accordionBody: (isActive) => ({
      maxHeight: isActive ? "2000px" : "0",
      overflow: "hidden",
      transition: "max-height 0.5s ease",
      background: "#fafafa",
    }),
    accordionSubheader: {
      background: "#ffc107",
      color: "#000",
      padding: "12px 18px",
      cursor: "pointer",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #ddd",
    },
    accordionSubBody: (isActive) => ({
      maxHeight: isActive ? "1200px" : "0",
      overflow: "hidden",
      transition: "max-height 0.5s ease",
      background: "#f0f0f0",
    }),
    accordionSubSubheader: {
      background: "#e0e0e0",
      padding: "10px 18px",
      cursor: "pointer",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid #ccc",
    },
    accordionSubSubContent: (isActive) => ({
      maxHeight: isActive ? "500px" : "0",
      overflow: "hidden",
      background: "#ffffff",
      padding: isActive ? "12px 18px" : "0 18px",
      transition: "max-height 0.5s ease, padding 0.5s ease",
    }),
    p: {
      margin: "12px 0",
      textAlign: "justify",
      fontSize: "15px",
      lineHeight: "1.6",
    },
    link: {
      color: "#0a2c5f",
      textDecoration: "none",
    },
    arrow: (isActive) => ({
      fontSize: "14px",
      transition: "transform 0.3s",
      transform: isActive ? "rotate(-180deg)" : "rotate(0deg)",
    }),
  };
  return (
    <>
      <Header />
      <section className="newsdigest">
        <div className="container my-lg-5 px-lg-4">
          <div className="row">
            <div className="col-12 px-lg-4" style={styles.accordion}>
              <h3 className="fw-bold pt-lg-0 pt-3">
                NLUD – UNICEF Monthly News Digest on Child Rights and the Indian
                Criminal Justice System
              </h3>
              <h4
                className="fw-bold mt-3 bluetxt yellowclr"
                style={styles.accordionHeader}
              >
                AUGUST 2025
              </h4>
              <p className="pt-3">
                The following resource outlines the legal developments
                pertaining to child rights and the Indian criminal justice
                system – judicial, legislative and policy-oriented that took
                place in August 2025. For ease of reference, they have been
                categorised to cover developments surrounding justice for
                children in need of care and protection and children in conflict
                with the law.{" "}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 p-0 bg-white">
              <div style={styles.body} className="px-lg-4">
                <div style={styles.accordion}>
                  {/* MAIN ITEM 1 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() => setActiveMain(activeMain === 0 ? null : 0)}
                    >
                      Children in Conflict with the Law (CCL)
                      <span style={styles.arrow(activeMain === 0)}>▼</span>
                    </div>
                    <div style={styles.accordionBody(activeMain === 0)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 0: !activeSub[0] })
                          }
                        >
                          I. Constitutional Courts’ Corner
                          <span style={styles.arrow(activeSub[0])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[0])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "0-0": !activeSubSub["0-0"],
                                })
                              }
                            >
                              1.1 Juvenile Justice Act envisages strict
                              documentation standards for age verification
                              <span style={styles.arrow(activeSubSub["0-0"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["0-0"]
                              )}
                            >
                              <p style={styles.p}>
                                The Supreme Court recently rejected school
                                certificates as a basis of proving juvenility.
                                It highlighted that these certificates are based
                                only on parent's oral pleas. The court also
                                mandated stricter documentation standards for
                                age verification to ensure protective benefits
                                are not misused. It further restricted the age
                                determination criteria to JJ Act and the
                                hierarchy of Matriculation or equivalent
                                certificate, then Birth certificate from the
                                first-attended school and lastly medical age
                                assessment (in absence of all else).
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/136445499/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "1-1": !activeSubSub["1-1"],
                                })
                              }
                            >
                              1.2 Rising Use of Minors in Trafficking Warranting
                              Heightened Judicial Scrutiny:
                              <span style={styles.arrow(activeSubSub["1-1"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["1-1"]
                              )}
                            >
                              <p style={styles.p}>
                                The Delhi High Court, while hearing a case,
                                highlighted a concerning rise in using minors to
                                traffic drugs, liquor, etc, while denying
                                anticipatory bail. The court also warned
                                regarding reassessing juvenile age, to make the
                                provisions stricter under law, if such a trend
                                persists.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/66724194/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "2-2": !activeSubSub["2-2"],
                                })
                              }
                            >
                              1.3 No leniency for juveniles committing heinous
                              crimes:
                              <span style={styles.arrow(activeSubSub["2-2"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["2-2"]
                              )}
                            >
                              <p style={styles.p}>
                                Himachal Pradesh HC laid down that a minor girl
                                of 16 years charged for raping another minor
                                girl of 7 years will be tried as an adult since
                                the crime falls under the "heinous" crimes
                                category of Juvenile Justice Act, 2015. This
                                reinforced the previous stance of no leniency
                                for minors committing heinous crimes.{" "}
                              </p>
                              <a
                                href="https://example.com/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "3-3": !activeSubSub["3-3"],
                                })
                              }
                            >
                              1.4 Wrongful Long-Term Juvenile Detention Invites
                              Strict Scrutiny and Compensation under Juvenile
                              Justice Law
                              <span style={styles.arrow(activeSubSub["3-3"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["3-3"]
                              )}
                            >
                              <p style={styles.p}>
                                On July 25, the Karnataka High Court delivered a
                                landmark decision in a case concerning a
                                juvenile wrongfully imprisoned for 13 years. The
                                court criticised the systemic failure to
                                identify the accused’s juvenility early. The
                                Court reaffirmed that under the Juvenile Justice
                                Act, the maximum permissible period of detention
                                is three years in a special home, irrespective
                                of the gravity of the crime. The court further
                                ruled that the offender, who should have served
                                at most three years, be compensated ₹50,000
                                under the Karnataka State Juvenile Justice (Care
                                & Protection of Children) Rules, 2025. This
                                reflects a shift towards institutional
                                accountability, child-sensitive justice and
                                ensuring prompt verification.{" "}
                              </p>
                              <a
                                href="https://example.com/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "4-4": !activeSubSub["4-4"],
                                })
                              }
                            >
                              1.5 Seriousness of the offence is not a ground to
                              deny bail
                              <span style={styles.arrow(activeSubSub["4-4"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["4-4"]
                              )}
                            >
                              <p style={styles.p}>
                                The Patna High Court, while hearing a criminal
                                appeal, highlighted that the nature of crime
                                itself cannot be the sole ground to deny bail to
                                a minor. He also emphasized on the
                                rehabilitative purpose of the Juvenile Justice
                                Act, 2015, while granting bail on this basis.{" "}
                              </p>
                              <p className="fw-bold" style={styles.p}>
                                The Court noted that the ‘ends of justice’ as
                                used in the proviso to Section 12(1) of the JJ
                                Act is different from its use in penal statutes.
                                The ‘ends of justice’ in the context of the JJ
                                Act are ascertained based on the Act’s purpose
                                and object, which is to reform and rehabilitate
                                juveniles, not to punish them.{" "}
                              </p>
                              <a
                                href="https://www.scconline.com/blog/post/2025/07/18/patna-high-court-serious-nature-of-offence-not-a-ground-for-denying-bail-to-juvenile/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MAIN ITEM 2 */}
                  <div style={styles.accordionItem}>
                    <div
                      style={styles.accordionHeader}
                      onClick={() =>
                        setActiveMain(activeMain === 10 ? null : 10)
                      }
                    >
                      Children in Need of Care and Protection (CNCP)
                      <span style={styles.arrow(activeMain === 10)}>▼</span>
                    </div>
                    <div style={styles.accordionBody(activeMain === 10)}>
                      {/* SUB ITEM 1.1 */}
                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 10: !activeSub[10] })
                          }
                        >
                          I. Constitutional Courts’ Corner
                          <span style={styles.arrow(activeSub[10])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[10])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "11-11": !activeSubSub["11-11"],
                                })
                              }
                            >
                              1.1 Isolated Incident of Hitting Child with School
                              Bag Not “Child Abuse” under Goa Act
                              <span style={styles.arrow(activeSubSub["11-11"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["11-11"]
                              )}
                            >
                              <p style={styles.p}>
                                In Santosh Sahadev Khajnekar v. State of Goa
                                (Aug 26, 2025), the Supreme Court set aside a
                                conviction under Section 8(2) of the Goa
                                Children’s Act, holding that a casual blow with
                                a school bag did not amount to “child abuse.”
                                The Court clarified that child abuse requires
                                cruelty, exploitation, deliberate ill-treatment,
                                or conduct intended to cause harm, and cannot be
                                invoked for trivial or momentary acts. The Court
                                also quashed conviction under Section 504 IPC,
                                but upheld convictions under Sections 323 and
                                352 IPC, releasing the appellant on probation
                                under the Probation of Offenders Act. It
                                stressed that over-expanding “child abuse” to
                                minor incidents risks diluting the law’s purpose
                                of targeting serious exploitation and cruelty
                                against children.
                              </p>
                              <a
                                href="https://www.scobserver.in/wp-content/uploads/2025/09/SCO.LR_Judgement_-Sahadev-Khajnekar-v-The-State-of-Goa.pdf"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "12-12": !activeSubSub["12-12"],
                                })
                              }
                            >
                              1.2 Failure to Meet Evidentiary Standard and
                              Procedural Fairness Leads to Acquittal in Child
                              Rape-Murder
                              <span style={styles.arrow(activeSubSub["12-12"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["12-12"]
                              )}
                            >
                              <p style={styles.p}>
                                The Supreme Court overturned the convictions of
                                two men, including a death row convict, in the
                                2012 rape and murder of a 12-year-old in
                                Lucknow. The court called it a “classic example
                                of lacklustre and shabby investigation,” the
                                Court cited broken forensic chains, unreliable
                                witness accounts, and poor trial procedure,
                                holding that suspicion cannot replace proof
                                beyond reasonable doubt. The judgment authored
                                by Justice Mehta noted that a significant
                                procedural lapse was about the chain of custody
                                of DNA evidence collected during the evidence
                                and preparation of DNA reports, without
                                producing documents pertaining to collection of
                                the blood samples from the accused-appellants.
                                Furthermore, the supplementary DNA report,
                                forming a substantive piece of evidence was
                                improperly admitted via affidavit without
                                recalling and examining the scientific expert,
                                and was never put to the accused under Section
                                313 CrPC.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/25160959/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "13-13": !activeSubSub["13-13"],
                                })
                              }
                            >
                              1.3 Child Pornography a Violation of Constitution,
                              Requires Strict Prohibitory Measures
                              <span style={styles.arrow(activeSubSub["13-13"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["13-13"]
                              )}
                            >
                              <p style={styles.p}>
                                In R. Ramkumar v. Union of India (July 18,
                                2025), the Madras High Court directed removal of
                                the teaser of the Tamil film Bad Girl from
                                YouTube, finding it depicted school students in
                                a sexual manner amounting to child pornography.
                                The Court held that such content violated POCSO
                                and IT laws, posed grave risks to children’s
                                wellbeing, and must be immediately removed.
                                Emphasizing Articles 39(f) and 45 of the
                                Constitution, the Court underscored the State’s
                                duty to protect childhood from exploitation and
                                provide care in the widest sense. It criticized
                                authorities for inaction despite complaints and
                                ordered the Union government to ensure removal
                                within one month, while directing NCPCR and NCW
                                to monitor and prevent child pornography.{" "}
                              </p>
                              <a
                                href="https://indiankanoon.org/doc/17329524/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "14-14": !activeSubSub["14-14"],
                                })
                              }
                            >
                              1.4 Supreme Court Alarmed Over Rampant Child
                              Trafficking in Delhi
                              <span style={styles.arrow(activeSubSub["14-14"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["14-14"]
                              )}
                            >
                              <p style={styles.p}>
                                The Supreme Court, acting suo moto, expressed
                                alarm at the rampant trafficking of infants in
                                Delhi and directed the Union government to
                                submit a status report within a week. It also
                                called for bail orders of two accused released
                                by lower courts, noting the interstate nexus
                                trafficking babies from poor families to wealthy
                                buyers in the capital. This follows an April 15
                                ruling that cancelled bail for 13 accused,
                                ordered child trafficking trials to conclude
                                within six months, and mandated suspension of
                                hospital licences where newborns were sold. The
                                Court stressed hospitals’ duty to safeguard
                                infants, directed states to treat missing
                                children cases as suspected trafficking, and
                                urged parents to remain vigilant.{" "}
                              </p>
                              <a
                                href="https://www.hindustantimes.com/india-news/sc-alarmed-over-rampant-child-trafficking-in-delhi-101754936214403.html"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "15-15": !activeSubSub["15-15"],
                                })
                              }
                            >
                              1.5 Genuine Teenage Romances Must Be Viewed
                              Differently From POCSO Cases
                              <span style={styles.arrow(activeSubSub["15-15"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["15-15"]
                              )}
                            >
                              <p style={styles.p}>
                                In NCPCR v. Gulab Deen & Anr. (Aug 19, 2025),
                                the Supreme Court dismissed NCPCR’s appeal
                                against a Punjab & Haryana High Court ruling
                                that a Muslim girl may marry on attaining
                                puberty. The Bench (Justices B.V. Nagarathna and
                                R. Mahadevan) held that NCPCR lacked locus,
                                since the High Court order arose from a private
                                writ for protection of life and liberty under
                                Article 226. The Court observed it was
                                inappropriate for a child rights body to oppose
                                protection orders for minors.{" "}
                              </p>
                              <p className="fw-bold" style={styles.p}>
                                The Court also drew a line between sexual
                                exploitation and consensual adolescent
                                relationships, cautioning against criminalizing
                                “romantic cases” such as a 17-year-old girl
                                marrying a 22-year-old boy. Stressing
                                sensitivity in enforcement, it cited Madras High
                                Court’s Juvenile Justice Committee
                                recommendations that police avoid immediate
                                criminal action in such cases. While refusing to
                                issue uniform national guidelines, the Court
                                emphasized balancing child protection with
                                respect for adolescent autonomy.{" "}
                              </p>

                              <a
                                href="https://api.sci.gov.in/supremecourt/2022/26834/26834_2022_3_7_63522_Order_19-Aug-2025.pdf"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "16-16": !activeSubSub["16-16"],
                                })
                              }
                            >
                              1.6 Death Row Convict’s Sentencing Reopened Citing
                              Manoj Safeguards
                              <span style={styles.arrow(activeSubSub["16-16"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["16-16"]
                              )}
                            >
                              <p style={styles.p}>
                                In Vasanta Sampat Dupare v. Union of India, the
                                Supreme Court invoked Article 32 to reopen
                                sentencing of a death row convict for the rape
                                and murder of a four-year-old girl. Dupare’s
                                conviction and death sentence had attained
                                finality in 2014, with his mercy petitions
                                rejected in 2022–23. However, relying on Manoj
                                v. State of MP (2022), which mandated rigorous
                                consideration of mitigating factors in capital
                                sentencing, the Court held that failure to apply
                                these safeguards amounted to a breach of the
                                right to life and equality. The Bench clarified
                                that Article 32’s corrective jurisdiction would
                                not routinely reopen concluded matters, but
                                could be exercised where non-compliance with new
                                procedural safeguards undermines fundamental
                                rights. Setting aside its 2017 order affirming
                                Dupare’s death sentence, the Court remitted the
                                matter for a fresh hearing confined to
                                sentencing, to be placed before the CJI for
                                reassignment. The ruling affirms that even in
                                heinous child sexual assault cases, capital
                                sentencing must strictly comply with
                                constitutional safeguards, reinforcing
                                procedural fairness while upholding child
                                protection concerns.{" "}
                              </p>

                              <a
                                href="https://api.sci.gov.in/supremecourt/2023/28995/28995_2023_3_1501_63740_Judgement_25-Aug-2025.pdf"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "17-17": !activeSubSub["17-17"],
                                })
                              }
                            >
                              1.7 In View of Attacks against Children, SC Orders
                              Sterilization and Safe Release of Stray Dogs
                              <span style={styles.arrow(activeSubSub["17-17"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["17-17"]
                              )}
                            >
                              <p style={styles.p}>
                                In Re: “City Hounded by Strays, Kids Pay Price”
                                (SMWP (C) No. 5/2025), the Supreme Court
                                responded to a child’s rabies death from a dog
                                attack. While earlier ordering all strays in NCR
                                to be rounded up and kept in shelters, the Court
                                modified its directions to align with the ABC
                                Rules, 2023. Strays must be sterilised,
                                vaccinated, and released back, except rabid or
                                aggressive dogs, which must remain sheltered.
                                Emphasising children’s right to life under
                                Article 21, the Court directed creation of
                                feeding zones, helplines, and penalties for
                                obstruction, and expanded the issue nationwide.
                                The ruling stresses that child protection and
                                safe access to public spaces must prevail while
                                balancing animal welfare.{" "}
                              </p>

                              <a
                                href="https://api.sci.gov.in/supremecourt/2025/41706/41706_2025_3_1501_63567_Judgement_22-Aug-2025.pdf"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "18-18": !activeSubSub["18-18"],
                                })
                              }
                            >
                              1.8 POCSO Mandates 18 as Age of Consent: NGO Warns
                              Against Dilution Before SC
                              <span style={styles.arrow(activeSubSub["18-18"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["18-18"]
                              )}
                            >
                              <p style={styles.p}>
                                In Nipun Saxena v. Union of India, the Supreme
                                Court is considering whether the age of consent
                                under POCSO should be reduced from 18 to 16. An
                                NGO, Network for Access to Justice and
                                Multidisciplinary Outreach Foundation, has
                                intervened to oppose the plea, stressing that
                                Indian law uniformly defines a child as under 18
                                across POCSO, the Bhartiya Nyaya Sanhita, the JJ
                                Act, the Prohibition of Child Marriage Act, and
                                the Digital Personal Data Protection Act.
                                Lowering the threshold, it warns, would erode
                                statutory coherence, expose adolescents to
                                grooming and exploitation, and create paternity
                                and marriage complications. The application
                                relies on Law Commission Report No. 283 (2023),
                                research on adolescent health risks, and
                                international examples linking lower consent
                                ages to higher teenage pregnancies. It urges
                                strengthening the JJ framework and judicial
                                discretion in “romantic cases” rather than
                                legislative dilution. The Centre has also
                                opposed lowering the age, citing India’s UNCRC
                                obligations.{" "}
                              </p>

                              <a
                                href="https://lawchakra.in/supreme-court/ngo-opposes-lowering-age-of-consent/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({
                              ...activeSub,
                              1000: !activeSub[1000], // ✅ consistent
                            })
                          }
                        >
                          II. Making the Law
                          <span style={styles.arrow(activeSub[1000])}>
                            ▼
                          </span>{" "}
                          {/* ✅ consistent */}
                        </div>

                        <div style={styles.accordionSubBody(activeSub[1000])}>
                          {" "}
                          {/* ✅ consistent */}
                          {/* SUB-SUB ITEM 2.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "1000-1": !activeSubSub["1000-1"], // ✅ unique key
                                })
                              }
                            >
                              2.1 Karnataka Cabinet Approves Devadasi
                              Prohibition Bill, 2025
                              <span
                                style={styles.arrow(activeSubSub["1000-1"])}
                              >
                                ▼
                              </span>
                            </div>

                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["1000-1"]
                              )}
                            >
                              <p style={styles.p}>
                                The Karnataka Cabinet has approved the Karnataka
                                Devadasi (Prevention, Prohibition, Redress and
                                Rehabilitation) Bill, 2025...
                              </p>
                              <a
                                href="https://prsindia.org/files/bills_acts/bills_states/karnataka/2025/Bill54of2025KA.pdf"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div
                          style={styles.accordionSubheader}
                          onClick={() =>
                            setActiveSub({ ...activeSub, 52: !activeSub[52] })
                          }
                        >
                          III. Policy Pulse
                          <span style={styles.arrow(activeSub[52])}>▼</span>
                        </div>
                        <div style={styles.accordionSubBody(activeSub[52])}>
                          {/* SUB-SUB ITEM 1.1.1 */}
                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "52-52": !activeSubSub["52-52"],
                                })
                              }
                            >
                              3.1 SC Directs States to Survey Orphaned Children
                              Denied RTE, Suggests Census Inclusion
                              <span style={styles.arrow(activeSubSub["52-52"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["52-52"]
                              )}
                            >
                              <p style={styles.p}>
                                The Supreme Court directed all states to conduct
                                surveys of orphaned children denied education
                                under the Right to Education Act, as well as
                                those already admitted under its provisions.
                                States must file affidavits within four weeks
                                explaining reasons for denial and steps taken,
                                while ensuring deserving orphans receive
                                admission in neighbourhood schools.
                              </p>
                              <p>
                                The Court also asked the Centre to consider
                                enumerating orphaned children in the 2027
                                census. It noted that some states (Gujarat,
                                Delhi, Meghalaya, Sikkim) already extend RTE
                                quota benefits to orphans under Section 12(1)(c)
                                and encouraged others to follow. Acting on a PIL
                                highlighting UNICEF’s estimate of over 2 crore
                                orphans in India, the Court stressed that data
                                collection, reservation, and monitoring are
                                necessary to uphold orphaned children’s right to
                                education and protection.
                              </p>
                              <a
                                href="https://timesofindia.indiatimes.com/city/lucknow/sc-orders-states-to-survey-orphaned-kids-denied-education/articleshow/123150499.cms"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "53-53": !activeSubSub["53-53"],
                                })
                              }
                            >
                              3.2 747 Fast Track Special Courts, Including 406
                              POCSO Courts, Operational Across India
                              <span style={styles.arrow(activeSubSub["53-53"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["53-53"]
                              )}
                            >
                              <p style={styles.p}>
                                To ensure speedy justice in sexual offence
                                cases, the Government launched the Centrally
                                Sponsored Scheme for Fast Track Special Courts
                                (FTSCs) in October 2019, following the Criminal
                                Law (Amendment) Act, 2018. Extended until March
                                2026 with an outlay of ₹1952.23 crore (₹1207.24
                                crore central share from the Nirbhaya Fund), the
                                scheme mandates one judicial officer and seven
                                staff per court.
                              </p>
                              <p>
                                As of May 2025, 747 FTSCs, including 406
                                exclusive POCSO courts, are functional in 30
                                States/UTs and have disposed of over 3.3 lakh
                                cases. The Centre allocated ₹200 crore for FY
                                2025–26. Implementation is monitored through an
                                online framework and review meetings with High
                                Courts and state authorities, aimed at ensuring
                                timely relief to survivors of sexual violence.
                              </p>
                              <a
                                href="https://doj.gov.in/fast-track-special-court-ftscs/"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>

                          <div>
                            <div
                              style={styles.accordionSubSubheader}
                              onClick={() =>
                                setActiveSubSub({
                                  ...activeSubSub,
                                  "54-54": !activeSubSub["54-54"],
                                })
                              }
                            >
                              3.3 District Child Protection Unit, Gyalshing
                              (Sikkim) Holds Awareness Programme on Child
                              Protection Laws
                              <span style={styles.arrow(activeSubSub["54-54"])}>
                                ▼
                              </span>
                            </div>
                            <div
                              style={styles.accordionSubSubContent(
                                activeSubSub["54-54"]
                              )}
                            >
                              <p style={styles.p}>
                                On August 5, 2025, the District Child Protection
                                Unit (DCPU), Gyalshing, organised an
                                awareness-cum-sensitisation programme at
                                Berfok-Chindabung Gram Panchayat Unit (GPU) to
                                strengthen grassroots child protection.
                                Community members, teachers, students, local
                                panchayat leaders, and police officials
                                participated.
                              </p>
                              <p>
                                Sessions covered the Protection of Children from
                                Sexual Offences (POCSO) Act, the Prohibition of
                                Child Marriage Act (PCMA), and the Juvenile
                                Justice (Care and Protection of Children) Act
                                (JJ Act). Focus areas included Children in Need
                                of Care and Protection (CNCP), Children in
                                Conflict with Law (CICL), and alternative care
                                services under Mission Vatsalya such as
                                adoption, foster care, sponsorship, and
                                aftercare. The roles of the Child Welfare
                                Committee (CWC), Juvenile Justice Board (JJB),
                                and Childline (1098) were also highlighted. The
                                programme aimed to build community awareness of
                                legal safeguards and strengthen preventive child
                                protection mechanisms.
                              </p>
                              <a
                                href="https://www.sikkim.gov.in/media/press-release/press-info?name=Press+release+from+District+Child+Protection+Unit+(DCPU),+Gyalshing&&id=133071"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NewsDigest;
