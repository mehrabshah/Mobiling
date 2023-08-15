// HomePage.js
import React from "react";
import  './Home.css';
import Navbar from "../../Components/Navbar";


const HomePage = () => {
  return (
    <div>
       <div className="main-section">
      <Navbar/>
      <div className="container hero-section">
        <div className="row container align-items-bottom">
        <div className="col-md-7 radial-background">
          <h1 className="heading-hero mb-md-4 mb-2 mt-md-5 mt-2">Best Car For Your Performance</h1>
          <p className="subHeading-hero mb-md-4 mb-2">We will serve you to get dream car here easily and quickly that is reliable</p>
          <div className="search-container mb-md-5 mb-2">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
    <div className="col-md-8 ">

    <h2 className="product-heading mb-md-3 mb-2">BMW Series 3 BLUE</h2>
    <div className="mb-md-5 mb-3">

    <div className="discription d-flex justify-content-between ">
      <div>
      <h3>Base Price</h3>
      <h2>$ 41.87k</h2>
      </div>
      <div>
      <h3>Power</h3>
      <h2>365 HP</h2>
      </div>
      <div>
      <h3>Engine</h3>
      <h2>362 V6</h2>
      </div>
    </div>
    <img src="images/Group9.png" alt="" />
    </div>
        </div>
    </div>
    <div className="col-md-5 ">
      <div className="img-container">

  <div className="background-image"></div>
  <div className="circle-container">
    <img src="images/text-circle.png" alt="" />
    <img src="images/star.png" className="star-img" alt="" />
  </div>
  <img src="images/car-bmw.png" className="img-fluid car-img mb-md-5 mb-2" alt="" />
      </div>
</div>
      </div>
      </div>
     </div>
      <div className="container Social p-5">
        <h1 className="main-heading">Mobiling Social</h1>
        <div className="row box mt-4">
          <div className="box-inner">
          <div className="col-6">
            <h2>Information on data processing</h2>
            <p className="mt-3 mb-4">
              On our website we provide content from Storystream. To view this
              content, you must agree to the data processing by Storystream.
            </p>
            <button type="button" class="btn">
              Agree
            </button>
            <button type="button" class="btn ms-4">
              Information on data privacy
            </button>
          </div>
          </div>
        </div>
        <div className="row mt-5 about">
          <div className="col-6 about-inner">
            <h1>About Us</h1>
            <h2>Find out briefly but informatively</h2>
            <p>
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely. We sell in around
              Indonesia , as well as beyond to destinations throughout World.
              From the Indonesia to shuttle service, you can look forward to a
              professional team and comfort of our car service.
            </p>
          </div>
          <div className=" offset-1 col-5 small-box align-self-center">
              <div className="small-box-inner row ">
                   <div className="col-5 text-center pt-3">
                       <img src="./images/Car.png"  className="img-fluid" />
                       <p>From business to Luxuryclass</p>
                   </div>
                   <div className="offset-2 col-5 pe-3 text-center">
                   <img src="./images/location.png" className="img-fluid"></img>
                       <p>125 Location in Indonesia</p>
                   </div>
                   <div className="col-5 text-center">
                   <img src="./images/screen.png" className="img-fluid"></img>
                       <p>Convenient Online Book</p>
                   </div>
                   <div className="offset-2 col-5 text-center">
                   <img src="./images/Clock.png" className="img-fluid"></img>
                       <p>24/7 Exclusive On the road</p>
                   </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
