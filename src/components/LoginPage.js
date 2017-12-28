import React,{Component} from 'react';
import '../styles/logo-nav.css';
import {userLogin} from '../services/auth';
import PropTypes from 'prop-types';
import {Redirect,Link} from 'react-router-dom';

export class LoginPage extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
		this.state = {
      loginFailed: false,
      fields: {
        email: '',
        password: ''
      }
    }
		// this.state = {
		// 	email:'',
		// 	password:''
		// }
	}
	handleLogin = (evt) => {
		evt.preventDefault();
		this.setState({
      loginFailed: false,
    })
		this.props.login(this.state.fields.email, this.state.fields.password)
		.catch(err => {
			
			this.loginFailed()
		})



		// userLogin(this.state.email,this.state.password)
		// .then(function(res){
		// 	if(res.data.success==true){
		// 		alert('Congrats ! logged in');
		// 	}
		// 	else{
		// 		alert(res.data.message);
		// 	}
		// })
	}
	onInputChange = (evt) => {
    const fields = this.state.fields
    fields[evt.target.name] = evt.target.value
    this.setState({ fields })
	}
	
	loginFailed = () => {
    this.setState({
      loginFailed: true,
      fields: {
        email: '',
        password: ''
      }
    })
  }

	render(){
		 if(this.props.loggedIn){
			return <Redirect to="/" />
		 }
		return (
			<div className="login-form">
				<h1 className="title-tab">Login</h1>
				<span className="d-block text-center already-account-text">
					Don't have an Unscrewed account? <Link to="/signup">Sign Up</Link>
				</span>
				
					{ this.state.loginFailed &&
					<div id="error_explanation" className="form-error">
						<p align='center'>Invalid email or password</p>
					</div>
					}
		
				<div className="frm-login">
						<div className="form-group">
							<input type="email" name="email" placeholder="Email Address..." onChange={this.onInputChange} value={this.state.fields.email} />
						</div>
						
						
						<div id="forgot_email" className="error hide form-error"><p>Try entering emails and clicking "Forgot Password" to see if there's an associated account.</p></div>
						<div id="forgot_password_error" className="error hide form-error"><p>Please enter email address and then click "Forgot Password".</p></div>
						<a href="#" className="forgot-link"  >Forgot email?</a>
						<div className="form-group">
							<input type="password" name="password" placeholder="Password..." onChange={this.onInputChange} value={this.state.fields.password} />
						</div>
						
						<a href="#" className="forgot-link"  >Forgot password?</a>
						<div id="forgot_password_success" className="error hide form-success"><p>Password reset instructions have been emailed to you..</p></div>
						<div id="email_error" className="error hide form-error"><p>Account do not exist with this email id.</p></div>
						<div className="form-group">
							<input type="submit" name="commit" value="Login" onClick={this.handleLogin}/>
						</div>
				</div>
				<div className="text-center fb-login-wraap">
						<div id="signin_error" className="error hide form-error"><p></p></div>
					<button type="button" className="btn btn-primary fb-login"><i className="fa fa-facebook" aria-hidden="true"></i>  Log in with Facebook</button>
				</div>
			</div>
		
		)
	}
	
}
 
LoginPage.propTypes = {
	login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
	
}
