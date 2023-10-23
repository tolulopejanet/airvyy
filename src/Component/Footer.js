import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import "../Css/Footer.css";
import Translogo from "../Images/transLogo.png";
import "../Fonts/Isidora/IsidoraSans-Regular.ttf";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BackToTopButton from "./BackToTopButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Footer = () => {
  return (
    <>
      <footer className="desktop-view">
        <div className="text-center foot d-flex  align-items-center flex-column footer">
          <div className="logo">
            <img src={Translogo} alt="aivys-logo" />
          </div>

          <nav>
            <div className="list mb-5 mt-3">
              <NavLink
                exact
                to="/"
                className="listItem mx-3"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="listItem mx-3"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/couture"
                className="listItem mx-3"
                activeClassName="active"
              >
                Couture Process
              </NavLink>
              <NavLink
                to="/store"
                className="listItem mx-3"
                activeClassName="active"
              >
                Store
              </NavLink>
              <NavLink
                to="/contact"
                className="listItem mx-3"
                activeClassName="activeItem"
              >
                Contact
              </NavLink>
            </div>
          </nav>

          <BackToTopButton/>

          <div className="borderBottom container mb-5"></div>

          <div class="d-flex justify-content-between container">
            <div className="copyright">
              <p>&copy; 2023 Airvy. All rights reserved.</p>
            </div>

            <nav>
              <div className="icons d-flex">
                <InstagramIcon style={{ color: "#98A2B3" }} className="mx-3"/>
                <FacebookIcon style={{ color: "#98A2B3" }}/>
                
              </div>
            </nav>
          </div>
        </div>
      </footer>



      <footer className="mobile-view">
        <div className="container black-bg">
        <div className="text-left foot d-flex  flex-column footer">
          <div className="logo container">
            <img src={Translogo} alt="aivys-logo" />
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
      </footer>
    </>
  );
};

export default Footer;
