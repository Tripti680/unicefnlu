import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ObligationPage1() {

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
                The Convention on the Rights of the Child
              </h4>
              <div className="overflow-x-auto aboutpara">
                <table className="min-w-full divide-y divide-gray-200 about-para">
                  <tbody className="bg-white divide-y divide-gray-100">
                    <tr>
                      <td className="">Date of adoption:</td>
                      <td className="px-3">
                        20 November 1989
                      </td>
                    </tr>
                    <tr>
                      <td className="">Entry into force:</td>
                      <td className="px-3">
                        2 September 1990
                      </td>
                    </tr>
                    <tr>
                      <td className="">Date of India’s ratification:</td>
                      <td className="px-3">
                        11 December 1992
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="main mt-4 about-para">
                <h4 className="fw-bold">Important aspects:</h4>
                <ul className="aboutpara">
                  <li>
                    In all decisions and actions concerning children, their best interests must be the most
                    important consideration [Article 3(1)].
                  </li>
                  <li>
                    Every child has the basic right to live [Article 6(1)], and governments must ensure their
                    survival and healthy development as much as possible [Article 6(2)]. Children also have
                    the right to preserve their identity [Article 8(1)], and should not be separated from their
                    parents against their will, unless it is for their best interest and decided by a court
                    [Article 9(1)].
                  </li>
                  <li>Children are entitled to freedom of expression [Article 13(1)], thought, conscience, and
                    religion [Article 14(1)], freedom of association and peaceful assembly [Article 15(1)], and
                    the right to privacy [Article 16(1)].</li>
                  <li>Protection is a key right for children, meaning they must be protected from all forms of
                    physical or mental violence, abuse, neglect, maltreatment, and exploitation, including
                    sexual abuse [Article 19(1), Article 34]. No child should be subjected to torture or cruel,
                    inhuman, or degrading punishment [Article 37(a)]. Furthermore, capital punishment or
                    life imprisonment without release cannot be given to children for crimes committed
                    before they were 18 [Article 37(a)]. If a child is arrested or detained, it must be a
                    measure of last resort for the shortest possible time [Article 37(b)], and they must be
                    treated with dignity and separated from adults unless it’s in their best interest not to be
                    [Article 37(c)].</li>
                  <li>Every child has the right to the highest possible standard of health and access to medical
                    care [Article 24(1)]. Disabled children specifically have the right to special care that helps
                    them live a full and decent life, promotes self-reliance, and enables their participation in
                    society [Articles 23(1) and (2)].</li>
                  <li>Education is another fundamental right, with primary education being compulsory and
                    free for all [Article 28(1)(a)]. Secondary and higher education should also be made
                    available and accessible to every child [Article 28(1) (b) and (c)]. Parents hold the
                    primary responsibility for their child’s upbringing [Article 18(1)], and governments
                    should provide assistance to help them fulfil these responsibilities [Article 18(2)].</li>
                  <li>Children have the right to social security [Article 26(1)] and to a standard of living
                    adequate for their physical, mental, spiritual, moral, and social development [Article
                    27(1)]. To support this, governments should assist parents by providing material
                    assistance if needed, particularly concerning nutrition, clothing, and housing [Article
                    27(3)].</li>
                  <li>A child accused of breaking the law has the right to be treated with dignity and respect
                    [Article 40(1)], presumed innocent until proven guilty [Article 40(2)(b)(i)], informed of
                    charges [Article 40(2)(b)(ii)], have legal assistance [Article 40(2)(b)(ii)], and have their privacy respected [Article 40(2)(b)(vii)]. Where appropriate, alternatives to court
                    proceedings should be promoted [Article 40(3)(b)].</li>

                </ul>
              </div>



              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="crc.pdf"
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

export default ObligationPage1
