import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Images from "../assets/images";
import { useNavigate } from "react-router";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function Footer() {
  const [isChecked, setIsChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("⚠️ Please agree to subscribe by checking the box first.");
      return;
    }

    emailjs
      .sendForm(
        "service_atx2bmb",
        "template_pbnq3vc",
        e.target,
        "xVoRcA4mZ16_Zr5Gh"
      )
      .then(
        (result) => {
          alert("✅ Subscription successful!");
          e.target.reset();
          setIsChecked(false); // reset checkbox
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  const styles = {
    socialIcon: {
      width: "25px", // Adjust size as needed
      height: "25px",
      // filter: "invert(100%)", // Default white filter for other icons
    },
    spotifyIcon: {
      width: "25px",
      height: "25px",
      filter: "invert(100%)", // No filter to preserve Spotify's green color
    },
  };

  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  return (
    <footer
      className="footer text-white pt-5 pb-3"
      style={{ background: "#0b2147" }}
    >
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-1 px-lg-4 footerlogo-section">
            <div className="logo text-white mb-3">
              <a
               href="https://nludelhi.ac.in/" 
              target="_blank">
                <img
                  src={Images.nlulogo}
                  alt="Logo"
                  style={{
                    width: 85,
                    height: 83,
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </div>
            <div className="logo text-white mb-3 ">
              <a 
              href="https://www.unicef.org/"
              target="_blank">
                <img
                  src={Images.footersecondlogo}
                  alt="Logo"
                  className="mx-lg-0 mx-2"
                  style={{
                    width: 85,
                    height: 83,
                    cursor: "pointer",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-9 col-md-12 mb-4 px-lg-5">
            <div className="newsletter-section">
              <h5 className="fw-bold">Subscribe to our Newsletter</h5>
              <p className="small">
                Enter your email here and stay updated with our latest news.
              </p>

              {/* EmailJS Form */}
              <form
                onSubmit={sendEmail}
                className="d-flex flex-wrap gap-2 w-75"
              >
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
                  disabled={!isChecked}
                >
                  Subscribe
                </button>
              </form>

              {/* Checkbox */}
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="newsletter"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
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
                    style={styles.socialIcon}
                  />
                </a>
                <a href="#">
                  <img
                    src={Images.linkedin}
                    alt="LinkedIn"
                    className="social-icon"
                    style={styles.socialIcon}
                  />
                </a>
                <a href="#">
                  <img
                    src={Images.twit}
                    alt="Twitter"
                    className="social-icon"
                    style={styles.socialIcon}
                  />
                </a>
                <a href="#">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                    alt="YouTube"
                    className="social-icon"
                    style={styles.socialIconn}
                  />
                </a>
                <a href="#">
                  <img
                    src={Images.spotify}
                    alt="Spotify"
                    className="social-icon"
                    style={styles.spotifyIcon} // Use specific style for Spotify
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-12 mb-lg-4 text-end quicklink">
            <ul className="h5 list-unstyled">
              <li className="mb-2 fw-bold h5">
                <Link className="text-white text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="mb-2 fw-bold h5">
                <Link className="text-white text-decoration-none" to="/aboutus">
                  About
                </Link>
              </li>
              <li className="mb-2 fw-bold h5">
                <Link
                  className="text-white text-decoration-none"
                  to="/fellowship"
                >
                  Fellowship
                </Link>
              </li>
              <li className="mb-2 fw-bold h5">
                <Link
                  className="text-white text-decoration-none"
                  to="/publication"
                >
                  Publications
                </Link>
              </li>
              <li className="fw-bold h5">
                <Link className="text-white text-decoration-none" to="/j4clive">
                  J4C Live
                </Link>
              </li>
              <li className="fw-bold h5">
                <Link className="text-white text-decoration-none" to="/contact">
                  Contact
                </Link>
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

      <style jsx>{`
        .social-icon {
          width: 25px;
          height: 25px;
          object-fit: contain;
          filter: brightness(0) invert(1);
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
