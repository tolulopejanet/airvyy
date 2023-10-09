import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import "../Css/Footer.css";
import logo from "../Images/logo.png";
import "../Fonts/Isidora/IsidoraSans-Regular.ttf";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-center foot d-flex  align-items-center flex-column footer">
          <div className="logo">
            <img src={logo} alt="aivys-logo" />
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

          <div className="border-bottom container mb-5"></div>

          <div class="d-flex justify-content-between container">
            <div className="copyright">
              <p>&copy; 2023 Airvy. All rights reserved.</p>
            </div>

            <nav>
              <div className="icons d-flex">
                <TwitterIcon style={{ color: "#98A2B3" }} className="mx-3"/>
                <LinkedInIcon style={{ color: "#98A2B3" }}/>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
