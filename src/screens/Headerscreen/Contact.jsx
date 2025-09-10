import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              {/* <h2 className="fw-bold mb-3">Contact Us</h2> */}
              
            </div>
          </div>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h4 className=" yellowclr fw-bold m-0 px-1" style={{color:'#0f2c59'}}>Address</h4>
                <p className="mb-4">
                  National Law University Delhi <br />
                  UNICEF Chair on Justice for Children <br />
                  Sector-14, Dwarka <br />
                  New Delhi-110078 <br />
                  INDIA
                </p>

                <h4 className="yellowclr fw-bold m-0 px-1" style={{color:'#0f2c59'}}>Contact Number</h4>
                <p className="mb-4">011-28034993</p>

                <h4 className="fw-bold yellowclr m-0 px-1" style={{color:'#0f2c59'}}>Email</h4>
                <p>
                  <a
                    href="mailto:unicefchair@nludelhi.ac.in"
                    className="text-decoration-none"
                  >
                    unicefchair@nludelhi.ac.in
                  </a>
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="col-lg-6">
              <div className="h-100 rounded shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223824.27599270147!2d76.89908422917641!3d28.771672893620494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ab225b1b96f%3A0xc054bf6135b935bd!2sNational%20Law%20University%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745029883854!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="NLU Delhi Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
