import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'

function Hotel(){
    return(
        <Fragment>
            <body>
            <Navbar />

    <div className="jumbotron">
        <img src="assets/img/img1.jpg" className="img-fluid" alt="..."/>
    </div>

    <div className="container">
        <div className="mt-4">
            <span><button className="btn btn-info" disabled>Hotel</button> <i className="fa-solid fa-heart"></i><i className="fa-solid fa-heart"></i><i className="fa-solid fa-heart"></i><i className="fa-solid fa-heart"></i><i className="fa-solid fa-heart"></i><b>Terlaris #1 di Manggarai</b></span>
            <h1>Local Collection Hotel</h1>
            <span>4,3/5 (4000 Review). Komodo Manggarai Barat</span>
            <p>Mulai dari</p>
            <p>Rp. 2.250.194/malam</p>
            <Link to="/detail" style={{ textDecoration: 'none',  }}>
            <button className="btn btn-info">Pesan</button>
            </Link>
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

export default Hotel;