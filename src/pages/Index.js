import React, { Fragment } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Index(){
    return(
        <Fragment>
            
  <div className="bodyindex">
        <Navbar />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="assets/img/img4.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h2>Welcome To Labuan Bajo</h2>
                  </div>
              </div>
              <div className="carousel-item">
                <img src="assets/img/img2.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Taman Nasional Komodo di Labuan Bajo menawarkan pemandangan alam yang menakjubkan dan juga adanya komodo, hewan yang dilindungi. </h2>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/img/img3.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Keindahan Labuan Bajo yang natural, dari sisi pulaunya, pantainya sampai keindahan laut yang beragam</h2>
                </div>
              </div>
            </div>
          </div>
        
        <div className="container">
            <section>
              <div className="row mt-5">
                  <div className="col">
                      <h2>About Laboan Bajo</h2>
                      <p>Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia bagian timur. Desa ini terletak di Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur yang berbatasan langsung dengan Nusa Tenggara Barat dan dipisahkan oleh Selat Sape. Labuan Bajo adalah salah satu dari lima Destinasi Super Prioritas yang sedang dikembangkan di Indonesia. Nama Labuan Bajo terdiri dari 2 kata, Labuan yang memiliki arti tempat berlabuh dan Bajo yang diambil dari nama Suku Bajo, suku dari Sulawesi yang bermukim di pesisir barat Flores. Labuan Bajo awalnya merupakan pemukiman Suku Bajo, yang sekarang sekarang hidup berdampingan dengan warga asli Flores.
                        Bersantai atau Berpetualang? Semua Ada Labuan Bajo, tidak hanya populer dengan destinasi wisata Taman Nasional Komodo. Kota dengan pemandangan matahari terbenam memukai ini memiliki banyak objek wisata. Di kawasan ini, pengunjung dapat menikmati paket komplit, mulai dari wisata bahari, destinasi dataran yang indah hingga menikmati pemandangan dari atas bukit yang mengagumkan.</p>
                  </div>
                  <div className="col aboutlajo pt-4">
                      <img src="assets/img/img1.jpg" alt=""/>
                      <img src="assets/img/img2.jpg" alt=""/>
                      <img src="assets/img/img3.jpg" alt=""/>
                      <img src="assets/img/img4.jpg" alt=""/>
                  </div>
              </div>
          </section>

          <div id="AboutUs">
            <div className="aboutus">
              <h1 className="text-center mt-5">About Us</h1><br/><br/>
                  <div className="row ">
                    

                    <div className="column col-3">
                      <img src="assets/img/foto2.jpg" alt="Mike" />
                      <h2>Mitchel Ivano</h2>
                      <p>Advisor</p>
                    </div>

                    <div className="column col-3">
                      <img src="assets/img/foto3.jpg" alt="John" />
                      <h2>Athar Rizky</h2>
                      <p>Administrator</p>
                    </div>

                    <div className="column col-3">
                      <img src="assets/img/foto1.jpg" alt="Jane" />
                      <h2>Dwiky Andika</h2>   
                      <p>CEO</p>
                    </div>

                    <div className="column col-3">
                      <img src="assets/img/foto4.jpg" alt="John" />
                      <h2>Kevin Joe</h2>
                      <p>Designer</p>
                    </div>
                  </div>
            </div>
          </div>
          
          <div id="googleMap"></div>

          <Footer />
            
          

        </div>
      </div>  

    <script src="https://kit.fontawesome.com/da5b4a057b.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script src="js/scripts.js"></script>
  
        </Fragment>
    )
}

export default Index;