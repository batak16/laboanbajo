import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from 'react-router-dom'

function Reserve(){
    return(
        <Fragment>
            <body>
        <div className="bodyreserve">
        <Navbar />
    <div className="container">
        
        <div className="row mt-5">
        <h1 className="mt-4 reservef">Reserve</h1>
        <div className="col-3">
        <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
            <div className="card">
                
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/hotel1.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img4.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img3.jpg" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>

                <div className="card-body">
                <h5 className="card-title">Nusa Ceningan,Indonesia</h5>
                <p className="card-text">On the Beach</p>
                <p className="card-text">Apr 7-12</p>
                <p className="card-text">Rp 2.250.000/night</p>
                </div>
            </div>
            </Link>
        </div>
        

        <div className="col-3">
        <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
            <div className="card">
                
                <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/hotel2.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img5.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img6.jpg" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>

                <div className="card-body">
                <h5 className="card-title">Meruorah Komodo Labuan Bajo</h5>
                <p className="card-text">Manggarai Barat</p>
                <p className="card-text">Apr 7-12</p>
                <p className="card-text">Rp 2.325.616</p>
                </div>
            </div></Link>
        </div>

        <div className="col-3">
        <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
            <div className="card" >
                
                <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/hotel3.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img9.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img10.jpg" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>

                <div className="card-body">
                <h5 className="card-title">Sunset Hill Hotel</h5>
                <p className="card-text">Manggarai Barat, Nusa Tenggara Tim</p>
                <p className="card-text">Mei 31-7</p>
                <p className="card-text">Rp 718.000/night</p>
                </div>
            </div>
            </Link>
        </div>

        <div className="col-3">
        <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
            <div className="card" >
                
                <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/hotel4.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img11.jpg" className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/img12.jpg" className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>

                <div className="card-body">
                <h5 className="card-title">HOTEL Ayana Komodo Waecicu Beach</h5>
                <p className="card-text">Pantai Waecicu, Labuan Bajo</p>
                <p className="card-text">Mei 31-7</p>
                <p className="card-text">Rp 3.627.797/night</p>
                </div>
            </div>
            </Link>
        </div>

        </div>

        <div className="row mt-4">
        
            <div className="col-3">
            <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
                <div className="card" >
                    
                    <div id="carouselExampleCaption4" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaption4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaption4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaption4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="assets/img/hotel5.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img13.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img14.jpg" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                      </div>
    
                    <div className="card-body">
                    <h5 className="card-title">Mohini Resort</h5>
                    <p className="card-text">pantai wae cicu</p>
                    <p className="card-text">Mei 31-7</p>
                    <p className="card-text">Rp 711.711/night</p>
                    </div>
                </div>
                </Link>
            </div>
    
            <div className="col-3">
            <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
                <div className="card" >
                    
                    <div id="carouselExampleCaption5" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaption5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaption5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaption5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="assets/img/hotel6.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img15.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img16.jpg" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                      </div>
    
                    <div className="card-body">
                    <h5 className="card-title">Selini on the Hill Villas & Spa</h5>
                    <p className="card-text">On the Beach</p>
                    <p className="card-text">Mei 31-7</p>
                    <p className="card-text">Rp 683.285/night</p>
                    </div>
                </div>
                </Link>
            </div>
    
            <div className="col-3">
            <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
                <div className="card" >
                    
                    <div id="carouselExampleCaptions6" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="assets/img/hotel7.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img8.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img9.jpg" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                      </div>
    
                    <div className="card-body">
                    <h5 className="card-title">Meruorah Komodo Labuan Bajo</h5>
                    <p className="card-text">Kawasan Marina, Jl. Soekarno Hatta</p>
                    <p className="card-text">Mei 31-7</p>
                    <p className="card-text">Rp 2.285.795/night</p>
                    </div>
                </div>
                </Link>
            </div>
    
            <div className="col-3">
            <Link to="/hotel" style={{ textDecoration: 'none' , color : 'black'}}>
                <div className="card" >
                    
                    <div id="carouselExampleCaptions7" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions7" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions7" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="assets/img/hotel8.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/hotel9.jpg" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="assets/img/img7.jpg" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                      </div>
    
                    <div className="card-body">
                    <h5 className="card-title">El Ora Hotel & Eatery Labuan Bajo</h5>
                    <p className="card-text">Jl. Yohanes Sahadoen No.8</p>
                    <p className="card-text">Mei 31-7</p>
                    <p className="card-text">Rp 302.974/night</p>
                    </div>
                </div>
                </Link>
            </div>
    
            </div>

            

                <Footer />
    
</div>
</div>
</body>
        </Fragment>
    )
}

export default Reserve;