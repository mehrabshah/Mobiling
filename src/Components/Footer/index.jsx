import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
     
      <div className="footer">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-3 col-12">
              <div className="d-flex mt-5 ">
              <img src="images/footerLogo.png" alt="" />
              </div>
              <p className="mt-4">
                As an upscale and exclusive chauffeur and limousine service near
                Indonesia, we have been ensuring for more than 15 years that you
                get to your destination on time and safely.
              </p>
              <img src="images/SocialIcons.png" alt="" />
            </div>
            <div className="custom-padding  col-lg-9     col-12">
              <div className="row">
                <div className="col-4 ps-0">
                  <ul>
                    <h1 className="mt-5">Buy Vehicle</h1>
                    <li className="mt-5">Find new car</li>
                    <li className="mt-4">Current vehicle offers</li>
                    <li className="mt-4">Price lists & brochures</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <h1 className="mt-5">Purchase advice</h1>
                    <li className="mt-5">Book a test drive</li>
                    <li className="mt-4">Find a dealer near you</li>
                    <li className="mt-4">Find used vehicles</li>
                  </ul>
                </div>
                <div className="col-4">
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
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row footer-lower">
            <div className="col-3">
              <li>Copyright 2023 Mobiling Co.</li>
            </div>
            <div className="col-6">
              <div className="row justify-content-end ">
                <div className="col-4">
                  <li>Terms of Service</li>
                  </div>
                <div className="col-4">
                <li> Privacy Policy</li>
                </div>
                <div className="col-4">
                <li>  Cookies</li>
                
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <li className="row justify-content-end "> English </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
