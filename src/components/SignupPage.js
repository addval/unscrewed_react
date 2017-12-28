import React,{Component} from 'react';
import '../styles/logo-nav.css';
import {userLogin} from '../services/auth';
import PropTypes from 'prop-types';
import {Redirect,Link} from 'react-router-dom';

export class SignupPage extends Component{
	constructor(props){
		super(props);
		console.log(this.props)
		this.state = {
      signupFailed: false,
      fields: {
        email: '',
        password: ''
      }
    }
	 
	}
	handleSignup = (evt) => {
		evt.preventDefault();
		this.setState({
      signupFailed: false,
    })
		this.props.signup(this.state.fields.email, this.state.fields.password)
		.catch(err => {
			this.signupFailed()
		})


 
	}
	onInputChange = (evt) => {
    const fields = this.state.fields
    fields[evt.target.name] = evt.target.value
    this.setState({ fields })
	}
	
	signupFailed = () => {
    this.setState({
      signupFailed: true,
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
				<h1 className="title-tab">Create account</h1>
				<span className="d-block text-center already-account-text">
					Already have an Unscrewed account? <Link to="/login">Log In</Link>
				</span>
				
				 
		
				<div className="frm-login">
						<div className="form-group">
							<input type="email" name="email" placeholder="Email Address..." onChange={this.onInputChange} value={this.state.fields.email} />
						</div>

						<div className="form-group">
							<input type="password" name="password" placeholder="Password..." onChange={this.onInputChange} value={this.state.fields.password} />
						</div>
						
						<div id="email_error" className="error hide form-error"><p>Account do not exist with this email id.</p></div>
						<div className="form-group">
							<input type="submit" name="commit" value="Create Account" onClick={this.handleSignup}/>
						</div>
				</div>
				<div className="text-center fb-login-wraap">
						<div id="signin_error" className="error hide form-error"><p></p></div>
					<button type="button" className="btn btn-primary fb-login"><i className="fa fa-facebook" aria-hidden="true"></i>  Create with Facebook</button>
				</div>
			</div>
		
		)
	}
	
}
 
SignupPage.propTypes = {
	signup: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
	
}
