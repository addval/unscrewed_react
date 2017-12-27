import React from 'react';
 
export const LoginPage = () => {
	return (
		<div>
			<h1 className="title-tab">Login</h1>
			<span className="d-block text-center already-account-text">
				Don't have an Unscrewed account?  <a href="#">Sign Up</a>
			</span>
			
		
				<div id="error_explanation" className="form-error">
					<p align='center'>Alert text</p>
				</div>
	
			<div className="frm-login">
					<input type="email" placeholder="Email Address..."/>
					
					<div id="forgot_email" className="error hide form-error"><p>Try entering emails and clicking "Forgot Password" to see if there's an associated account.</p></div>
					<div id="forgot_password_error" className="error hide form-error"><p>Please enter email address and then click "Forgot Password".</p></div>
					<a href="#" className="forgot-link" onclick="forgot_email();">Forgot email?</a>
					<input type="password" placeholder="Password..."/>
					<a href="#" className="forgot-link" onclick="forgot_password();">Forgot password?</a>
					<div id="forgot_password_success" className="error hide form-success"><p>Password reset instructions have been emailed to you..</p></div>
					<div id="email_error" className="error hide form-error"><p>Account do not exist with this email id.</p></div>
				
			</div>
			<div className="text-center fb-login-wraap">
					<div id="signin_error" className="error hide form-error"><p></p></div>
				 <button type="button" className="btn btn-primary fb-login"><i className="fa fa-facebook" aria-hidden="true"></i>  Log in with Facebook</button>
			</div>
		</div>
		
	)
}
