import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container px-4">
                    <a className="navbar-brand logo text-dark" href="#page-top"><img src="assets/img/logo.png" alt=""/> BBC Travel & Tour</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" style={{ textDecoration: 'none',  }}>Home</Link></li>
                        <li className="nav-item"><Link to="/gallery" style={{ textDecoration: 'none', }}>Gallery</Link></li>
                        <li className="nav-item"><Link to="/reserve" style={{ textDecoration: 'none', }}>Reserve</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </Fragment>
    )
}

export default Navbar;