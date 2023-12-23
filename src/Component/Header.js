import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import "../Css/TransparentHeader.css";
import "../Fonts/Isidora/IsidoraSans-Regular.ttf";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [ 
    {
      path: "/",
      text: "Home",
    
    },
    {
      path: "/about",
      text: "About",
    
    },
    {
      path: "/couture",
      text: "Couture Process",
    
    },
    {
      path: "/store",
      text: "Store",
     
    },
    {
      path: "/contact",
      text: "Contact",
   
    },
  ];

  return (
    <>
      <header className="whiteHeader w-full activee">
        <div class="navbar navbar-expand-lg navbar-menu-container d-flex justify-content-around">
          <div className="logo">
            <img src={logo} alt="aivys-logo" />
          </div>

          <nav>
            <div className="lists navbar-links-container">
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
          <div>
            <a className="btnText" href="/bookappointment">
              <button className="header-button">Book a Consultation</button>
            </a>
          </div>

          <div className="navbar-menu-container">
            <HiOutlineBars3
              onClick={() => setOpenMenu(true)}
              style={{ color: "#000", fontSize: "35px" }}
            />
          </div>
          <Drawer
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton to={item.path}>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <a className="btnText" href="/bookappointment">
                  <button className="responsive-btn ms-2 mt-3">
                    Book a Consultation
                  </button>
                </a>
              </List>
              <Divider />
            </Box>
          </Drawer>
        </div>
      </header>
    </>
  );
};
export default Header;
