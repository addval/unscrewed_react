import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
 } from 'react-router-dom';
import image_logo from '../images/unscrewed_logo.svg';

export const TopNav = () => {
	return (
		<header>
		  <div class="container-fluid landing-header-menu fixed-top">
		      <div class="row">
		          <div class="container">
		              <div class="row">
		                  <div class="col-12 d-flex flex-row align-items-center justify-content-between pt-15 pb-15">
		                      <a href="../index.html" class="logo">
		                          <img src={image_logo} class="img-fluid" alt="Unscrewed Logo" />
		                      </a>
		                      <div class="d-flex justify-content-center">
		                          <a href="../index.html" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">App</a>
		                          <a href="#" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize active">Explorer</a>
		                          <a href="../blog/index.html" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Blog</a>
		                      </div>
		                      <div class="d-flex flex-row align-items-center justify-content-end">
		                          <div class="dropdown">
		                              <a href="#" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Jonathon Smith</a>
		                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		                                  <a href="#" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">My Account</a>
		                                  <a href="#" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Logout</a>
		                              </div>
		                          </div>
		                          
		                          <NavLink className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize" to={{ pathname: "/login" }}>Login</NavLink>
		                          <a href="#" class="landing-header-menu-item d-flex flex-row align-items-center text-capitalize text-nowrap active">
		                              <i class="zmdi zmdi-shopping-cart mr-10" aria-hidden="true"></i>
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
