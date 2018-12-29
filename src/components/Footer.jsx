import React, { Component } from 'react';

function Footer({ children }) {
    return (
            <footer id="contact" className="footer action-lage bg-black p-top-80" >
                <div className="container">
                    <div className="row">
                        <div className="widget_area">
                            <div className="col-md-3">
                                <div className="widget_item widget_about">
                                    <h5 className="text-white">About Us</h5>
                                    <p className="m-top-20">Platform pemilihan langsung berbasis online yang mengedepankan prinsip transparansi dan rahasia didukung dengan teknologi blockchain.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="widget_item widget_latest sm-m-top-50">
                                    <h5 className="text-white">Location</h5>
                                    <div className="widget_latst_item m-top-30">
                                      <div className="widget_ab_item m-top-30">
                                          <div className="item_icon"><i className="fa fa-location-arrow"></i></div>
                                          <div className="widget_ab_item_text">
                                              <p>Tembalang, Jl Sukun Raya 23</p>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="widget_item widget_service sm-m-top-50">
                                    <h5 className="text-white">Phone</h5>
                                    <div className="widget_ab_item m-top-30">
                                        <div className="item_icon"><i className="fa fa-phone"></i></div>
                                        <div className="widget_ab_item_text">
                                            <p>+6234901234</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="widget_item widget_newsletter sm-m-top-50">
                                    <h5 className="text-white">Email Address</h5>
                                    <div className="widget_ab_item m-top-30">
                                        <div className="item_icon"><i className="fa fa-envelope-o"></i></div>
                                        <div className="widget_ab_item_text">
                                            <p>pakeko86@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>{/*end of widget_area*/}
                    </div>{/*end of row*/}
                </div>{/* end of container */}
                <div className="main_footer fix bg-mega text-center p-top-40 p-bottom-30 m-top-80">
                    <div className="col-md-12">
                        <p className="wow fadeInRight" data-wow-duration="1s">
                            &copy; 2018 All Rights Reserved
							            <br/> Designed &amp; Developed by <a href="myvote.id">myvote.id</a></p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
