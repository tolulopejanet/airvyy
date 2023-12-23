import React, { useState } from "react";
import Header from "./Header";
import "../Css/Store.css";
import "../Css/Home.css";
import Accessory1 from "../Images/access1.png";
import Accessory2 from "../Images/access2.png";
import Accessory3 from "../Images/access3.png";
import Accessory4 from "../Images/access4.png";
import Accessory5 from "../Images/access5.png";
import Accessory6 from "../Images/access6.png";
import Accessory7 from "../Images/access7.png";
import Accessory8 from "../Images/access8.png";
import Accessory9 from "../Images/access9.png";
import Accessory10 from "../Images/access10.png";
import Accessory11 from "../Images/access11.png";
import Accessory12 from "../Images/access12.png";
import image11 from "../Images/evi1.jpg";
import image21 from "../Images/evi2.jpg";
import image31 from "../Images/evi3.jpg";
import image41 from "../Images/evi4.jpg";
import image51 from "../Images/evi5.jpg";
import image12 from "../Images/evi6.jpg";
import image22 from "../Images/evi7.jpg";
import image32 from "../Images/evi8.jpg";
import image42 from "../Images/evi9.jpg";
import image52 from "../Images/evi11.jpg";
import image13 from "../Images/evi12.jpg";
import image23 from "../Images/evi13.jpg";
import image33 from "../Images/evi14.jpg";
import image43 from "../Images/evi15.jpg";
import image53 from "../Images/evi16.jpg";

const Store = () => {
  // console.log(Data);
  const [toggle, setToggle] = useState(1);
  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <Header />

      <div className="subNav">
        <div className="d-flex justify-content-around align-items-center storeNav">
          <div
            className={`${toggle === 1 ? `tab active-tab list` : `tab list`}`}
            onClick={() => updateToggle(1)}
          >
            Ball gowns
          </div>
          <div
            className={`${toggle === 2 ? `tab active-tab list` : `tab list`}`}
            onClick={() => updateToggle(2)}
          >
            Trumpet with Detachable Wrap
          </div>
          <div
            className={`${toggle === 3 ? `tab active-tab list` : `tab list`}`}
            onClick={() => updateToggle(3)}
          >
            Mermaid
          </div>
        </div>
      </div>

      <div className="mt-5 gallery2">
        <div className={toggle === 1 ? "imgContainer col" : "content"}>
          <div className="roww">
            <div className="column2">
              <img src={image41} alt="ball-gown" className="" />
            </div>
            <div className="column2">
              <img src={image51} alt="ball-gown" className="" />
            </div>
            <div className="column2">
              <img src={image12} alt="ball-gown" className="" />
            </div>
          </div>

          <div className="container text-center mt-5 store">
            <h3 className=" text-uppercase tiny-heading">Accesories</h3>
            <h3 className="heading">Complete the look</h3>
            <p className="text pb-5">
              Our walk in store is available & open to every bride, walk in and
              find just the right accessories for your wonderful day.
            </p>
          </div>

          <div className="gallery-accessory">
            <div className={toggle === 1 ? "col" : "content"}>
              <img
                src={Accessory1}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image"
              />
            </div>
            <div className="col">
              <img
                src={Accessory2}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory3}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory4}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image3"
              />
            </div>

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
                    <img src={Accessory1} alt="" className="d-block w-100" />
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
                    <img src={Accessory2} alt="" className="d-block w-100" />
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
                    <img src={Accessory3} alt="" className="d-block w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery2">
        <div className={toggle === 2 ? "imgContainer col" : "content"}>
          <div className="roww">
            <div className="column2">
              <img src={image53} alt="detachable-wrap" className="" />
            </div>
            <div className="column2">
              <img src={image43} alt="detachable-wrap" className="" />
            </div>
            <div className="column2">
              <img src={image33} alt="detachable-wrap" className="" />
            </div>
          </div>

          <div className="roww mt-1">
            <div className="column2">
              <img src={image31} alt="detachable-wrap" className="" />
            </div>
            <div className="column2">
              <img src={image11} alt="detachable-wrap" className="" />
            </div>
            <div className="column2">
              <img src={image21} alt="detachable-wrap" className="" />
            </div>
          </div>

          <div className="container text-center mt-5 store">
            <h3 className=" text-uppercase tiny-heading">Accesories</h3>
            <h3 className="heading">Complete the look</h3>
            <p className="text pb-5">
              Our walk in store is available & open to every bride, walk in and
              find just the right accessories for your wonderful day.
            </p>
          </div>

          <div className="gallery-accessory">
            <div className={toggle === 2 ? "col" : "content"}>
              <img
                src={Accessory5}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image"
              />
            </div>
            <div className="col">
              <img
                src={Accessory6}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory7}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory8}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image3"
              />
            </div>

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
                    <img src={image11} alt="" className="d-block w-100" />
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
                    <img src={image22} alt="" className="d-block w-100" />
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
                    <img src={image52} alt="" className="d-block w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="gallery2">
        <div className={toggle === 3 ? "imgContainer col" : "content"}>
          <div className="roww">
            <div className="column2">
              <img src={image32} alt="mermaid" className="" />
            </div>
            <div className="column2">
              <img src={image22} alt="mermaid" className="" />
            </div>
            <div className="column2">
              <img src={image42} alt="mermaid" className="" />
            </div>
          </div>

          <div className="roww mt-1">
            <div className="column2">
              <img src={image23} alt="mermaid" className="" />
            </div>
            <div className="column2">
              <img src={image52} alt="mermaid" className="" />
            </div>
            <div className="column2">
              <img src={image13} alt="mermaid" className="" />
            </div>
          </div>

          <div className="container text-center mt-5 store">
            <h3 className=" text-uppercase tiny-heading">Accesories</h3>
            <h3 className="heading">Complete the look</h3>
            <p className="text pb-5">
              Our walk in store is available & open to every bride, walk in and
              find just the right accessories for your wonderful day.
            </p>
          </div>

          <div className="gallery-accessory">
            <div className={toggle === 3 ? "col" : "content"}>
              <img
                src={Accessory9}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image"
              />
            </div>
            <div className="col">
              <img
                src={Accessory10}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory11}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image2"
              />
            </div>
            <div className="col">
              <img
                src={Accessory12}
                alt=""
                data-bs-toggle="modal"
                className="img cursor-pointer"
                data-bs-target="#image3"
              />
            </div>

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
                    <img src={image11} alt="" className="d-block w-100" />
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
                    <img src={image22} alt="" className="d-block w-100" />
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
                    <img src={image52} alt="" className="d-block w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="gallery2">
        <div className={toggle === 2 ? "col" : "content"}>
        
          <div className="roww">
            <div className="column2">
            <img src={image53} alt="" className="" />
            </div>
            <div className="column2">
            <img src={image43} alt="" className="" />   
            </div> 
            <div className="column2">
            <img src={image33} alt="" className="" />   
            </div>     
          </div>

          <div className="roww mt-1">
            <div className="column2">
            <img src={image31} alt="" className="" />
            </div>
            <div className="column2">
              <img src={image11} alt="" className="" />
            </div>
            <div className="column2">
              <img src={image21} alt="" className="" />
            </div>
            
          </div>
        </div>
      </div>



      <div className="gallery2">
        <div className={toggle === 3 ? "col" : "content"}>
        
          <div className="roww">
            <div className="column2">
              <img src={image43} alt="" className="" />
            </div>
            <div className="column2">
              <img src={image53} alt="" className="" />
            </div>     
          </div>
          <div className="roww">
            <div className="column2">
              <img src={image13} alt="" className="" />
            </div>
            <div className="column2">
            <img src={image42} alt="" className="" />
            
            </div>
            <div className="column2">
              <img src={image33} alt="" className="" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 gallery2">
        <div className={toggle === 2 ? "col" : "content"}>
          <img
            src={Accessory1}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image"
          />
        </div>
        <div className="col">
          <img
            src={Accessory2}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image2"
          />
        </div>
        <div className="col">
          <img
            src={Accessory3}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image2"
          />
        </div>
        <div className="col">
          <img
            src={Accessory4}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image3"
          />
        </div>

     
      </div> */}

      {/* <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 gallery2">
        <div className="col">
          <img
            src={image31}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image4"
          />
        </div>
        <div className="col">
          <img
            src={image42}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image5"
          />
        </div>
        <div className="col">
          <img
            src={image21}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image6"
          />
        </div>
        <div className="col">
          <img
            src={image33}
            alt=""
            data-bs-toggle="modal"
            className="img cursor-pointer"
            data-bs-target="#image7"
          />
        </div>

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
                <img src={image31} alt="" className="d-block w-100" />
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
                <img src={image42} alt="" className="d-block w-100" />
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
                <img src={image21} alt="" className="d-block w-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="image7" tabIndex="-1" aria-hidden>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <img src={image33} alt="" className="d-block w-100" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Store;
