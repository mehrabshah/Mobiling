import React from 'react';
import './navbar.css'
function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/"><img src='images/brandLogo.png' alt="Brand Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-2 me-md-3">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown me-2 me-md-3"> {/* Service Dropdown */}
              <a className="nav-link dropdown-toggle" href="/" id="serviceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service
              </a>
              <div className="dropdown-menu" aria-labelledby="serviceDropdown">
                <a className="dropdown-item" href="/">Service 1</a>
                <a className="dropdown-item" href="/">Service 2</a>
                <a className="dropdown-item" href="/">Service 3</a>
              </div>
            </li>
            <li className="nav-item dropdown me-2 me-md-3"> {/* Product Dropdown */}
              <a className="nav-link dropdown-toggle" href="/" id="productDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Product
              </a>
              <div className="dropdown-menu" aria-labelledby="productDropdown">
                <a className="dropdown-item" href="/">Product 1</a>
                <a className="dropdown-item" href="/">Product 2</a>
                <a className="dropdown-item" href="/">Product 3</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Testimonial</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto"> {/* Right-aligned ul */}
            <li className="nav-item">
              <button className="btn btn-primary signIn-btn">Sign In</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
