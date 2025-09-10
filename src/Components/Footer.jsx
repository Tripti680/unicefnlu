import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Images from "../assets/images";
import { useNavigate } from "react-router";
import emailjs from "emailjs-com";

function Footer() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nr84hu4",
        "template_9rhrp97",
        e.target,
        "HBapxx-Ft07lIjowT"
      )
      .then(
        (result) => {
          alert("✅ Subscription successful!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };
  return (
    <footer
      className="footer text-white pt-4 pb-3"
      style={{ background: "#0b2147" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo text-white mb-3">
              <a onClick={() => navigation("/")}>
                <img
                  src={Images.uniceflogofotter}
                  alt="Logo"
                  style={{
                    width: 219,
                    height: 107,
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </div>
            <div className="logo text-white mb-3">
              <a onClick={() => navigation("/")}>
                <img
                  src={Images.nlulogo}
                  alt="Logo"
                  style={{
                    width: 219,
                    height: 107,
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </div>
          </div>
          {/* Newsletter Section */}
          <div className="col-lg-6 col-md-12 mb-4 px-lg-4">
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <p className="small">
              Enter your email here and stay updated with our latest news.
            </p>

            {/* EmailJS Form */}
            <form onSubmit={sendEmail} className="d-flex flex-wrap gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="form-control w-auto flex-grow-1"
              />
              <button
                type="submit"
                className="btn btn-primary fw-bold"
                style={{ color: "#fff" }}
              >
                Subscribe
              </button>
            </form>

            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="newsletter"
              />
              <label className="form-check-label" htmlFor="newsletter">
                Yes, subscribe me to your newsletter.*
              </label>
            </div>

            {/* Social Icons */}
            <div className="mt-3 d-flex gap-3">
              <a href="#">
                <img
                  src={Images.instagram}
                  alt="Instagram"
                  className="social-icon"
                />
              </a>
              <a href="#">
                <img
                  src={Images.linkedin}
                  alt="LinkedIn"
                  className="social-icon"
                />
              </a>
              <a href="#">
                <img src={Images.twit} alt="Twitter" className="social-icon" />
              </a>
              <a href="#">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                  alt="YouTube"
                  className="social-icon"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-12 mb-4 mt-4 text-center">
            <ul className="list-unstyled">
              <li className="mb-2 fw-bold">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => navigation("/")}
                >
                  Home
                </a>
              </li>
              <li className="mb-2 fw-bold">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => navigation("/aboutus")}
                >
                  About
                </a>
              </li>
              <li className="mb-2 fw-bold">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => navigation("/fellowship")}
                >
                  Fellowship
                </a>
              </li>
              <li className="mb-2 fw-bold">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => navigation("/publication")}
                >
                  Publications
                </a>
              </li>
              <li className="fw-bold">
                <a
                  href="#"
                  className="text-white text-decoration-none"
                  onClick={() => navigation("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="text-center pt-3 mt-3 small"
          style={{ borderTop: "1px solid #2a5bd7" }}
        >
          © {new Date().getFullYear()} UNICEF Chair at NLU Delhi. Powered and
          secured.
        </div>
      </div>

      {/* CSS for icons */}
      <style jsx>{`
        .social-icon {
          width: 25px;
          height: 25px;
          object-fit: contain;
          filter: brightness(0) invert(1); /* ensures white icons */
          transition: transform 0.2s ease-in-out;
        }
        .social-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
