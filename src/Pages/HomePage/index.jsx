// HomePage.js
import React from "react";
import  './Home.css';

// import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}

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
