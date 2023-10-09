import React from "react"; 
import logo from '../Images/logo.png';
import {NavLink} from 'react-router-dom';
import '../Css/Header.css';
import '../Fonts/Isidora/IsidoraSans-Regular.ttf';


const Header=()=>{
    return(
        <>
            <header className="whiteHeader">
            <div class="navbar navbar-expand-lg d-flex justify-content-around"> 
                    <div className="logo">
                        <img src={logo} alt="aivys-logo" />
                    </div>

                    <nav>
                        <div className="lists">
                            <NavLink exact to="/" className="listItem mx-3" activeClassName="active">Home</NavLink>
                            <NavLink to="/about" className="listItem mx-3" activeClassName="active">About</NavLink>
                            <NavLink to="/couture" className="listItem mx-3" activeClassName="active">Couture Process</NavLink>
                            <NavLink to="/store" className="listItem mx-3" activeClassName="active">Store</NavLink>
                            <NavLink to="/contact" className="listItem mx-3" activeClassName="activeItem">Contact</NavLink>
                        </div>
                        </nav>

                    
                    
                        <div>
                        <a className="btnText" href="/bookappointment"><button className="header-button">Book a Consultation</button></a>
                        </div>
                    
                  </div>
                
            </header>
        </>
    )
}
export default Header;