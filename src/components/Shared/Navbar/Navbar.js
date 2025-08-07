import React from 'react';
import { useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  const isOurClassesPage = location.pathname === '/classes';
  const isAdvancedGymPage = location.pathname === '/advanced-gym';
  const isPricingPage = location.pathname === '/pricing';


  // If you want to apply different styles or logic based on the page, you can do it here
  // For example, you can conditionally render different classes or styles
  let navbarItemClass = "nav-link text-white mx-2";
  let navbarItemClassPricing = "nav-link text-white mx-2";
  if (isOurClassesPage || isAdvancedGymPage) {
    navbarItemClass = "nav-link text-warning mx-2"; // Add active class if on Our Classes page
  }
   if (isPricingPage) {
    navbarItemClassPricing = "nav-link text-warning mx-2"; // Add active class if on Pricing page
  }
    return (
        <nav  className="navbar navbar-expand-lg text-white ">
  <div className="container-fluid text-white">
    <a className="navbar-brand ms-5 text-white" href="/">POWER <span style={{color: 'orange'}}>X</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white justify-content-end " id="navbarNav">
      <ul className="navbar-nav nav text-white ">
        <li className="nav-item mx-2">
          <a className="nav-link text-white  active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-2" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className={navbarItemClass} href="/classes">Our Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-2" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-2" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className={navbarItemClassPricing} href="/pricing">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white mx-2 me-5" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;