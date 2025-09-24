import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage9() {
   const styles = {
   
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
  
  };
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                Immoral Traffic (Prevention) Act, 1956
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  In the wake of India’s signing of the 1950 UN Convention for
                  the suppression of human trafficking, Parliament enacted the
                  Suppression of Immoral Traffic in Women and Girls Act, 1956
                  (now known as the Immoral Traffic (Prevention) Act, 1956).
                  This law originally focused on trafficking and exploitation of
                  women and children for prostitution. The Act was substantially
                  amended in 1978 and again in 1986- the latter revision renamed
                  the Act and made it fully gender-neutral (extending coverage
                  to all persons). In 2006 a further amendent was proposed to
                  strengthen anti-trafficking provisions (for example, removing
                  penalties on prostitutes for solicitation, penalising clients
                  and traffickers, defining “trafficking in persons”, mandating
                  in-camera trials, and creating special anti-trafficking
                  authorities).
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The Act’s primary objective is to prevent and combat
                  trafficking and sexual exploitation for commercial purposes.
                  It criminalises core activities related to prostitution, for
                  example, keeping or renting out a brothel, procuring persons
                  for prostitution, detaining persons for sex work, and living
                  on prostitution earnings. It also prescribes penalties for
                  offenders. Importantly, the law views trafficked persons
                  (especially children) as victims: it provides for their
                  rescue, rehabilitation and care in protective homes rather
                  than punishment.{" "}
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    A child is under 16, a minor is 16-18, and a major is 18+. A
                    brothel is any place used for sexual exploitation, and the
                    Act is gender-neutral after the 1986 amendment. (Section 2)
                  </li>
                  <li>
                    Offences include keeping or managing a brothel, living on
                    prostitution earnings, procuring or transporting persons for
                    prostitution, detaining someone in a brothel, public
                    prostitution, and soliciting. Voluntary prostitution is not
                    penalized and the Act targets exploitation and trafficking.
                  </li>
                  <li>
                    Harsher punishments apply if children or minors are
                    involved, with minimum 7- 10 years’ imprisonment, and up to
                    life for procuring or transporting children.
                  </li>
                  <li>
                    The Act creates presumptions to help prosecution, such as
                    presuming detention if a child is found in a brothel.
                    (Section 6)
                  </li>
                  <li>
                    Police and magistrates can rescue victims, who are placed in
                    safe custody or in recognized child-care institutions.
                    (Section 16, 17)
                  </li>
                  <li>
                    Protective homes and corrective institutions are provided
                    for shelter and rehabilitation of trafficked persons.
                    (Section 21)
                  </li>
                  <li>
                    Special courts and in-camera trials are mandated for speedy
                    and confidential proceedings. (Section 22A, 22B)
                  </li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 3:</td>
                      <td className="px-3">
                        Keeping or managing a brothel leads to 1-3 years
                        imprisonment (first offence), 2-5 years (repeat);
                        landlords who rent premises for brothel use also liable.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 4:</td>
                      <td className="px-3">
                        Living on prostitution earnings imprisonment up to 2
                        years, but 7-10 years if the victim is a child/minor.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 5:</td>
                      <td className="px-3">
                        Procuring/inducing/trafficking for prostitution
                        imprisonment for 3-7 years (up to 14 without consent);
                        if child/minor, minimum 7 years up to life.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 6:</td>
                      <td className="px-3">
                        Detaining a person in a brothel is a serious offence; if
                        a child is found there, presumption of detention
                        applies.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 16-17:</td>
                      <td className="px-3">
                        Magistrate can order police to rescue victims; rescued
                        children/minors must be placed in child-care
                        institutions.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 18:</td>
                      <td className="px-3">
                        A magistrate can close brothels/rooms near schools,
                        hospitals, or religious places, and evict offenders.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 21:</td>
                      <td className="px-3">
                        State governments must establish protective
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 22A-22B:</td>
                      <td className="px-3">
                        Special Courts may be set up for speedy and summary
                        trials.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/15378/1/the_immoral_traffic_%28prevent
ion%29_act%2C_1956.pdf"
                >
                  Click here to access the full text of the ITPA, 1956
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

export default LegislationPage9;
