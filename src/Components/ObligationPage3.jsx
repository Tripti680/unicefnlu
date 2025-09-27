import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage3() {
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
                Optional Protocol to the Convention on the Rights of the Child on the Sale of Children, Child
                Prostitution and Child Pornography
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        25 May 2000
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        12 February 2002
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        16 August 2005
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    States that are party to this Protocol must prohibit the sale of children, child
                    prostitution, and child pornography [Articles 1 and 13].
                  </li>
                  <li>
                    Sale of children refers to any act where a child is transferred to another person or group
                    for money or any other payment [Articles 2 (a) and 13].
                  </li>
                  <li>Child prostitution means using a child in sexual activities for money or other benefits
                    [Articles 2 (b) and 14].</li>
                  <li>Child pornography is defined as any image or representation, by any means, of a child
                    involved in real or simulated explicit sexual activities, or any representation of a child’s
                    sexual parts primarily for sexual purposes [Articles 2 (c) and 14].</li>
                  <li>Each State Party must ensure that its laws fully cover all variants of these offenses,
                    whether committed within their country or across borders, by individuals or organized
                    groups [Articles 3 (1) and 14].</li>
                  <li>States are required to protect the rights and interests of child victims throughout the
                    legal process by [Articles 8 (1) and 23]:
                    <ul>
                      <li>Recognizing their vulnerability and adapting procedures to their special needs,
                        especially as witnesses [Articles 8 (1) (a) and 24].</li>
                      <li>Informing victims about their rights and the legal proceedings [Articles 8 (1) (b) and
                        24].</li>
                      <li>Allowing their views and concerns to be heard [Articles 8 (1) (c) and 24].</li>
                      <li>Providing appropriate support services, protecting their privacy and identity, and
                        ensuring their safety and that of their families [Articles 8 (1) (d), (e), (f) and 25].</li>
                      <li>Ensuring that even if a child’s age is uncertain, investigations still proceed [Articles 8
                        (2) and 26].</li>

                    </ul>
                  </li>
                  <li>The best interest of the child is a primary concern in the justice system [Articles 8 (3)
                    and 26].</li>
                  <li>States must provide assistance for victims’ full social reintegration, and their physical
                    and psychological recovery [Articles 9 (3) and 29]. Victims should also have access to
                    procedures to seek compensation for damages [Articles 9 (4) and 29].</li>
                  <li>States Parties must report to the Committee on the Rights of the Child on their
                    implementation of the Protocol within two years of its entry into force for them, and
                    then regularly thereafter [Articles 12 (1), (2), 32 and 33].</li>

                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="crc-sale.pdf"
                  target="_blank"
                >
                  Click here to access the full text of the Convention
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

export default ObligationPage3
