import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage1() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Juvenile Justice Act, 2015
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  It was expedient to re-enact the Juvenile Justice (Care and Protection of Children) Act, 2000
                  to make comprehensive provisions for children alleged and found to be in conflict with law
                  and children in need of care and protection, taking into consideration the standards prescribed
                  in various international instruments.
                </p>
                <p className="aboutpara">
                  A critical factor was the 2012 Delhi gang rape incident involving a juvenile offender. Despite
                  the Supreme Court upholding the previous Act’s constitutional validity in 2015, public outcry
                  over perceived justice failures prompted legislative amendments. This culminated in the
                  passing of the Juvenile Justice (Care and Protection of Children) Bill, 2014, which was
                  enacted on January 15, 2016, as the Juvenile Justice (Care and Protection of Children) Act,
                  2015.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  To consolidate and amend the law relating to children alleged and found to be in conflict with
                  law and children in need of care and protection by catering to their basic needs through
                  proper care, protection, development, treatment, social re-integration. Adopting a child-
                  friendly approach in the adjudication and disposal of matters in the best interest of children
                  and for their rehabilitation through processes provided, and institutions and bodies
                  established through the act.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Salient Features
                </h4>
                <ul className="aboutpara">
                  <li>Fundamental principle that children in conflict with law should be treated differently
                    from adult offenders, emphasizing rehabilitation over punishment.</li>
                  <li>Recognition that juveniles have the capacity for reform and reintegration into society.
                    (Ss. 38-55)</li>
                  <li>Creation of different categories based on the severity of offenses with different
                    procedures for each category. (Section 86)</li>
                  <li>Establishment of specialized institutions staffed with trained personnel ensuring that
                    cases are handled by experts rather than regular criminal courts. (Ss. 4, 27, 43, 47, 48)</li>
                  <li>Provision of several legal safeguards to juveniles including the right to legal aid,
                    confidentiality of proceedings, and protection from media exposure. The identity of
                    juvenile offenders is kept confidential to prevent social stigma that could hinder their
                    rehabilitation. (Section 74)</li>
                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">

                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 4:</td>
                      <td className="px-3">Juvenile Justice Board</td>
                    </tr>
                    <tr>
                      <td className="">Section 8:</td>
                      <td className="px-3">Powers, functions and responsibilities of the Board</td>
                    </tr>
                    <tr>
                      <td className="">Section 19:</td>
                      <td className="px-3">Powers of Children’s Court</td>
                    </tr>
                    <tr>
                      <td className="">Section 22:</td>
                      <td className="px-3">Proceeding under Chapter VIII of the Code of Criminal Procedure not to apply against child</td>
                    </tr>
                    <tr>
                      <td className="">Section 27:</td>
                      <td className="px-3">Child Welfare Committee</td>
                    </tr>
                    <tr>
                      <td className="">Section 30:</td>
                      <td className="px-3">Functions and responsibilities of Committee</td>
                    </tr>
                    <tr>
                      <td className="">Section 74:</td>
                      <td className="px-3">Prohibition on disclosure of identity of children</td>
                    </tr>
                    <tr>
                      <td className="">Section 99:</td>
                      <td className="px-3">Reports to be treated as confidential.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">




                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/2148/1/a2016-2.pdf"
                >
                  Click here to access the full text of the JJ Act, 2015
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

export default LegislationPage1
