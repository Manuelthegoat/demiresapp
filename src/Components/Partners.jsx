import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Partners = () => {
  return (
    <>
      <section className="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30} // space between slides
                slidesPerView={4} // number of slides per view
                navigation
                pagination={{ clickable: true }}
                loop={true} // loops the carousel
                className="owl-carousel owl-theme"
              >
                {/* Slide 1 */}
                <>
                  <SwiperSlide className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/2.png" alt="" />
                    </a>
                  </SwiperSlide>
                </>

                {/* Slide 2 */}
                <>
                  <SwiperSlide className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/3.png" alt="" />
                    </a>
                  </SwiperSlide>
                </>

                {/* Slide 3 */}
                <>
                  <SwiperSlide className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/4.png" alt="" />
                    </a>
                  </SwiperSlide>
                </>

                {/* Slide 4 */}
                <>
                  <SwiperSlide className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/5.png" alt="" />
                    </a>
                  </SwiperSlide>
                </>

                {/* Slide 5 */}
                <>
                  <SwiperSlide className="clients-logo">
                    <a href="#0">
                      <img src="img/clients/6.png" alt="" />
                    </a>
                  </SwiperSlide>
                </>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
