import React from "react";

const Contact = () => {
  return (
    <>
      <div
        class="banner-header full-height valign bg-img bg-fixed contbg"
        data-overlay-dark="7"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="v-middle caption">
                <h5>Location</h5>
                <h1>
                  Contact Us <span>Get In Touch</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="arrow bounce text-center">
          <a href="contact.html#" data-scroll-nav="1" class="">
            {" "}
            <i class="ti-arrow-down"></i>{" "}
          </a>
        </div>
      </div>
      <section class="info-box section-padding pb-0" data-scroll-index="1">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="item">
                <span class="icon ti-location-pin"></span>
                <div class="cont">
                  <h5>Address</h5>
                  <p>
                    By Pacs Junction, 488 Nwaturuocha Street, Umez Eronini St,
                    Ikenegbu Layout, Owerri 460242, Imo
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
                <span class="icon ti-mobile"></span>
                <div class="cont">
                  <h5>Phone</h5>
                  <h6>
                    <a href="tel:8551004444">855 100 4444</a>
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
                <span class="icon ti-email"></span>
                <div class="cont">
                  <h5>e-Mail</h5>
                  <p>info@demires.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-padding pb-0">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="section-head mb-20">
                <div class="section-subtitle">Candóre Restaurant</div>
                <div class="section-title mb-20">Get in touch</div>
                <p>
                  You have a piece of advice or a suggestion that you would like
                  to share with us? Feel free to contact us.
                </p>
              </div>
            </div>
            <div class="col-md-6 offset-md-1">
              <div class="contact-form">
                <div class="booking-inner clearfix">
                  <form class="form1 clearfix">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Name</label>
                          <div class="input2_inner">
                            <input
                              type="text"
                              class="form-control input"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Phone</label>
                          <div class="input2_inner">
                            <input
                              type="text"
                              class="form-control input"
                              placeholder="Phone"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>e-Mail</label>
                          <div class="input2_inner">
                            <input
                              type="email"
                              class="form-control input"
                              placeholder="e-Mail"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Subject</label>
                          <div class="input2_inner">
                            <input
                              type="text"
                              class="form-control input"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="4"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div class="col-md-12 mb-30">
                        <button type="submit" class="btn-form1-submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="full-width">
          <div class="no-spacing map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.062287677658!2d7.036759283647116!3d5.490164879879297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259065b63d89f%3A0x353ea64ebbd4738f!2sDE%20MIRES%20Lounge%20and%20Bar!5e0!3m2!1sen!2sng!4v1732103543390!5m2!1sen!2sng"
              frameborder="0"
              class="google-maps"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
