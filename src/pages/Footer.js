import React, { Fragment } from 'react';

function Footer(){
    return(
        <Fragment>
            <footer className="py-5">
              <h3 className="mb-4 mt-4">Contact Us</h3>
              <div className="row">
                <div className="col-6 col-md-2 mb-3">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Most calendars are designed 
                      for teams. Slate is designed 
                      for freelancers</a></li>
                    <li className="nav-item mb-2">
                      <ul className="list-unstyled d-flex">
                        <li className="ms-1"><a className="link-dark" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="ms-4"><a className="link-dark" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className="ms-4"><a className="link-dark" href="#"><i className="fa-brands fa-google"></i></a></li>
                        <li className="ms-4"><a className="link-dark" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
          
                <div className="col-6 col-md-2 mb-3">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><i className="fa-solid fa-location-dot"></i><p>Jalan Perkasa sejahtera no 123, Serpong Kab.Tangerang</p></li>
                    <li className="nav-item mb-2"><i className="fa-solid fa-mobile-notch"></i><p>(021) 441-571</p></li>
                    <li className="nav-item mb-2"><i className="fa-regular fa-envelope"></i><p>BBCTour@gmail.com</p></li>
                  </ul>
                </div>
          
                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Have a Problem??</h5>
                    <p>Click Link Down Below and Contact Us</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Message to CS1</button>
                      <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Message to CS2</button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send your Messages</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label for="recipient-name" className="col-form-label">Your Name:</label>
                          <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                          <label for="message-text" className="col-form-label">Your Email:</label>
                          <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        <div className="mb-3">
                          <label for="message-text" className="col-form-label">Your Message:</label>
                          <textarea className="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                     <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Send message</button>
                      </div>
                    </div>
                  </div>
                </div>
                    </div>
                  </form>
                </div>
              </div>
          
              <div className="row d-flex flex-column flex-sm-row justify-content-between mt-4 pt-5 border-top">
                <div className="col-6">
                  <p>Kebijakan Cookie   |   Kebijakan Privasi</p>
                </div>

                <div className="col-6">
                  <p>Website Ini di buat untuk mengenalkan Labuan Bajo ke wisatawan lokal maupun internasional tentang The Wonderful of Labuan bajo yang memberikan destinasi-destinasi menarik yang dapat anda kunjungi untuk menikmati keindahan dari Labuan Bajo</p>
                </div>
              </div>
            </footer>
        </Fragment>
    )
}

export default Footer;