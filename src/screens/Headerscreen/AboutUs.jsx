import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Images from "../../assets/images";
import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <Header />

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* Intro */}
          <div className="mb-3">
            <h2 className="fw-bold">
              NLUD collaboration with UNICEF Chair on Justice for Children
            </h2>
            <p className="aboutpara">
              The NLUD Chair on Justice for Children is a product of the
              collaboration between UNICEF and National Law University Delhi in
              pursuance of the objective of promoting research, building
              knowledge, and strengthening practice around access to justice for
              children in India.
            </p>
          </div>

          {/* Goals */}
          <div className="mb-5">
            <h3
              className="fw-bold mb-3 yellowclr p-0 px-1 "
              style={{ color: "#0f2c59" }}
            >
              Goals
            </h3>
            <ul>
              <li className="aboutpara">
                Building a body of well-researched and accessible scholarship on
                issues of child rights within the Indian criminal justice
                system.
              </li>
              <li className="aboutpara">
                Providing high quality legal representation to children in need
                of care and protection and children in conflict with the law.
              </li>
              <li className="aboutpara">
                Contributing to child rights advocacy in India by mentoring
                young child rights researchers and lawyers.
              </li>
            </ul>
          </div>

          {/* Team */}
          <div className="mb-3">
            <h3
              className="fw-bold mb-3 yellowclr p-0 px-1 "
              style={{ color: "#0f2c59" }}
            >
              Team
            </h3>
            <div className="row g-4">
              {/* Team Member 1 */}

              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <a href="https://nludelhi.ac.in/faculty/dr-tasneem-deo/" style={{textDecoration:'none'}}>
                  <div
                    className="card border-0 mb-0 h-100 w-100"
                    style={{ maxWidth: "540px", background: "none" }}
                  >
                    <div className="d-flex h-100">
                      {/* Left side - Image */}
                      <div className="d-flex align-items-center">
                        <img
                          className="img-thumbnail"
                          src={Images.tasnemm}
                          alt="Tasneem Deo"
                          style={{
                            width: "150px",
                            height: "180px",
                            // objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>

                      {/* Right side - Text */}
                      <div className="d-flex  flex-grow-1">
                        <div
                          className="card-body p-2 mb-0"
                          style={{ background: "none" }}
                        >
                          <h5 className="fw-bold mb-1">Tasneem Deo</h5>
                          <p className="mb-1">Chair</p>
                          <p className="mb-0 ">
                            Fellowship Co-ordinator (Research)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Team Member 2 */}
              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <div
                  className="card border-0 mb-0 h-100 w-100"
                  style={{ maxWidth: "540px", background: "none" }}
                >
                  <div className="d-flex h-100">
                    {/* Left side - Image */}
                    <div className="d-flex align-items-center">
                      <img
                        className="img-thumbnail"
                        src={Images.blank}
                        alt="Fellowship Coordinator"
                        style={{
                          width: "150px",
                          height: "180px",
                          // objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>

                    {/* Right side - Text */}
                    <div className="d-flex align-items-center flex-grow-1">
                      <div
                        className="card-body p-2 mb-0"
                        style={{ background: "none" }}
                      >
                        <p className="mb-1">Fellowship Co-ordinator</p>
                        <p className="mb-0">(Litigation)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}

              <div className="col-lg-4 col-md-6 col-12 d-flex">
                <a href="https://nludelhi.ac.in/faculty/ms-srishti-ray/" style={{textDecoration:'none'}}>
                  <div
                    className="card border-0 mb-0 h-100 w-100"
                    style={{ maxWidth: "540px", background: "none" }}
                  >
                    <div className="d-flex h-100">
                      {/* Left side - Image */}
                      <div className="d-flex align-items-center">
                        <img
                          className="img-thumbnail"
                          src={Images.srishti}
                          alt="Srishti Ray"
                          style={{
                            width: "150px",
                            height: "180px",
                            // objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>

                      {/* Right side - Text */}
                      <div className="d-flex  flex-grow-1">
                        <div
                          className="card-body p-2 mb-0"
                          style={{ background: "none" }}
                        >
                          <h5 className="fw-bold mb-1">Srishti Ray</h5>
                          <p className="mb-1">Program Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Applications */}
          <h3
            className="fw-bold mb-3 yellowclr p-0 px-1 "
            style={{ color: "#0f2c59" }}
          >
            Fellows
          </h3>
          <p className="aboutpara">
            <div className="aboutpara">
              Applications for the <b>2025-26 cohort</b> of NLUD-UNICEF Justice
              for Children Fellows are now open.{" "}
              <a
                className="pointer"
                onClick={() => navigation("/Fellowship")}
              >
                Click here for more information.
              </a>
            </div>
          </p>

          {/* Student Researchers */}
          <div className="mt-5">
            <h3
              className="fw-bold mb-3 yellowclr p-0 px-1 "
              style={{ color: "#0f2c59" }}
            >
              Student Researchers
            </h3>

            <div className="row">
              <div className="col-lg-3">
                <ul className="aboutpara">
                  <li>Aadya Mital</li>
                  <li>Adyasha Syam</li>
                  <li>Aravya Gupta</li>
                  <li>Sudiksha Jha</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="aboutpara">
                  <li>Divas Upadhyay</li>
                  <li>Divyesh Thakur</li>
                  <li>Kanishka Mittal</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="aboutpara">
                  <li>Krishaan Doctor</li>
                  <li>Nandita Matolli</li>
                  <li>Nitya Singhania</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <ul className="aboutpara">
                  <li>Ramya Dosaya</li>
                  <li>Suhani Gupta</li>
                  <li>Vritant Kumar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
