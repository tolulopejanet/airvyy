import React, {useState} from "react";
import Data from "./Data";
import Header from "./Header";
import "../Css/Store.css";
import image1 from "../Images/home4.png";
import image2 from "../Images/home5.png";
import image3 from "../Images/home6.png";
import image4 from "../Images/home6.png";
import image5 from "../Images/home7.png";
import image6 from "../Images/home8.png";

const Store = () => {
  // console.log(Data);
  const [toggle, setToggle] = useState(1);
  function updateToggle(id){
    setToggle(id)
  }
  return (
    <>
      <Header />

      <div className="subNav">
        <div className="d-flex justify-content-around m-auto storeNav">
          <div className="tab list" onClick={()=>updateToggle(1)}>
            Timeless Romance
          </div>
          <div className=" tab list" onClick={()=>updateToggle(2)}>
            Celestial Couture
          </div>
          <div className="tab list" onClick={()=>updateToggle(3)}>
          Celestial Couture
          </div>
        </div>
      </div>
      
      <div className=" mt-5 row gallery">
        {Data.map((data) => (
          <div className={toggle === 1 ?"imgContainer col-4": "content" }>
            <img src={data.image} alt="" className="" />
          </div>
        ))}
      </div>

      <div className="row gallery">
        {Data.map((data) => (
          <div className={toggle === 2 ? "imgContainerr col-4": "content" }>
            <img src={data.image} alt="" className="" />
          </div>
        ))}
      </div>

      <div className="row gallery">
        {Data.map((data) => (
          <div className={toggle === 3 ? "imgContainerrr col-4": "content" }>
            <img src={data.image} alt="" className="" />
          </div>
        ))}
      </div>

      <div className="container text-center mt-5 store">
        <h3 className="pt-5 text-uppercase tiny-heading">Accesories</h3>
        <h3 className="pt-1 heading">Complete the look</h3>
        <p className="text pb-5">
          Our walk in store is available & open to every bride, walk in and find
          just the right accessories for your <br /> wonderful day.
        </p>
      </div>

      <div className=" mt-5 gallery2">
        <div className="imgContainer2 d-flex">
          <img
            src={image1}
            alt=""
            data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image"
          />
          <img
            src={image2}
            alt=""
            data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image2"
          />
          <img
            src={image2}
            alt=""
            data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image2"
          />
          <img
            src={image3}
            alt=""
            data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image3"
          />

<div className="modal fade" id="image" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image1} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="image2" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image2} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="image3" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image3} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer2 d-flex">
          <img src={image4} alt="" data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image4" />
          <img src={image5} alt="" data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image5" />
          <img src={image5} alt="" data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image5" />
          <img src={image6} alt="" data-bs-toggle="modal"
            className="img cursur-pointer"
            data-bs-target="#image6" />




          <div className="modal fade" id="image4" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image4} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="image5" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image5} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="image6" tabIndex="-1" aria-hidden>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  <img src={image6} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
