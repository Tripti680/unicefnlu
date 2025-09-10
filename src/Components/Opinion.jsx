import React from "react";
import Images from "../assets/images";
import { Link } from "react-router-dom";

function Opinion() {
  const resources = [
    {
      path: "/opinion1",
      img: Images.Opinion,
      title: "Speedy Trials under POCSO \n Lessons from West Bengal \n by Srishti Ray",
    },
  ];

  return (
    <section className="opinion-section">
      <div className="container">
        {/* Section Title */}
        <div className="row py-4 pb-lg-1">
          <div className="col-lg-12 px-lg-4">
            <div className="text-start">
              <span className="section-title fs-4 font-roboto fw-bold">
                Opinion
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row pb-lg-3">
          {resources.map((item, index) => {
            const CardContent = (
              <div className="card opinion-card border-0 h-100 d-flex flex-column">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <div
                  className="card-body text-center p-2 mt-auto"
                  style={{
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    background: "#f8f8f8",
                  }}
                >
                  <h3
                    className="fs-6 fw-bold mb-0 p-3"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );

            return (
              <div
                className="col-lg-3 col-md-6 col-12 mt-lg-4"
                key={index}
              >
                <div className="publication-box p-2 h-100">
                  {item.path ? (
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    CardContent
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover Effect CSS */}
      <style jsx>{`
        .opinion-card {
          transition: all 0.3s ease-in-out;
          border-radius: 12px;
        }
        .opinion-card:hover {
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

export default Opinion;
