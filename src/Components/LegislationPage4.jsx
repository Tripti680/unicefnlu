import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage4() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Bharatiya Nyaya Sanhita, 2023
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  The act repeals the Indian Penal Code. The objective behind this new legislation is to update
                  and reform the existing criminal law framework by consolidating and amending previous
                  provisions.
                </p>

              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The primary objectives include decolonizing India&#39;s legal system by removing outdated
                  provisions and incorporating contemporary criminal justice principles. The BNS introduces
                  new offenses like organized crime, terrorism, and mob lynching while enhancing protection
                  for women, children, and marginalized communities. It emphasizes community service as an alternative punishment, incorporates technology in legal processes, and introduces stricter
                  penalties for crimes against the state and public order.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">
                  Salient Features
                </h4>
                <ul className="aboutpara">
                  <li>Differentiated Criminal Liability Based on Age and Understanding (Ss. 20, 21)</li>


                </ul>
              </div>

              <h4 className="fw-bold">Important Provisions</h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200">

                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Section 20:</td>
                      <td className="px-3">Act of a child under seven years of age.</td>
                    </tr>
                    <tr>
                      <td className="">Section 21:</td>
                      <td className="px-3">Act of a child above seven and under twelve years of age of

                        immature understanding.</td>
                    </tr>



                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf"
                >
                  Click here to access the full text of the BNS, 2023
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

export default LegislationPage4
