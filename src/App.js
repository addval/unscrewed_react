import React, { Component } from 'react';
import {
  Route,
  Switch,Redirect
 } from 'react-router-dom';
import PropTypes from 'prop-types';
import {TopNav} from './components/TopNav.js'
import {ExplorerLandingPage} from './components/ExplorerLandingPage.js'
import {ExplorerPage} from './components/ExplorerPage.js'
import {LoginPage} from './components/LoginPage.js'
import {SignupPage} from './components/SignupPage.js'
import {Footer} from './components/Footer.js'
import RouteWithProps from './components/router/RouteWithProps'
import * as authentication from './services/auth';

class App extends Component {
	constructor(props){
		super(props)
		let authState = authentication.getAuthState()
    this.state = {
      auth: {
        loggedIn: authState.userToken !== null,
        username: authState.username,
        userToken: authState.userToken
      }
		}
		 
	}
	

	getChildContext () {
    return {
      auth: {
        loggedIn: this.state.auth.loggedIn,
        username: this.state.auth.username,
        userToken: this.state.auth.userToken
      }
    }
  }

	login=(email, password)=>{
		console.log(this);
		let _this = this;
		return authentication.userLogin(email, password)
				.then(function(res){
					console.log(res);
					if(res.data.success==true){
					console.log(_this);
		
						_this.setState({
							auth: {
								..._this.state.auth,
								loggedIn: true,
								username: res.data.user.email,
								userToken: res.data.user.auth_token
							}
						})
						localStorage.setItem('userToken', res.data.user.auth_token)
						localStorage.setItem('username', res.data.user.email)
					}
					else{
						_this._logout()
						return Promise.reject(res.data.message)
						alert(res.data.message);
					}
				})
        .catch(err => {
          _this._logout()
          return Promise.reject(err)
        })
	}
	
	signup = (email, password)=>{
		console.log(this);
		let _this = this;
		return authentication.userSignup(email, password)
				.then(function(res){
					console.log(res);
					if(res.data.success==true){
					console.log(_this);
						_this.setState({
							auth: {
								..._this.state.auth,
								loggedIn: true,
								username: res.data.user.email,
								userToken: res.data.user.auth_token
							}
						})
						localStorage.setItem('userToken', res.data.user.auth_token)
						localStorage.setItem('username', res.data.user.email)
					}
					else{
						_this._logout()
						return Promise.reject(res.data.message)
						alert(res.data.message);
					}
				})
        .catch(err => {
          _this._logout()
          return Promise.reject(err)
        })
	}



	logout = () => {
		 
    return authentication.logout().then(result => {
			this._logout();
			 
    })
	}
	_logout =  () => {
    this.setState({
      auth: {
        ...this.state.auth,
        loggedIn: false,
        username: null,
        userToken: null,
      }
    })
  }

  render() {
		console.log(this.props)
    return (
    	<div>
		  	<TopNav logout={this.logout}/>
		  	<Switch>
				  <Route exact path='/' component={ExplorerLandingPage}/>
				  <Route path='/explorer' component={ExplorerPage}/>
				  <RouteWithProps path='/login' component={LoginPage} props={{ login: this.login,loggedIn:this.state.auth.loggedIn }} />
				  <RouteWithProps path='/signup' component={SignupPage} props={{ signup: this.signup,loggedIn:this.state.auth.loggedIn }} />
				</Switch>
				<Footer />
			</div>
    );
  }
}

App.childContextTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool,
    username: PropTypes.string,
    userToken: PropTypes.string 
  })
}


export default App;
