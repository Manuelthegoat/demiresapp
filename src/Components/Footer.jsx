import React from 'react'

const Footer = () => {
  return (
    <>
         <footer class="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-column footer-about">
                            <h3 class="footer-title">About Us</h3>
                            <p class="footer-about-text">Restaurant metus dibus eudui aolicitudin istique lacus in the vestibulum congue est vitae maximus duru ne lacus in massa tristique aharetra ne ut isum.</p>
                          
                        </div>
                    </div>
                    <div class="col-md-3 offset-md-1">
                        <div class="footer-column footer-contact">
                            <h3 class="footer-title">Contact Info</h3>
                            <p class="footer-contact-text">488 Nwaturuocha avenue By Pacs Junction Mcc Road IKenegbu Layout
                                <br/>Owerri, Nigeria
                            </p>
                            <div class="footer-contact-info">
                                <p class="footer-contact-phone">855 100 4444</p>
                                <p class="footer-contact-mail">info@demires.com</p>
                            </div>
                            <div class="footer-about-social-list"> <a href="#"><i class="ti-instagram"></i></a> <a href="#"><i class="ti-twitter"></i></a> <a href="#"><i class="ti-youtube"></i></a> <a href="#"><i class="ti-facebook"></i></a> <a href="#"><i class="ti-pinterest"></i></a> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-column footer-explore clearfix">
                            <h3 class="footer-title">Subscribe</h3>
                            <div class="row subscribe">
                                <div class="col-md-12">
                                    <p>Want to be notified when we host a new event or an udpate. Just sign up and we'll send you a notification by email.</p>
                                    <form>
                                        <input type="text" name="search" placeholder="Your email" required/>
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="footer-bottom-inner">
                            <p class="footer-bottom-copy-right">© Copyright 2024 by <a href="#">0xmtg.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer