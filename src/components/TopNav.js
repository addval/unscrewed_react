import React from 'react';
import {
  NavLink
 } from 'react-router-dom';
 import PropTypes from 'prop-types'

export const TopNav = ({logout},context) => {
	return (
		<header>
		  <div className="container-fluid landing-header-menu fixed-top">
		      <div className="row">
		          <div className="container">
		              <div className="row">
		                  <div className="col-12 d-flex flex-row align-items-center justify-content-between pt-15 pb-15">
                        <NavLink className="logo" to={{ pathname: "/" }}>
                          <img src={require('../images/unscrewed_logo.svg')} className="img-fluid" alt="Unscrewed Logo" />
                        </NavLink>
                        
		                      <div className="d-flex justify-content-center">
		                          <a href="../index.html" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">App</a>
		                          <NavLink className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize active" to={{ pathname: "/explorer" }}>Explorer</NavLink>
		                          <a href="../blog/index.html" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Blog</a>
		                      </div>
		                      <div className="d-flex flex-row align-items-center justify-content-end">
		                        { context.auth.loggedIn &&
								  <div className="dropdown">
		                              <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{context.auth.username}</a>
		                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
		                                  <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">My Account</a>
		                                  <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize">Logout</a>
		                              </div>
		                          </div>
								}
		                          {
									!context.auth.loggedIn &&
									<NavLink className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize" to={{ pathname: "/login" }}>Login</NavLink>
								  }
								  { context.auth.loggedIn &&
									<a href="#" onClick={logout} className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize text-nowrap">
		                               
		                              Logout
		                          </a>
								  }
								  
		                          {/* <a href="#" className="landing-header-menu-item d-flex flex-row align-items-center text-capitalize text-nowrap active">
		                              <i className="zmdi zmdi-shopping-cart mr-10" aria-hidden="true"></i>
		                              Cart empty
		                          </a> */}
		                      </div>
		                  </div>
		              </div>
		          </div>
		      </div>
		  </div>
		</header>
	)
}
TopNav.contextTypes = {
	auth: PropTypes.shape({
		loggedIn: PropTypes.bool,
		username: PropTypes.string
	})
}
  
  TopNav.propTypes = {
	logout: PropTypes.func
  }
  
