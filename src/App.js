import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Couture from './Component/Couture';
import Store from './Component/Store';
import Contact from './Component/Contact';
import Error from './Component/Error';
import Footer from "./Component/Footer";
import BookAppointment from "./Component/BookAppointment";
import ScrollToTop from "./Component/ScrollToTop";
// import TransparentHeader from "./Component/TransparentHeader";


const App=()=>{
  return(
    <>
    <ScrollToTop/>
      <Routes>      
          <Route exact path="/" Component={Home}/>
          <Route path="/about" Component={About}/>
          <Route path="/couture" Component={Couture}/>
          <Route path="/store" Component={Store}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="*" Component={Error}/>
          <Route path="/bookappointment" Component={BookAppointment}></Route>
      </Routes>
      <Footer/>
    </>
  )
}
export default App;