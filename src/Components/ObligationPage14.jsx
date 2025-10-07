import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import pdf from "../assets/pdf/sdg.pdf"

function ObligationPage14() {
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
              <h4 className="fw-bold mt-3 bluetxt yellowclr " style={styles.accordionHeader}>
                2030 Agenda for Sustainable Development
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        25 September 2015
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        1 January 2016
                      </td>
                    </tr>

                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        25 September 2015
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    The 2030 Agenda for Sustainable Development reaffirms States’ obligation regarding
                    children’s rights.
                  </li>
                  <li>
                    Children’s rights and the 2030 Agenda are linked, as all SDGs and targets, without even
                    naming children, are connected to protecting their rights. Hence, a universal and
                    integrated approach is required.
                  </li>
                  <li>The Agenda represents global aspirations for children’s future and provides a clear
                    framework for improving children’s lives through universal goals and targeting.</li>
                  <li>Since 2015, notable progress has been made towards SDGs including improved child
                    health, longer educational attendance and a reduction in the under-5 mortality rate to
                    39 deaths per 1,000 live births in 2017.</li>
                  <li>However, challenges persist as implementation is still slow. Children are exposed to
                    multiple human rights violations. An estimated 250 million children under five in low
                    and middle income countries may not reach their developmental potential.
                    Approximately 663 million children reside in multi-dimensionally poor households. 385
                    million live in extreme poverty, surviving on less than USD 1.90 per day, while 945
                    million live in countries where the SDGs are out of reach.</li>
                  <li>Voluntary National Reviews are essential follow-up and review mechanisms where
                    States self-report on national-level SDG implementation, progress and challenges.
                    However, many still lack a comprehensive approach and many children have been left
                    out. This suggests a need for States to apply a more systemic approach.</li>
                  <li>Various examples of good practices in implementing child rights-based SDGs have also
                    been provided across various countries including Albania, Bolivia, Germany,
                    Mozambique etc.</li>
                  <li>The COVID-19 pandemic posed a significant challenge to the 2030 Agenda, with short-,
                    medium-, and long-term consequences. Lockdowns also affected children’s rights to
                    physical and mental health, education and freedom from violence, especially for those
                    restricted in overcrowded homes without adequate food or sanitation. Their education
                    was disrupted and health was harmed. This also led to increased physical and
                    psychological violence against them.</li>
                  <li>Hence, numerous recommendations have been made for the States including
                    systematically guiding the 2030 Agenda implementation processes, mainstreaming a
                    comprehensive child rights approach into formulation, planning and review of
                    development frameworks, adopting targeted measures in national plans and policies
                    etc.</li>





                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href={pdf}
                  target="_blank"
                >
                  Click here to access the full text of the 2030 Agenda
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ObligationPage14
