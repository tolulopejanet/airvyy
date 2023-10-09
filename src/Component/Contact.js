import React, { useState } from "react";
import "../Css/Contact.css";
import Header from "./Header";
import Checkbox from "@mui/material/Checkbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const label = { inputProps: { "aria-label": "Checkbox" } };

  const [value, setValue] = useState("");
  console.log(value);

  return (
    <>
    <Header/>
      <div className="container text-center mt-5 mb-5">
        <h3 className="pt-5 text-uppercase contact-heading">Contact us</h3>
        <p className="contact-text">We'd love to hear from you.</p>
        <p className="contact-tiny-text">
          Our bridal consultant is always ready to help you get the best out of
          your dress.
        </p>
      </div>

      <div className="container">
        <div className="">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-light mt-3 border-dark mb-5 rounded-pill px-5">
            <FacebookRoundedIcon/>
            Message via Facebook
            </button>
            <button className="btn btn-light mt-3 border-dark mb-5 rounded-pill px-5">
            <InstagramIcon/>
            Message via Instagram
            </button>
            <button className="btn btn-light mt-3 border-dark mb-5 rounded-pill px-5">
            <WhatsAppIcon/>
            Message via Whatsapp
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex container divider justify-content-between">
        <div className="left mt-2"></div>
        <p>OR</p>
        <div className="right mt-2"></div>
      </div>

      <section className="section mt-5 mb-5 ">
        <div className="container form">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="form-group col-md-6">
                  <label className="mb-1">Name</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label className="mb-1">Email</label>
                  <input required
                    type="email"
                    className="form-control"
                    placeholder="you@company.com"
                  />
                </div>

                <label className="mb-1">Phone number</label>
                <PhoneInput value={value} country={"us"} onChange={setValue} />

                <div className="form-group col-md-12 mt-4">
                  <label className="mb-1">How can we help?</label>
                  <textarea
                    rows="3"
                    className="form-control mb-1"
                    placeholder="Tell us a little about the project."
                  ></textarea>
                </div>

                <div className="form-group col-md-6 ">
                  <div className="mt-4">Services</div>
                  <div className="d-flex justify-content-between">
                  <div className="ms-4">
                  <Checkbox {...label} style={{ color: "#575757" }}/>
                  Consultation
                  </div>
                  <div className="ms-4">
                  <Checkbox {...label} style={{ color: "#575757" }}/>
                  Enquiries
                  </div>
                  <div className="ms-4">
                  <Checkbox {...label} style={{ color: "#575757" }}/>
                  Rental
                  </div>
                  </div>
                </div>

                <div className="form-group py-3">
                  <button type="button" className="btn btn-light shadow w-100">
                    Send request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
