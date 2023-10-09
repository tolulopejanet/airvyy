import React from "react";
import Header from "./Header";
import Designer from "./Designer";
import '../App.css'
const BookAppointment = () => {
  return (
    <>
      <Header />

      <div className="subNav">
        <div className="container text-center mt-5">
          <h3 className="pt-5 text-uppercase couture-heading">
            Experience Bridal Couture
          </h3>
          <h3 className="pt-1 home-heading">Your Appointment Awaits</h3>
          <p className="home-text pb-5">
            Are you on the journey to finding the perfect wedding gown? We're
            here to help! At Airvy, we offer personalized bridal dress
            consultations to bring your dream wedding look to life. Our expert
            consultants are dedicated to making your bridal experience seamless
            and memorable.
          </p>
        </div>

        <div className="d-flex justify-content-around m-auto storeNav">
          <div className="list">
            <a href="">Bridal Consultant</a>
          </div>
          <div className="list">
            <a href={Designer}> Our Designer</a>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h3 className="pt-1 home-heading">
          Let's pair you with one of our bridal consultants
        </h3>
        <p className="home-text">
          Looking for the perfect wedding dress? A personal wedding dress
          consultant is like a valuable investment on your special journey. Our
          mission is to assist and guide you personally, helping you overcome
          any obstacles that may come between you and your dream dress, all for
          free.
        </p>
        <button className="btn btn-light mt-3 border-dark consult-btn rounded-pill">
          Book a Free Consultation
        </button>
      </div>

      
    </>
  );
};

export default BookAppointment;
