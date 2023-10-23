import React, { useState } from "react";
import Logo from "../Images/logo.png"
// import Translogo from "../Images/transLogo.png";
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
  // const [header, setHeader] = useState(false);
  // const changeBackground = () => {
  //   if (window.scrollY <= 580) {
  //     setHeader(true);
  //   }
  //   else  {
  //     setHeader(false);
  //   }
  
  // };
  // window.addEventListener("scroll", changeBackground);

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      path: '/',
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      path: '/about',
      text: "About",
      icon: <CommentRoundedIcon />,
    },
    {
      path: '/couture',
      text: "Couture Process",
      icon: <InfoIcon />,
    },
    {
      path: '/store',
      text: "Store",
      icon: <CommentRoundedIcon />,
    },
    {
      path: '/contact',
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  
  return (
    <>

      <header
        className="transparentHeader activee"
      >
        <div class="navbar navbar-expand-lg navbar-menu-container d-flex justify-content-around">
          <div className="logo nav-logo-container">
            <img src={Logo} alt="aivys-logo" />
          </div>
        
          <nav>
          
            <div className="lists navbar-links-container">
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

          
        

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={{ color: '#000', fontSize: '35px' }}/>
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
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                  
                </ListItem>
                
              ))}
              <a className="btnText" href="/bookappointment">
              <button className="responsive-btn ms-4 mt-3">
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
export default TransparentHeader;
