import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Fellowship() {
  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <section className="fellowship-section py-5 bg-light">
        <div className="container">
          {/* Heading */}
          <div className=" mb-5">
            <h2 className="fw-bold">
              The NLUD Justice for Children Fellowship
            </h2>
            <p className="mt-3 ">
              The NLUD supported by UNICEF Justice for Children Fellowship is a one-year
              flagship program for young graduates committed to research and
              advocacy specifically on issues surrounding access to justice for
              children in need of care and protection, and children in conflict
              with the law.
            </p>
            <p className="">
              The Fellowship is aimed at encouraging young academics and lawyers
              to pursue their passion for child rights by providing them with
              the resources and mentorship necessary to begin their journey
              towards a career in child rights in India.
            </p>
          </div>

          {/* Fellowship Types */}
          <div className="row g-4 justify-content-around">
            {/* Research Fellowship */}
            <div className="col-md-4">
              <div className="  shadow-sm border-0">
                <div className="mb-0 p-0" style={{ height: "224px" }}>
                  <h4 className="fw-bold mb-0 p-1 px-3 yellowclr ">
                    Research Fellowship
                  </h4>
                  <p className="p-1 px-3 blueclr text-white pb-2 mb-0">
                    The Fellowship will take on 4 research fellows who will work
                    as a team to generate child rights scholarship specifically
                    within the realm of criminal justice.
                  </p>
                  <Link
                    to="/fellowshiprequirement"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <ul className="list-unstyled greyclr p-1 px-3 text-dark">
                      <li>
                        <b>Fellowship requirements</b>
                      </li>
                      <li>
                        <b>Eligibility</b>
                      </li>
                      <li>
                        <b>Apply</b>
                      </li>
                      <li className="fw-bold text-danger">
                        Deadline: November 15, 2025
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>
            </div>

            {/* Litigation Fellowship */}

            <div className="col-md-4">
              <div className="  shadow-sm border-0">
                <div className="mb-0 p-0" style={{ height: "224px" }}>
                  <h4 className="fw-bold mb-0 p-1 px-3 yellowclr ">
                    {" "}
                    Litigation Fellowship
                  </h4>
                  <p className="p-1 px-3 blueclr text-white pb-2 mb-0">
                    The Fellowship will take on 4 litigation fellows who will
                    provide legal representation to children in need of care,
                    and children in conflict with the law.
                  </p>
                  <ul className="list-unstyled greyclr p-1 px-3 ">
                    <li>
                      {" "}
                      <b>Fellowship requirements</b>
                    </li>
                    <li>
                      {" "}
                      <b>Eligibility</b>
                    </li>
                    <li>
                      <b>Apply</b>
                    </li>
                    <li className="fw-bold text-danger">
                      Applications will open on November 1, 2025
                    </li>
                  </ul>
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

export default Fellowship;
