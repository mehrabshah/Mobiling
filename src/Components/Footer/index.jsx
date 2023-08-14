import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="d-flex ">
              <img />
              <div>
                <h1>Mobiling</h1>
                <h2>Automobile</h2>
              </div>
            </div>
            <p>
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </p>

          </div>
          <div className="col-3">
            <ul>
               <h1>Buy Vehicle</h1>
               <li>Find new car</li>
               <li>Current vehicle offers</li>
               <li>Price lists & brochures</li>
            </ul>
          </div>
          <div className="col-3">
          <ul>
               <h1>Purchase advice</h1>
               <li>Book a test drive</li>
               <li>Find a dealer near you</li>
               <li>Find used vehicles</li>
            </ul>


          </div>
          <div className="col-3">
          <ul>
               <h1>Customer Service</h1>
               <li>Current service offers</li>
               <li>Online service campaign VIN-checker</li>
               <li>5 Year staf service</li>
               <li>24h roadside assitance</li>
               <li>New and events</li>
               <li>Press relase</li>
            </ul>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Footer;
