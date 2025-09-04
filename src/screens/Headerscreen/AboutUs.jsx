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
            <p>
              The UNICEF Chair on Justice for Children is a product of the
              collaboration between UNICEF and National Law University Delhi in
              pursuance of the objective of promoting research, building
              knowledge, and strengthening practice around access to justice for
              children in India.
            </p>
          </div>

          {/* Goals */}
          <div className="mb-5">
            <h3 className="fw-bold mb-3 yellowclr p-0 px-1 text-white">
              Goals
            </h3>
            <ul>
              <li>
                Building a body of well-researched and accessible scholarship on
                issues of child rights within the Indian criminal justice
                system.
              </li>
              <li>
                Providing high quality legal representation to children in need
                of care and protection and children in conflict with the law.
              </li>
              <li>
                Contributing to child rights advocacy in India by mentoring
                young child rights researchers and lawyers.
              </li>
            </ul>
          </div>

          {/* Team */}
          <div className="mb-3">
            <h3 className="fw-bold mb-3 yellowclr p-0 px-1 text-white">
              Team
            </h3>
            <div className="row g-4">
              {/* Team Member 1 */}
              <div className="col-lg-3 col-md-6 col-12 my-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-member-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="team-box">
                    <div className="card border-0 team-card">
                      <img
                        src={Images.tasnemm}
                        className="card-img-top"
                        alt="Tasneem Deo"
                      />
                      <div className="card-body border-0 p-2 text-center text-light greyclr">
                        <h5 className="fw-bold mb-0 text-black">Tasneem Deo</h5>
                        <p className="mb-0 text-black">Chair</p>
                        <p className="text-dark">
                          Fellowship Co-ordinator (Research)
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Team Member 2 */}
              <div className="col-lg-3 col-md-6 col-12 my-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-member-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="team-box">
                    <div className="card border-0 team-card m-0">
                      <img
                        src={Images.blank}
                        className="card-img-top"
                        alt="Fellowship Co-ordinator"
                      />
                      <div className="card-body border-0 p-2 text-center text-light greyclr">
                        <h5 className="fw-bold mb-0 text-black">&nbsp;</h5>
                        <h5 className="fw-bold mb-0 text-black">&nbsp;</h5>
                        <p className="mb-0 text-black">
                          Fellowship Co-ordinator
                        </p>
                        <p className="text-dark">(Litigation)</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="row g-4">
              {/* Team Member 3 */}
              <div className="col-lg-3 col-md-6 col-12 my-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-member-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="team-box">
                    <div className="card border-0 team-card">
                      <img
                        src={Images.srishti}
                        className="card-img-top"
                        alt="Srishti Ray"
                      />
                      <div className="card-body border-0 p-2 text-center text-light greyclr">
                        <h5 className="fw-bold mb-0 text-black">&nbsp;</h5>
                        <h5 className="fw-bold mb-0 text-black">Srishti Ray</h5>
                        <p className="mb-0 text-black">Program Manager</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Applications */}
          <h3 className="fw-bold mb-3 yellowclr p-0 px-1 text-white">
            Fellows
          </h3>
          <div>
            Applications for the <b>2025-26 cohort</b> of NLUD-UNICEF Justice
            for Children Fellows are now open.{" "}
            <a className="pointer"onClick={()=>navigation("/FellowsInformation")}>
              Click here for more information.
            </a>
          </div>

          {/* Student Researchers */}
          <div className="mt-5">
            <h3 className="fw-bold mb-3 yellowclr p-0 px-1 text-white">
              Student Researchers
            </h3>
            <ul>
              <li>Aadya Mital</li>
              <li>Aravya Gupta</li>
              <li>Divas Upadhyay</li>
              <li>Adyasha Syam</li>
              <li>Divyesh Thakur</li>
              <li>Ramya Dosaya</li>
              <li>Kanishka Mittal</li>
              <li>Krishaan Doctor</li>
              <li>Nandita Matolli</li>
              <li>Suhani Gupta</li>
              <li>Vritant Kumar</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
