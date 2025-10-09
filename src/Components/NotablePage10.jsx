import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function NotablePage10() {
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
                Mapping Needs and Priorities: Study of Child Rape Victim in
                Delhi, Delhi Commission for Protection and Human Development
                Society (2019)
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 aboutpara">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Study conducted by:</td>
                      <td className="px-3">
                        Delhi Commission for Protection and Human Development
                        Society
                      </td>
                    </tr>

                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Research Objective:</td>
                      <td className="px-3">
                        The primary aim of this study was to understand the
                        personal, familial, and societal needs of minor victims
                        of rape, analyse the challenges they face in fulfilling
                        these needs, and determine their life priorities that
                        are relevant to their rehabilitation and social
                        reintegration. Additionally, the study sought to assess
                        the extent and nature of governmental or
                        non-governmental support and compensation received by
                        these victims and to suggest measures for the
                        constitution and operationalization of &#39;Smile
                        Clubs&#39; as a targeted intervention for their
                        rehabilitation in Delhi.
                      </td>
                    </tr>
                    <tr>
                      <td className="" style={{width:"15%",verticalAlign:"top"}}>Methodology:</td>
                      <td className="px-3">
                        Data was collected through interviews with 100 child
                        rape victims (94 girls and 6 boys) and their parents or
                        caregivers using a structured interview schedule. In
                        most cases (83%), parents/caregivers provided views,
                        while in 15% of cases, both victims and family members
                        were interviewed. Only one victim directly interacted
                        with the interviewer. The research team also conducted
                        physical observations of the victims&#39; living
                        conditions to understand their deprivation and social
                        isolation. A review of existing literature and periodic
                        interactions with the Delhi Commission for Protection of
                        Child Rights (DCPCR) also contributed to the data
                        collection. The study focused on child rape victims in
                        Delhi, covering cases from various districts.
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
                    Victims included all age groups, even infants. Most families
                    were poor, with 91% earning ₹20,000 or less, largely in
                    semi-skilled jobs, and low education limiting access to
                    welfare/legal services. Over half the children lacked
                    hobbies.
                  </li>
                  <li>
                    Girls showed higher self-esteem at home than outside, while
                    boys generally had high self-esteem. PTSD was widespread,
                    especially among girls, with symptoms like intrusive
                    memories, aggression, anxiety, and sleep disorders.
                  </li>
                  <li>
                    Rape strained community and peer relations, with 68% of
                    communities aware of incidents; 27% of children never went
                    out alone for activities.
                  </li>
                  <li>
                    Dropout rate was 42%, mainly due to rape-related issues; 45%
                    of those studying showed declining performance. Families
                    cited income and safety as major educational barriers.
                  </li>
                  <li>
                    26% of victims had physical illnesses, including abdominal
                    pain, anaemia, and infections. Treatment was hampered by
                    lack of money (81%), stigma (15%), and delays. (6) 57% of
                    families faced livelihood losses, with job loss, legal
                    procedures, and lack of time as key reasons; only 6% of
                    children above 14 had skill training.
                  </li>
                  <li>
                    Just 15% of victims received compensation; awareness of the
                    Victim Compensation Scheme was low, and funds often
                    inadequate. 62% accessed legal aid, but 23% were
                    dissatisfied. Support Persons were rarely available beyond
                    five days.
                  </li>
                  <li>
                    56% of children had no career goals. Priorities included
                    financial stability (74%), legal assistance (20%), and
                    education (20%). Major challenges were poverty, trauma,
                    threats, stigma, and harassment during legal processes.
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
                    Smile Clubs should provide counselling, psychotherapy,
                    medical support, education, healthcare, skill training, and
                    community outreach.
                  </li>
                  <li>
                    A stronger system is needed for adequate and timely
                    compensation in coordination with DSLSA, along with improved
                    quality of legal aid and Support Persons.
                  </li>
                  <li>
                    Smile Clubs should adopt activity and outcome-based models,
                    offering universal services as well as confidential
                    victim-specific ones.
                  </li>
                  <li>
                    All initiatives must uphold dignity, best interest,
                    equality, safety, and confidentiality under the JJ Act,
                    2015, with sensitivity to marginalized families.
                  </li>
                </ul>
              </div>

              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://drive.google.com/file/d/19zI8LJ47-FFqRc2KGzw0-
PKTCVrdURKR/view"
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

export default NotablePage10;
