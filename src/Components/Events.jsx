import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Events = () => {
  return (
    <>
      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">Latest news</div>
                <div className="section-title white">News & Events</div>
                <div className="section-backtitle">Blog</div>
                <span className="icon white">
                  <i className="ti-star"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30} // space between slides
                slidesPerView={3} // number of slides per view
                navigation
                pagination={{ clickable: true }}
                className="owl-carousel owl-theme"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/1.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>27</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Mains</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        New York Strip Steak with Garlic Butter
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/2.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>24</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Salads</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Grilled Salmon Salad With Lime and Herbs Recipe
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/3.jpg.png" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>21</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Desserts</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        The Best Chocolate Cake of Your Life
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/4.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>18</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Drinks</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        The Best Champagne For All of Your Celebrations
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/5.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>15</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Breakfast</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Practical Toast Recipe That Will Brighten Your Morning
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>

                {/* Slide 6 */}
                <SwiperSlide>
                  <div className="position-re o-hidden">
                    <img src="img/news/6.jpg" alt="" />
                    <div className="date">
                      <a href="post.html">
                        <span>Dec</span> <i>08</i>
                      </a>
                    </div>
                  </div>
                  <div className="con">
                    <span className="category">
                      <a href="">Desserts</a>
                    </span>
                    <h5>
                      <a href="post.html">
                        Tall and Creamy New York Cheesecake Recipe
                      </a>
                    </h5>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
