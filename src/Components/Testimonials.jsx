import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Testimonials = () => {
  return (
    <>
      <section
        className="background bg-img bg-fixed section-padding pb-0 bg"
        data-background="img/banner5.jpg"
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="testimonials">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  className="testimonials-box"
                >
                  <SwiperSlide className="item">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <p>
                      Restaurant dapibus asue metus the nec feusiate eraten miss
                      hendreri net ve ante the lemon sanleo nectan feugiat erat
                      hendrerit necuis ve ante otel inilla duiman at finibus
                      viverra neca the sene on satien.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/4.jpg" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Emily Brown</h6>
                        <span>Customer review</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <p>
                      Restaurant dapibus asue metus the nec feusiate eraten miss
                      hendreri net ve ante the lemon sanleo nectan feugiat erat
                      hendrerit necuis ve ante otel inilla duiman at finibus
                      viverra neca the sene on satien.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/1.jpg" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Nolan White</h6>
                        <span>Customer review</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="item">
                    <span>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                      <i className="star-rating"></i>
                    </span>
                    <p>
                      Restaurant dapibus asue metus the nec feusiate eraten miss
                      hendreri net ve ante the lemon sanleo nectan feugiat erat
                      hendrerit necuis ve ante otel inilla duiman at finibus
                      viverra neca the sene on satien.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        <img src="img/team/5.jpg" alt="" />
                      </div>
                      <div className="cont">
                        <h6>Olivia Martin</h6>
                        <span>Customer review</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-5 offset-md-1">
              <div className="opening-hours-box">
                <div className="head-box">
                  <h4>Opening Hours</h4>
                </div>
                <div className="content-box">
                  <div className="item">
                    <div className="info">
                      <div className="row">
                        <div className="col col-md-5">
                          <div className="cont">
                            <h6 className="day">Sunday to Tuesday</h6>{" "}
                            <span className="time">10:00</span>
                            <br /> <span className="time">22:00</span>
                          </div>
                        </div>
                        <div className="col col-md-2">
                          <div className="vl"></div>
                        </div>
                        <div className="col col-md-5">
                          <div className="cont">
                            <h6 className="day">Friday to Saturday</h6>{" "}
                            <span className="time">12:00</span>
                            <br /> <span className="time">19:00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <a href="index.html" className="button-1 mt-15">
                  Make A Reservation
                </a>
                <p>
                  <small>
                    You can also call:{" "}
                    <a href="mailto:8551004444">855 100 4444</a> to make a
                    reservation.
                  </small>
                </p>
                <p className="mt-0">
                  <a href="#">
                    <i className="ti-location-pin"></i>
                  </a>
                  <small>IKenegbu Layout, Owerri</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
