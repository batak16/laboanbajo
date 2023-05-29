import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Detail(){
    return(
        <Fragment>
            <div className="bodydetail">
            <Navbar />
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/img/img4.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          
          <div className="container">
            <p className="mt-5"><b>Kota Manggarai</b></p>
            <h1>Data Pemesanan</h1>
            <form>
            <div className="row">
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Nama Pemesan</label>
                    <input type="text" class="form-control" id="exampleInputtext1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputPassword1" class="form-label">Tanggal Booking</label>
                    <input type="number" class="form-control" id="exampleInputnumber1" aria-describedby="emailHelp"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputPassword1" class="form-label">Tipe Kamar</label>
                    <input type="text" class="form-control" id="exampleInputtext1"/>
                </div>
            </div>
            <div className="row">
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputEmail1" class="form-label">Nomor Handphone</label>
                    <input type="number" class="form-control" id="exampleInputtext1"/>
                </div>
                <div className="col-6 mb-3 mt-3">
                    <label for="exampleInputPassword1" class="form-label">Total</label>
                    <input type="number" class="form-control" id="exampleInputtext1"/>
                </div>
            </div>
                <button type="submit" class="btn btn-primary text-white mt-3 mb-5" style={{ float : 'right'  }}>Pesan</button>
            </form>
            </div>
        </div>

            
        </Fragment>
    )
}

export default Detail;