import React from "react";
import "../Css/Couture.css";
import Header from "./Header";
import Consult from "../Images/consult.png";
import Sketch from "../Images/sketch.png";
import Fitting from '../Images/fitting.png';
import Production from "../Images/deli2.jpg";
import Delivery from "../Images/deli.png";

const Couture = () => {
  return (
    <>
      <Header />

      <div className="container text-center mt-5">
        <h3 className="pt-5 text-uppercase couture-heading">
          Experience Bridal Couture
        </h3>
        <p className="text-capitalize couture-text ">
          Step Inside Our Creative Workshop
        </p>
        <p className="couture-tiny-text">Your Dress, Our Craft.</p>
      </div>

      <section className="desktop-view2">
        <div className=" mt-5 couture-process-container">
          <img src={Consult} className="couture-img" alt="" />
          <div className="blur-box">
            <p className="numbering">#1</p>
            <h1 className="couture-process">Consultation</h1>
            <p className="contentt">
              Let's Create Your Dream Dress Together! We'll discuss every detail, from color to fabric, in a free consultation with our Bridal consultant. If you prefer more in-depth guidance, choose
              our paid option with Evi. Consultation can be in-person, via email, WhatsApp, video call, or Google Meet. Don't worry if you're unsure; we're here to help you define your style!
            </p>
          </div>
        </div>

        <div className="couture-process-container2">
          <div className="blur-box">
            <p className="numbering">#2</p>
            <h1 className="couture-process">Sketch</h1>
            <p className="contentt">
            Your Vision, Your Sketch! After our consultation, we'll craft a dress sketch inspired by your ideas. We'll share it via email or WhatsApp, and if needed, we'll make adjustments until it's just right. There's a non-refundable sketch fee, but it's deducted from your dress price.
            </p>
          </div>
          <img src={Sketch} className="couture-img" alt="" />
        </div>

        <div className="couture-process-container">
          <img src={Production} className="couture-img" alt="" />
          <div className="blur-box">
            <p className="numbering">#3</p>
            <h1 className="couture-process">Production</h1>
            <p className="contentt">
            Creating Your Dream Dress: Once your design and fabric are approved, we start crafting your dress. If you're abroad or can't visit, we can make a mock-up dress for fitting. The production typically takes six weeks, but it may vary based on design complexity.
            </p>
          </div>
        </div>

        <div className="couture-process-container2">
          <div className="blur-box">
            <p className="numbering">#4</p>
            <h1 className="couture-process">Fittings</h1>
            <p className="contentt">
            Once the dress is partly ready, you'll be invited for a first fitting. Subsequent fittings may be necessary depending on the outcome of the first fitting to ensure a perfect fit of the garment, in some cases though a single fitting could be enough!
            </p>
          </div>
          <img src={Fitting} className="couture-img" alt="" />
        </div>

        <div className="mb-5 couture-process-container">
          <img src={Delivery} className="couture-img" alt="" />
          <div className="blur-box">
            <p className="numbering">#5</p>
            <h1 className="couture-process">Collection or Delivery</h1>
            <p className="contentt">
            Once the dress is fully finished, you can pick up at the studio or we can arrange a delivery to you anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="mobile-view">
        <div className="d-flex flex-column justify-content-center mt-5">
          <img src={Consult} className="" alt="" />
          <div className="container">
            <p className="numbering">#1</p>
            <h1 className="pt-5">Consultation</h1>
            <p className="contentt">
              Let's Create Your Dream Dress Together! We'll discuss every
              detail, from color to fabric, in a free consultation with our
              Bridal consultant. If you prefer more in-depth guidance, choose
              our paid option with Evi.
            </p>
            <p className="contentt mb-5">
              Consultation can be in-person, via email, WhatsApp, video call, or
              Google Meet. Don't worry if you're unsure; we're here to help you
              define your style!
            </p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <img src={Sketch} className="" alt="" />
          <div className="container">
          <p className="numbering">#2</p>
            <h1 className="pt-5">Sketch</h1>
            <p className="contentt mb-5">
              Your Vision, Your Sketch! After our consultation, we'll craft a
              dress sketch inspired by your ideas. We'll share it via email or
              WhatsApp, and if needed, we'll make adjustments until it's just
              right. There's a non-refundable sketch fee, but it's deducted from
              your dress price.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <img src={Production} className="" alt="" />
          <div className="container">
          <p className="numbering">#3</p>
            <h1 className="pt-5">Production</h1>
            <p className="contentt">
              Creating Your Dream Dress: Once your design and fabric are
              approved, we start crafting your dress. If you're abroad or can't
              visit, we can make a mock-up dress for fitting. The production
              typically takes six weeks, but it may vary based on design
              complexity.
            </p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <img src={Fitting} className="" alt="" />
          <div className="container">
          <p className="numbering">#4</p>
            <h1 className="pt-5">Fittings</h1>
            <p className="contentt">
              Once the dress is partly ready, you'll be invited for a first
              fitting. Subsequent fittings may be necessary depending on the
              outcome of the first fitting to ensure a perfect fit of the
              garment, in some cases though a single fitting could be enough!
            </p>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <img src={Delivery} className="" alt="" />
          <div className="container">
          <p className="numbering">#5</p>
            <h1 className="pt-5">Collection or Delivery</h1>
            <p className="contentt">
              Once the dress is fully finished, you can pick up at the studio or
              we can arrange a delivery to you anywhere in the world.
            </p>
          </div>
        </div>
      </section> */}

      <div className="container text-center mb-5 couture-footer">
        <h3 className="pt-5 mb-2 tiny-text">
          Say 'I Do' to Expert Guidance
        </h3>
        <p className="big-text container">
          Design Your Dream Dress with a Designer, Chat with our Consultant for
          Free!
        </p>
        <div className="buttons">
        <button className="button">
          <p>Consult for free</p>
        </button>

        <button className="button2">
          <p>Consult with evi</p>
        </button>
        </div>
      </div>
    </>
  );
};
export default Couture;
