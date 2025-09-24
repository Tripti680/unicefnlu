import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function LegislationPage7() {
  return (
    <>
      <Header />
      <section className="landmark">
        <div className="container my-lg-4 mb-3 fs-5 ">
          <div className="row">
            <div className="col-12  px-lg-4">
              <h4 className="fw-bold mt-3 bluetxt yellowclr px-2">
                Prohibition Of Child Marriage Act, 2006
              </h4>

              <div className="main mt-4">
                <h4 className="fw-bold">Historical Context</h4>
                <p className="aboutpara">
                  Child marriage has long been a social problem in India.{" "}
                  <span className="fst-italic">
                    The earlier Child Marriage Restraint Act, 1929 first
                  </span>{" "}
                  set minimum ages (14 for girls, 18 for boys) and was amended
                  in 1978 to 18 and 21 respectively. Despite these laws, early
                  marriage remained widespread. To strengthen the legal
                  framework, Parliament enacted the Prohibition of Child
                  Marriage Act, 2006 (in force from 1 Nov 2007), repealing the
                  1929 Act. The 2006 Act was designed to comprehensively
                  prohibit all marriages below the prescribed ages and to punish
                  those who arrange or solemnize such marriages. In recent years
                  the government has proposed further amendments- e.g. a 2018
                  bill to declare child marriages void ab initio, and a 2021
                  bill to raise the minimum age for women to 21.
                </p>
              </div>

              <div className="main mt-4">
                <h4 className="fw-bold">Objective</h4>
                <p className="aboutpara">
                  The Act’s objective is to prohibit the solemnisation of child
                  marriages and related matters connected therewith. In
                  practical terms, it seeks to protect minors from early
                  marriage by treating any marriage involving a bride under 18
                  or groom under 21 as voidable and by providing relief to those
                  already married as children.
                </p>
              </div>
              <div className="main mt-4">
                <h4 className="fw-bold">Salient Features</h4>
                <ul className="aboutpara">
                  <li>
                    The Act defines a child as a male under 21 and a female
                    under 18, and a child marriage as one where either party is
                    a child. (Section 2)
                  </li>
                  <li>
                    Such marriages are voidable at the option of the minor, who
                    can seek annulment within two years of attaining majority.
                    (Section 3)
                  </li>
                  <li>
                    An adult male contracting a child marriage, or anyone who
                    performs, abets, or permits it, can face up to two years
                    imprisonment and a fine of ₹1 lakh; however, women cannot be
                    imprisoned. (Sections 9, 10, 11)
                  </li>
                  <li>
                    On annulment, courts may order maintenance, residence, and
                    custody arrangements, and children born of child marriages
                    are deemed legitimate. (Sections 4, 5, 6)
                  </li>
                  <li>
                    The Act allows injunctions to stop planned child marriages,
                    declares certain forced marriages void, and appoints Child
                    Marriage Prohibition Officers and magistrates to prevent and
                    stop such marriages.
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
                        Making child marriages voidable at the minor’s option
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 4:</td>
                      <td className="px-3">
                        Providing maintenance and residence for the female
                        contracting party and welfare orders for the children of
                        the marriage
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 9-11:</td>
                      <td className="px-3">
                        Setting out punishments for contracting, solemnising,
                        abetting or permitting child marriages.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 6:</td>
                      <td className="px-3">
                        Explicitly upholds the legitimacy of children born from
                        such marriages
                      </td>
                    </tr>
                    <tr>
                      <td className="">Section 19, 21:</td>
                      <td className="px-3">
                        Mandatory reporting of offences by any person; failure
                        is punishable.
                      </td>
                    </tr>
                    <tr>
                      <td className="">Sections 13-14:</td>
                      <td className="px-3">
                        Empower courts to issue preventive injunctions (with
                        violation rendering the marriage void).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="main mt-4">
                <a
                  className="aboutpara link aboutpara fs-6"
                  href="https://www.indiacode.nic.in/bitstream/123456789/15943/1/the_prohibition_of_child_marria
ge_act%2C_2006.pdf"
                >
                  Click here to access the full text of the PCMA, 2006
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

export default LegislationPage7;
