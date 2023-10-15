import React, { useState } from "react";
import "../Css/Home.css";
import TransparentHeader from "./TransparentHeader";
import image1 from "../Images/home6.png";
import image2 from "../Images/home7.png";
import image4 from "../Images/home4.png";
import image5 from "../Images/home5.png";
import image6 from "../Images/home6.png";
import image7 from "../Images/home7.png";
import image8 from "../Images/home8.png";
import airvy from "../Images/airvy.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Home = () => {
  const [hover, setHover] = useState(true);
  const [hover2, setHover2] = useState(true);
  

  const handleHover = () => {
    setHover(false);
  };
  const mouseLeave = () => {
    setHover(true);
  };
  const handleHover2 = () => {
    setHover2(false);
  };
  const mouseLeave2 = () => {
    setHover2(true);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <TransparentHeader />
      <div className="video"></div>
      <div className="container text-center mt-5">
        <h3 className="pt-5 text-uppercase couture-heading">Airvy</h3>
        <h3 className="pt-1 home-heading">The Collection</h3>
        <p className="home-text pb-5">
          Making your wedding dress should be as unique as your love story. Each
          dress is designed to make you feel like the most beautiful bride on
          your special day. 
        </p>
      </div>
      <div className="roww1">
        <div
          className="column w-50"
          onMouseLeave={mouseLeave}
          onMouseEnter={handleHover}
        >
          <img src={image1} alt="" className="w-100" />
          <div className={hover ? "disappear" : "disappearing-text"}>
            <div className="text">Wedding Gowns</div>
            <div className="discover-btn">
              <button className="btn2">
                Discover<ArrowOutwardIcon className="arrow" style={{ color: "#060503" }} />
                </button>    
            </div>
          </div>
        </div>
        <div
          className="column w-50"
          onMouseLeave={mouseLeave2}
          onMouseEnter={handleHover2}
        >
          <img src={image2} alt="" className="w-100" />
          <div className={hover2 ? "disappear" : "disappearing-text"}>
            <div className="text">Accessories Gowns</div>
            <div className="discover-btn">
              <button className="btn2">
                Discover<ArrowOutwardIcon className="arrow" style={{ color: "#060503" }} />
                </button>             
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <h3 className="pt-5 text-uppercase couture-heading">Airvy</h3>
        <h3 className="pt-1 home-heading pb-5">Recent Collection</h3>
      </div>
      <div className="roww">
        <div className="column2">
          <img src={image4} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image5} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image6} alt="" className="w-100" />
        </div>
      </div>
      <div className="roww">
        <div className="column2">
          <img src={image6} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image7} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image8} alt="" className="w-100" />
        </div>
      </div>
      <div className="container text-center mt-5 mb-5 home-container">
        <h3 className="pt-5 text-uppercase tiny-text">
          Say 'I Do' to Expert Guidance
        </h3>
        <p className="big-text">
          Design Your Dream Dress with a Designer, Chat with our Consultant for
          Free!
        </p>
        <button className="btn btn-light mt-3 border-dark mb-5 rounded-pill">
          Book a Consultation
        </button>
      </div>
      <div className="image-overlay position-relative">
        <div className="overlay position-absolute bottom-0 end-0">
          <h3 className="pt-5 text-uppercase overlay-heading">FOUNDER</h3>
          <h3 className="pt-1 overlay-heading2">The designer</h3>
          <p className="overlay-text text-center">
            Airvy atelier was established in 2015 by Evi Jesumuyiwa. She began
            designing as a teen in high school, creating sketches and making
            little dresses from scrap pieces she could find.
          </p>
          <button className=" btn overlay-tiny-text mb-3">
            Discover
            <ArrowOutwardIcon className="arrow" style={{ color: "#E7E7E6" }} />
          </button>
        </div>
      </div>
      <div className="container text-center mt-5 mb-5">
        <h3 className="pt-5 text-uppercase couture-heading">Feedback</h3>
        <h3 className="pt-1 home-heading pb-4">Love letters from brides</h3>
      </div>
      <Carousel responsive={responsive} className="carousel mt-5">
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column ">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center p-4 d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
        <div className="border-light item text-center d-flex justify-content-center align-items-center flex-column">
          <p>
            We&#39;ve been using Untitled to kick start every new project and
            can&#39;t imagine working without it.
          </p>
          <img src={airvy} alt="" className="w-25 rounded-circle" />
          <p className="pt-4">Candice Wu</p>
          <p className="date">May, 2023</p>
        </div>
      </Carousel>
      ;
    </>
  );
};
export default Home;
