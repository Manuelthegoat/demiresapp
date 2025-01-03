import React from "react";

const About = () => {
  return (
    <>
      <section class="about section-padding" data-scroll-index="1">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-30">
              <div class="section-head mb-20">
                <div class="section-subtitle">Candóre Restaurant</div>
                <div class="section-title">Few Words About Us</div>
              </div>
              <p>
                Welcome to De Mires, A cozy haven where memories thrive. In our
                lounge and bar, laughter fills the air, Where every sip and bite
                is crafted with care.
              </p>
              <p>
                Wine porta laoreet ante, luctus maximus ipsum blandit eget.
                Integer mollis eniman metus, eget consequat enim commodo eduis
                id magna arcu duis nec elit praesent convallis et justo nec
                tristique sapien quis.
              </p>
              <div class="reservations">
                <div class="icon">
                  <span class="flaticon-tray-1"></span>
                </div>
                <div class="text">
                  <p>Reservation</p> <a href="tel:855-100-4444">855 100 4444</a>
                </div>
              </div>
            </div>
            <div class="col col-md-3">
              {" "}
              <img src="img/about2.jpg" alt="" class="mt-90 mb-30" />{" "}
            </div>
            <div class="col col-md-3">
              {" "}
              <img src="img/img.jpeg" alt="" />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
