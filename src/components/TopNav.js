import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
 } from 'react-router-dom';
import logo from '../images/unscrewed_logo.svg';

export const TopNav = () => {
	return (
		<header>
		  <div className="container-fluid landing-header-menu fixed-top">
		      <div className="row">
		          <div className="container">
		              <div className="row">
		                  <div className="col-12 d-flex flex-row align-items-center justify-content-between pt-15 pb-15">
		                      <a href="../index.html" className="logo">
		                          <img src={logo} className="img-fluid" alt="Unscrewed Logo" />
		                      </a>
		                      <div className="d-flex justify-content-center">
		                          <a href="../index.html" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">App</a>
		                          <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize active">Explorer</a>
		                          <a href="../blog/index.html" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Blog</a>
		                      </div>
		                      <div className="d-flex flex-row align-items-center justify-content-end">
		                          <div className="dropdown">
		                              <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jonathon Smith</a>
		                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
		                                  <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">My Account</a>
		                                  <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Logout</a>
		                              </div>
		                          </div>
		                          
		                          <NavLink className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize" to={{ pathname: "/login" }}>Login</NavLink>
		                          <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize text-nowrap active">
		                              <i className="zmdi zmdi-shopping-cart mr-10" aria-hidden="true"></i>
		                              Cart empty
		                          </a>
		                      </div>
		                  </div>
		              </div>
		          </div>
		      </div>
		  </div>
		</header>
	)
}
