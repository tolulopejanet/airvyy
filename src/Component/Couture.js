import React from "react";
import "../Css/Couture.css";
import Header from "./Header";

const Couture = () => {
  return (
    <>
    <Header/>
      <div className="container text-center mt-5">
        <h3 className="pt-5 text-uppercase couture-heading">
        Experience Bridal Couture
        </h3>
        <p className="text-capitalize couture-text">
        Step Inside Our Creative Workshop
        </p>
        <p className="couture-tiny-text">
        Your Dress, Our Craft.
        </p>
      </div>

      <div className="layer d-flex flex-column justify-content-center mt-5">
        <div className="blur-box d-flex flex-column justify-content-center ms-5">
          <h1>1. Consultation</h1>
          <p className="content">
            The first stage is to discuss with you about your dress, all the
            details of the dress are discussed in full and take note of.
            You&#39;ll be asked questions such as the preferred colour, closure
            type, fabric choice, embellishment, silhouette choice and so.
            You&#39;ll be expected to have a few pictures or videos to define
            your taste to us but do not worry if you&#39;re unsure, we&#39;ll
            assist you.
          </p>
          <p className="content two">
            The consultation can be done in different ways: In person at the
            store, E-mail, WhatsApp chat, Video call on WhatsApp in person at
            our store, via a google meet or WhatsApp call. Consultation with our
            Bridal consultant is free but comes at a fee with Evi.
          </p>
        </div>
      </div>

      <div className="layer d-flex flex-column justify-content-center">
        <div className="blur-box d-flex flex-column justify-content-center ms-5">
          <h1>2. Sketch</h1>
          <p className="content">
            After our consultation has been concluded, a sketch will be created
            based on your design inspiration and shared to you either via mail
            or Whatsapp. If necessary, changes will be made to the sketch to
            ensure the final sketch is perfect for you. A non-refundable fee is
            charged for creating the sketch(es) but is deductible from the
            overall price of the dress.
          </p>
        </div>
      </div>

      <div className="layer d-flex flex-column justify-content-center">
        <div className="blur-box d-flex flex-column justify-content-center ms-5">
          <h1>3. Production</h1>
          <p className="content">
            Once the design sketch and fabric(s) have been approved, the
            production of the dress will commence.
          </p>
          <p className="content two">
            For clients who are outside the country or can&#39;t make it to the
            studio for their fitting, a mock up dress will be made upon request
            and sent to you for fitting before the actual dress is made. The
            average timeline for production of a wedding dress is six weeks but
            varies from dress to dress depending on the intricacy of the design.
          </p>
        </div>
      </div>

      <div className="layer d-flex flex-column justify-content-center">
        <div className="blur-box d-flex flex-column justify-content-center ms-5">
          <h1>4. Fittings</h1>
          <p className="content">
          Once the dress is partly ready, you&#39;ll be invited for a first fitting. Subsequent fittings may be necessary depending on the outcome of the first fitting to ensure a perfect fit of the garment, in some cases though a single fitting could be enough!
          </p>
        </div>
      </div>

      <div className="layer d-flex flex-column justify-content-center">
        <div className="blur-box d-flex flex-column justify-content-center ms-5">
          <h1>5. Collection or Delivery</h1>
          <p className="content">
          Once the dress is fully finished, you can pick up at the studio or we can arrange a delivery to you anywhere in the world.
          </p>
        </div>
      </div>

      <div className="container text-center mt-5 mb-5">
        <h3 className="pt-5 text-uppercase couture-heading">Say 'I Do' to Expert Guidance</h3>
        <p className="home-text">
        Design Your Dream Dress with a Designer, Chat with our Consultant for Free!
        </p>
        <button className="btn btn-light mt-3 border-dark mb-5 rounded-pill">
          Book a Consultation
        </button>
      </div>
    </>
  );
};
export default Couture;
