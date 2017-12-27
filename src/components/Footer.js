import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
 } from 'react-router-dom';
 
export const Footer = () => {
	return (
		<footer>
      <div class="container-fluid landing-footer">
          <div class="row">
              <div class="container">
                  <div class="row justify-content-sm-between">
                      <div class="col-12 col-md-6">
                          <p class="text-center text-md-left">Copyright &copy; 2017. All rights reserved.</p>
                      </div>
                      <div class="col-12 col-md-6 d-flex flex-row align-items-center justify-content-center justify-content-md-end">
                          <a href="../contact-us/index.html" class="landing-footer-menu-item d-flex flex-row align-items-center">Contact Us</a>
                          <a href="../terms/index.html" class="landing-footer-menu-item d-flex flex-row align-items-center">Terms</a>
                          <a href="../privacy/index.html" class="landing-footer-menu-item d-flex flex-row align-items-center">About</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
	)
}