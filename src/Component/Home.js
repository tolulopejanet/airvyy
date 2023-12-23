import React, { useState } from "react";
import "../Css/Home.css";
import TransparentHeader from "./TransparentHeader";
import airvyVideo from '../video/airvy.mp4';
// import image1 from "../Images/home6.png";
// import image2 from "../Images/home7.png";
// import image4 from "../Images/home4.png";
// import image5 from "../Images/home5.png";
// import image6 from "../Images/home6.png";
// import image7 from "../Images/home7.png";
// import image8 from "../Images/home8.png";
import airvy from "../Images/airvy.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BackToTopButton from "./BackToTopButton";
import image11 from "../Images/evi1.jpg";
import image21 from "../Images/evi2.jpg";
import image31 from "../Images/evi3.jpg";
import image41 from "../Images/evi4.jpg";
import image51 from "../Images/evi5.jpg";
// import image12 from "../Images/evi6.jpg";
import image22 from "../Images/evi7.jpg";


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
      
      <div className="video">
          <video src={airvyVideo} autoPlay loop muted></video>
      </div>
      <div className="container vid-text">
        <h3 className="text-uppercase couture-heading text-center">
          Airvy
        </h3>
        <h3 className="pt-1 home-heading text-center">The Collection</h3>
        <p className="home-text text-center">
          Making your wedding dress should be as unique as your love story. Each dress is designed to make you feel like the most beautiful bride on
          your special day.
        </p>
      </div>


      <div className="disappear-container">
        <div
          className="disappearing-subcontainer w-50"
          onMouseLeave={mouseLeave}
          onMouseEnter={handleHover}
        >
          <div className="">
          <img src={image11} alt="" className="w-100" />
         
        <div className={hover ? "disappear " : "disappearing-text overlayy"}>
            <div className="text"> Wedding Gowns </div>
            <div className="discover-btn">
              <button className="btn2">
                Discover
                <ArrowOutwardIcon
                  className="arrow"
                  style={{ color: "#060503" }}
                />
              </button>
            </div>
          </div>
          </div>
        </div>


        <div
          className="disappearing-subcontainer w-50"
          onMouseLeave={mouseLeave2}
          onMouseEnter={handleHover2}
        >
          <div className="">
          <img src={image21} alt="" className="w-100" />
          
         
          <div className={hover2 ? "disappear" : "disappearing-text overlayy"}>
            <div className="text">Accessories</div>
            <div className="discover-btn">
              <button className="btn2">
                Discover
                <ArrowOutwardIcon
                  className="arrow"
                  style={{ color: "#060503" }}
                />
              </button>
          </div>
          </div>
          </div>
        </div>
      </div>

      
      <div className="mobilee row3 row row-cols-1 row-cols-sm-1 row-cols-md-1">
        <div
          className="col disappearing-subcontainer"
          onMouseLeave={mouseLeave}
          onMouseEnter={handleHover}
        >
          <img src={image31} alt="" className="" />
         
          <div className={hover ? "disappear" : "disappearing-text overlayy"}>
            <div className="discover-btn">
            <a href="./store">
              <button className="btn2">
              View Collection
              </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="col disappearing-subcontainer"
          onMouseLeave={mouseLeave2}
          onMouseEnter={handleHover2}
        >
          <img src={image41} alt="" className="" />
          <div className={hover2 ? "disappear" : "disappearing-text overlayy"}>
            <div className="discover-btn">
            <a href="./store">
              <button className="btn2">
              View Collection
              </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="col disappearing-subcontainer"
          onMouseLeave={mouseLeave2}
          onMouseEnter={handleHover2}
        >
          <img src={image51} alt="" className="" />
          <div className={hover2 ? "disappear" : "disappearing-text overlayy"}>
            
            <div className="discover-btn">
              <a href="./store">
              <button className="btn2">
              View Collection
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="container text-center collection">
        <h3 className="pt-5 text-uppercase home-tiny-heading ">Airvy</h3>
        <h3 className="pt-1 home-heading pb-5">Recent Collection</h3>
      </div>
      <div className="roww">
        <div className="column2">
          <img src={image11} alt="" className="w-100 one" />
        </div>
        <div className="column2">
          <img src={image21} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image31} alt="" className="w-100" />
        </div>
      </div>
      <div className="roww roww2">
        <div className="column2">
          <img src={image41} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image51} alt="" className="w-100" />
        </div>
        <div className="column2">
          <img src={image22} alt="" className="w-100" />
        </div>
      </div>


      <div className="container text-center home-container">
        <h3 className="text-uppercase tiny-text">
          Say 'I Do' to Expert Guidance
        </h3>
        <p className="big-text">
          Design Your Dream Dress with a Designer, Chat with our Consultant for
          Free!
        </p>
        <a href="https://calendly.com/airvyatelier/free-consultation">
        <button className="btn btn-light mt-2 border-dark  rounded-pill">
          Book a Consultation
        </button>
        </a>
      </div>


      <div className="image-overlay position-relative">
        <div className="overlay desktop-view position-absolute bottom-0 end-0">
          <h3 className="pt-5 text-uppercase overlay-heading">FOUNDER</h3>
          <h3 className="pt-1 overlay-heading2">The designer</h3>
          <p className="overlay-textt text-center">
            Airvy atelier was established in 2015 by Evi Jesumuyiwa. She began
            designing as a teen in high school, creating sketches and making
            little dresses from scrap pieces she could find.
          </p>
          <button className=" btn overlay-tiny-text mb-3">
            Discover
            <ArrowOutwardIcon className="arrow" style={{ color: "#E7E7E6" }} />
          </button>
        </div>
        

        <div className="overlay mobile-view position-absolute bottom-0 end-0">
          <h3 className="pt-4 text-uppercase overlay-heading ">FOUNDER</h3>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="pt-1 overlay-heading2">The designer</h3>

            <a href="./about">
              <button className="btn">Meet Evi</button>
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center feedback ">
        <h3 className="text-uppercase couture-heading">Feedback</h3>
        <h3 className="pt-1 home-heading">Love letters from brides</h3>
      </div>

      <section className="carousel">
      <Carousel responsive={responsive} 
  className="mt-5 container">
        <div className="border-light item text-center d-flex justify-content-center align-items-center flex-column mr-3">
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
        <div className="border-light item text-center d-flex justify-content-center align-items-center flex-column">
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
        <div className="border-light item text-center d-flex justify-content-center align-items-center flex-column">
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
      </section>
      <BackToTopButton />;
    </>
  );
};
export default Home;
