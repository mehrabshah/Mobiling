import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container p-5">
        <div className="d-flex flex-lg-row flex-column justify-content-between">
          <div className="col-lg-3 col-12">
            <div className="d-flex mt-5 ">
              <img />
              <div>
                <h1>Mobiling</h1>
                <h2>Automobile</h2>
              </div>
            </div>
            <p className="mt-4">
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </p>

          </div>
        
        {/* <div className="d-flex justify-content-between">
         
          <div className="ms-lg-5 ms-0 me-5">
            <ul>
               <h1 className="mt-5">Buy Vehicle</h1>
               <li className="mt-5">Find new car</li>
               <li className="mt-4">Current vehicle offers</li>
               <li className="mt-4">Price lists & brochures</li>
            </ul>
          </div>
          <div className="ms-5 me-5">
          <ul>
               <h1 className="mt-5">Purchase advice</h1>
               <li className="mt-5">Book a test drive</li>
               <li className="mt-4">Find a dealer near you</li>
               <li className="mt-4">Find used vehicles</li>
            </ul>


          </div>
          <div className="ms-5">
          <ul>
               <h1 className="mt-5">Customer Service</h1>
               <li className="mt-5">Current service offers</li>
               <li className="mt-4 ">Online service</li>
               <li className="mt-2 ">campaign VIN-checker</li>               
               <li className="mt-4">5 Year staf service</li>
               <li className="mt-4">24h roadside assitance</li>
               <li className="mt-4">New and events</li>
               <li className="mt-4">Press relase</li>
            </ul>
          </div>
          
        
        </div> */}




        </div>
         <hr/>
         <ul className="d-flex footer-lower justify-content-between ps-0">
            <li className="flex-item">
            Copyright 2023 Mobiling Co.
            </li>
            <ul className="fle-item d-flex justify-content-between">
              <li className="ms-5 me-5">Terms of Service</li>
              <li className="ms-5 me-5">Privacy Policy</li>
              <li className="ms-5 me-5">Cookies</li>
            </ul>
            <li className="flex-item">
                English 
            </li>
         </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
