import React, { useState } from "react"; 
import logo from '../Images/logo.png';
import {NavLink} from 'react-router-dom';
import '../Css/TransparentHeader.css';
import '../Fonts/Isidora/IsidoraSans-Regular.ttf';

const TransparentHeader=()=>{ 
    const [header, setHeader] = useState(false);
     const changeBackground=()=>{
        if(window.scrollY >= 470){
            setHeader(true);
        }
        else{
            setHeader(false);
        }
        // console.log(window.scrollY);
     }
     window.addEventListener('scroll', changeBackground);
    return(
        <>
            <header className={header ? 'transparentHeader active' : 'transparentHeader'}>
            <div class="navbar navbar-expand-lg d-flex justify-content-around"> 
                    <div className="logo">
                        <img src={logo} alt="aivys-logo" />
                    </div>

                    <nav>
                         <div className="lists">
                            <NavLink exact to="/" className="listItem2 mx-3 active" activeClassName="active">Home</NavLink>
                            <NavLink to="/about" className="listItem2 mx-3 active" activeClassName="active">About</NavLink>
                            <NavLink to="/couture" className="listItem2 mx-3 active" activeClassName="active">Couture Process</NavLink>
                            <NavLink to="/store" className="listItem2 mx-3 active" activeClassName="active">Store</NavLink>
                            <NavLink to="/contact" className="listItem2 mx-3 active" activeClassName="activeItem">Contact</NavLink>
                        </div>
                        </nav>

                    
                        <div>
                        <a className="btnText" href="/bookappointment"><button className="transparentheader-button">Book a Consultation</button></a>
                        </div>
                  </div>
                
            </header>
        </>
    )
}
export default TransparentHeader;