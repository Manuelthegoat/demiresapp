import React from "react";

const Hero = () => {
  return (
    <>
      <header class="header">
        <div class="video-fullscreen-wrap">
          <div class="video-fullscreen-video" data-overlay-dark="3">
            <img src="img/bg2.jpeg" alt="" />
          </div>
          <div class="v-middle caption overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h6>Est. 1895</h6>
                  <h1>
                    Welcome to Demires<span>Lounge & Wine Bar</span>
                  </h1>
                  <p>IKenegbu Layout, Owerri</p>
                  <a
                    href="#"
                    data-scroll-nav="2"
                    class="button-1 mt-30"
                  >
                    Check Our Menu<span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reservation">
          <a href="tel:2341233233233">
            <div class="icon d-flex justify-content-center align-items-center">
              {" "}
              <i class="flaticon-tray-1"></i>{" "}
            </div>
            <div class="call">
              <span>+234 (123) 323 3233</span>
              <br />
              Reservation
            </div>
          </a>
        </div>
        <div class="arrow bounce text-center">
          <a href="#" data-scroll-nav="1" class="">
            <i class="ti-arrow-down"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Hero;
