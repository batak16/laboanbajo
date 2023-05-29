import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Gallery(){
    return(
        <Fragment>
            <body>
<div className="bodygallery">
<Navbar />
    
    <div className="container">
        <div className="row gallery mt-5">
            <h1 className="galleryf mt-5">Gallery</h1>
            <div className="col-md-4">
                <img src="assets/img/img15.jpg" alt=""/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets/img/img6.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/img7.jpg" alt=""/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src="assets/img/img8.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/img16.jpg" alt=""/>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="row gallery mt-5">
            <div className="col-md-4">
                <img src="assets/img/img14.jpg" alt=""/>
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6">
                        <img src="assets/img/img10.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/img11.jpg" alt=""/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src="assets/img/img12.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/img13.jpg" alt=""/>
                    </div>
                </div>
                
            </div>
        </div>


        <Footer />
    </div>

    </div>

    <script src="https://kit.fontawesome.com/da5b4a057b.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script src="js/scripts.js"></script>
</body>
        </Fragment>
    )
}

export default Gallery;