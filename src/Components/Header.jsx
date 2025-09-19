import React, { useState, useEffect } from "react";
import Images from "../assets/images";
import { useNavigate, useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const logos = [Images.headerlogo1, Images.headerlogo2, Images.headerlogo3];
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigation = (path) => {
    navigate(path);
    setSearchTerm("");
    setSuggestions([]);
  };

  const menuItems = {
    home: "/",
    about: "/aboutus",
    fellowship: "/fellowship",
    publications: "/publication",
    contact: "/contact",
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = Object.keys(menuItems).filter((key) =>
        key.includes(value)
      );
      setSuggestions(filtered);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigation(menuItems[suggestions[0]]);
    } else {
      alert("No matching page found!");
    }
  };

  return (
    <>
      {/* Inline CSS for hover effect */}
      <style>
        {`
          .navbar-nav .nav-link {
            transition: color 0.3s ease;
          }
          .navbar-nav .nav-link:hover {
            background: #ffc107 !important; 
            color:#0f2c59 !important;
            border-radius:30px;
          }
          .logo-fade {
            transition: opacity 1s ease-in-out;
          }
        `}
      </style>

      <section className="header">
        <div className="container-fluid py-1">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-lg-2 px-4 d-flex align-items-center">
              <div className="logo text-white">
                <a onClick={() => navigation("/")}>
                  <img
                    key={currentLogo}
                    src={logos[currentLogo]}
                    alt="Logo"
                    className="logo-fade"
                    style={{
                      width: 80,
                      height: 80,
                      cursor: "pointer",
                      borderRadius: "18px",
                      border: "3px solid #79bde2ff",
                    }}
                  />
                </a>
              </div>
            </div>

            {/* Navbar (Desktop only) */}
            <div
              className="col-lg-7 d-none d-lg-block desktopnavbar"
              style={{ position: "relative", right: "190px" }}
            >
              <nav className="navbar navbar-expand-xl navbar-dark">
                <div className="container-fluid justify-content-start">
                  <div
                    className="collapse navbar-collapse show"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-lg-4">
                      {Object.entries(menuItems).map(([key, path]) => (
                        <li className="nav-item mx-lg-3" key={key}>
                          <a
                            className={`nav-link fs-5 fw-semibold ${
                              location.pathname === path
                                ? "active background:0f2c59"
                                : "text-light"
                            }`}
                            style={
                              location.pathname === path
                                ? {
                                    borderRadius: "40px",
                                    background: "#fff",
                                    color: "#0f2c59",
                                  }
                                : {}
                            }
                            onClick={() => navigation(path)}
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            {/* Search Bar (Desktop only) */}
            <div
              className="col-lg-3 d-none d-lg-block position-relative desktopsearchbar"
              style={{ right: "6px" }}
            >
              <form role="search" onSubmit={handleSearch}>
                <div
                  className="input-group input-group-sm"
                  style={{ height: "38px" }}
                >
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                    style={{
                      borderRadius: "15px",
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "#e0ded9",
                    }}
                  />
                  <button
                    className="btn ms-1 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(255, 193, 7)",
                      borderRadius: "25px",
                      width: "50px",
                      height: "38px",
                      padding: "0",
                    }}
                    type="submit"
                  >
                    <i
                      className="bi bi-search"
                      style={{ fontSize: "18px", color: "#000" }}
                    ></i>
                  </button>
                </div>
              </form>

              {/* Suggestion dropdown */}
              {suggestions.length > 0 && (
                <ul
                  className="list-group position-absolute w-100"
                  style={{ zIndex: 1000 }}
                >
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigation(menuItems[item])}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Hamburger Button (Mobile only) */}
            <div className="col-6 d-flex justify-content-end d-lg-none pe-4">
              <button
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                style={{
                  background: "#ffc107",
                  borderRadius: "8px",
                  width: "45px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-list" style={{ fontSize: "24px" }}></i>
              </button>
            </div>

            {/* Offcanvas with Accordion */}
            <div
              className="offcanvas offcanvas-end mobilebg px-0 w-100"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header p-2 px-3">
                <h5 id="offcanvasRightLabel">
                  <a onClick={() => navigation("/")}>
                    <img
                      key={currentLogo}
                      src={logos[currentLogo]}
                      alt="Logo"
                      className="logo-fade"
                      style={{
                        width: 60,
                        height: 60,
                        cursor: "pointer",
                        borderRadius: "18px",
                        border: "3px solid #79bde2ff",
                      }}
                    />
                  </a>
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset mobilebtn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body p-0">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* Accordion Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed removedropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <a onClick={() => navigation("/aboutus")}>About</a>
                      </button>
                    </h2>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed removedropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <a onClick={() => navigation("/fellowship")}>
                          Fellowship
                        </a>
                      </button>
                    </h2>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed removedropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <a onClick={() => navigation("/publication")}>
                          Publications
                        </a>
                      </button>
                    </h2>
                  </div>
                  {/* Accordion Item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed removedropdown"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <a onClick={() => navigation("/contact")}>Contact</a>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/* End Offcanvas */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
