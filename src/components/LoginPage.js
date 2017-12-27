import React,{Component} from 'react';
import '../styles/logo-nav.css';
import {userLogin} from '../services/auth';

export class LoginPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
	handleLogin = (evt) => {
		evt.preventDefault();
		userLogin(this.state.email,this.state.password)
		.then(function(res){
			if(res.data.success==true){
				alert('Congrats ! logged in');
			}
			else{
				alert(res.data.message);
			}
		})
	}
	render(){
		return (
			<div>
				<h1 className="title-tab">Login</h1>
				<span className="d-block text-center already-account-text">
					Don't have an Unscrewed account?  <a href="#">Sign Up</a>
				</span>
				
			
					<div id="error_explanation" className="form-error hide">
						<p align='center'>Alert text</p>
					</div>
		
				<div className="frm-login">
						<div className="form-group">
							<input type="email" placeholder="Email Address..." onChange={(evt)=>this.setState({email:evt.target.value})} />
						</div>
						
						
						<div id="forgot_email" className="error hide form-error"><p>Try entering emails and clicking "Forgot Password" to see if there's an associated account.</p></div>
						<div id="forgot_password_error" className="error hide form-error"><p>Please enter email address and then click "Forgot Password".</p></div>
						<a href="#" className="forgot-link"  >Forgot email?</a>
						<div className="form-group">
							<input type="password" placeholder="Password..." onChange={(evt)=>this.setState({password:evt.target.value})}/>
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
