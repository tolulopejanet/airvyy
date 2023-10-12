import React, { useState } from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";
import "../Css/TransparentHeader.css";
import "../Fonts/Isidora/IsidoraSans-Regular.ttf";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const TransparentHeader = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 470) {
      setHeader(true);
    } else {
      setHeader(false);
    }
    // console.log(window.scrollY);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Product",
      icon: <InfoIcon />,
    },
    {
      text: "Category",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Utility",
      icon: <PhoneRoundedIcon />,
    },
  ];
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header
        className={header ? "transparentHeader active" : "transparentHeader"}
      >
        <div class="navbar navbar-expand-lg d-flex justify-content-around">
          <div className="logo">
            <img src={logo} alt="aivys-logo" />
          </div>

          <nav>
            <div className="lists">
              <NavLink
                exact
                to="/"
                className="listItem2 mx-3 active"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="listItem2 mx-3 active"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/couture"
                className="listItem2 mx-3 active"
                activeClassName="active"
              >
                Couture Process
              </NavLink>
              <NavLink
                to="/store"
                className="listItem2 mx-3 active"
                activeClassName="active"
              >
                Store
              </NavLink>
              <NavLink
                to="/contact"
                className="listItem2 mx-3 active"
                activeClassName="activeItem"
              >
                Contact
              </NavLink>
            </div>
          </nav>

          <div>
            <a className="btnText" href="/bookappointment">
              <button className="transparentheader-button">
                Book a Consultation
              </button>
            </a>
          </div>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
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
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </header>
    </>
  );
};
export default TransparentHeader;
