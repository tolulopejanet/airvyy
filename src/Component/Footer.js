import React from "react";
// import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import "../Css/Footer.css";
import Logo from "../Images/logo.svg";
import "../Fonts/Isidora/IsidoraSans-Regular.ttf";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BackToTopButton from "./BackToTopButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <footer className="desktop-view">
        <div className="footer">
          <div className="foot">
          <div className="logo">
            <img src={Logo} alt="aivys-logo" />
          </div>

          <div className="footer-text">
            <h3 className="pt-3 text-uppercase footer-tiny-text">
              Walk in store
            </h3>
            <p className="footer-normal-text pt-2 mb-5">
              Airvy showroom, Lennox mall, admiralty way, lekki phase 1, Lagos
              State, Nigeria.
            </p>
          </div>
          </div>

          <BackToTopButton />

          <div className="borderBottom"></div>

          <div class="copyright-container mt-4">
            <div className="copyright">
              <p>&copy; 2023 Airvy. All rights reserved.</p>
            </div>

            <nav>
              <div className="icons d-flex">
                <InstagramIcon style={{ color: "#252525" }} className="mr-3" />
                <FacebookIcon style={{ color: "#252525" }} className="mx-3" />
                <WhatsAppIcon style={{ color: "#252525" }} />
              </div>
            </nav>
          </div>
        </div>
      </footer>

      {/* <footer className="mobile-view">
        <div className="container black-bg">
        <div className="text-left foot d-flex  flex-column footer">
          <div className="logo container">
            <img src={Logo} alt="aivys-logo" />
          </div>

          <div className="text-left container">
        <h3 className="pt-3 text-uppercase footer-tiny-text">Walk in store</h3>
        <p className="footer-normal-text mb-5">
        Airvy showroom, Lennox mall, admiralty way, lekki phase 1, Lagos State, Nigeria.
        </p>
      </div>

          <div class="container">
          <div className="borderBottom mb-4"></div>
            <div className="copyright">
              <p>&copy; 2023 Airvy. All rights reserved.</p>
            </div>

            <nav>
              <div className="icons d-flex">
                <InstagramIcon style={{ color: "#98A2B3" }} className="mr-3"/>
                <FacebookIcon style={{ color: "#98A2B3" }} className="mx-3"/>
                <WhatsAppIcon style={{ color: "#98A2B3" }}/>
              </div>
            </nav>
          </div>
        </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
