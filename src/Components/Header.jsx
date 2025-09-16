import React, { useState, useEffect } from "react";
import Images from "../assets/images";
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

   const logos = [Images.headerlogo1, Images.headerlogo2, Images.headerlogo3];
  const [currentLogo, setCurrentLogo] = useState(0);

  // ✅ change logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);


  const navigation = (path) => {
    navigate(path);
    setSearchTerm("");
    setSuggestions([]); 
  };

  // Menu items mapping
  const menuItems = {
    home: "/",
    about: "/aboutus",
    fellowship: "/fellowship",
    publications: "/publication",
    contact: "/contact",
  };

  // Handle input change
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

  // Handle search form submit
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
            border-radius:30px/* Yellow on hover */
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
             <div className="col-lg-2 col-6 px-4 ">
              <div className="logo text-white">
                <a onClick={() => navigation("/")}>
                  <img
                    key={currentLogo} // force re-render on change
                    src={logos[currentLogo]}
                    alt="Logo"
                    className="logo-fade"
                    style={{ width: 80, height: 80, cursor: "pointer", borderRadius:'18px',border:'3px solid #79bde2ff' }}
                  />
                </a>
              </div>
            </div>

            {/* Navbar */}
            <div
              className="col-lg-7 col-6"
              style={{ position: "relative", right: "190px" }}
            >
              <nav className="navbar navbar-expand-xl navbar-dark">
                <div className="container-fluid justify-content-start">
                  <div
                    className="collapse navbar-collapse show"
                    id="navbarSupportedContent"
                  >
                    {/* Added ms-lg-4 to push menu slightly away from logo */}
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

            {/* Search Bar with Auto Suggest */}
           <div className="col-12 col-lg-3 mt-3 mt-lg-0 position-relative " style={{right:"6px"}}>
  <form role="search" onSubmit={handleSearch}>
    <div
      className="input-group input-group-sm"
      style={{ height: "38px" }}
    >
      <input
        type="search"
        className="form-control "
        placeholder="Search..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ borderRadius:'30px',fontWeight:600,fontSize:'15px',color:'#e0ded9'}}
      />
    
      <button
  className="btn ms-1 d-flex align-items-center justify-content-center"
  style={{
    backgroundColor: "rgb(255, 193, 7)",
    borderRadius: "30px",
    width: "50px",
    height: "38px",
    padding: "0"
  }}
  type="submit"
>
  <i className="bi bi-search" style={{ fontSize: "18px", color: "#000" }}></i>
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

          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
