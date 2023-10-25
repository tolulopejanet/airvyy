import React from "react";
import Header from "./Header";
// import Designer from "./Designer";
import '../Css/BookAppointment.css';
import '../App.css'
import { useState } from "react";
const BookAppointment = () => {
  const [toggle, setToggle] = useState(1);
  function updateToggle(id){
    setToggle(id)
  }

  
  return (
    <>
      <Header />

      <div className="subNav">
        <div className="container text-center mt-5">
          <h3 className="pt-5 text-uppercase couture-heading BA-heading">
            Experience Bridal Couture
          </h3>
          <h3 className="pt-1 home-heading BA-big-heading">Your Appointment Awaits</h3>
          <p className="home-text pb-5 BA-text">
            Are you on the journey to finding the perfect wedding gown? We're
            here to help! At Airvy, we offer personalized bridal dress
            consultations to bring your dream wedding look to life. Our expert
            consultants are dedicated to making your bridal experience seamless
            and memorable.
          </p>
        </div>
 
        <div className="d-flex justify-content-around tabs">
          <div className="tab active" onClick={()=>updateToggle(1)}>
            Bridal Consultant
          </div>
          <div className="tab" onClick={()=>updateToggle(2)}>
            Our Designer
          </div>
        </div>
      </div>
 
      <div className="container text-center mt-5 ">
      <div className={toggle === 1 ? "show-content" : "content"}>
        <h3 className="pt-1 home-heading BA-big-heading2">
          Let's pair you with one of our bridal consultants
        </h3>
        <p className="home-text BA-text">
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
    </div>

      <div className={toggle === 2 ? "show-content" : "consult content"}>
      <div className="container mt-5 d-flex flex-column ">
        <h3 className="pt-1 designer-heading text-center">Consult with the Designer</h3>
        <p className="designer-price text-center">$200</p>
      </div>

      <div className="d-flex flex-column justify-content-center">
      <div className="container">
        <p className="designer-text BA-text">
          Elevate your bridal experience with our exclusive consultation
          option—your chance to work directly with our renowned Top Designer.
          </p>
          <p className="designer-text BA-text">During your consultation, you'll have the opportunity to:</p>
          <ul className="text-left designer-text BA-text">
            <li>
            Explore our stunning collection of wedding dresses.
          </li>
          <li>
          Discuss your style preferences, from classic to contemporary. 
          </li>
          <li>
          Receive expert advice on fit, fabrics, and trends.
          </li>
          <li>
          Get recommendations tailored to your unique vision.
          </li>
          </ul>
          <p className="pb-5 designer-text BA-text">We can't wait to be a part of your bridal journey and help you
          find the gown of your dreams.</p>
        
      </div>
      </div>
      <div className="container d-flex justify-content-center">
      <button className="btn btn-light mt-3 border-dark consult-btn rounded-pill">
          Book a Free Consultation
        </button>
      </div>
      </div>
      
      

    </>
  );
};

export default BookAppointment;
