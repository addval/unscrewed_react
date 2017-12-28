import React from 'react';
import {UpperFooter} from './UpperFooter.js'
 
export const ExplorerPage = () => {
	return (
		<div>
			<div className="tabs-animated pt-50">
				<div className="breadcumb">
					<div className="container">
						<ul className="nav nav-tabs list-inline mx-auto justify-content-center" role="tablist">
							<li role="presentation" className="active list list-inline-item" id="tab-menu-1">
								<a href="#tab1"  className="nav-tabbed nav-tabbed" aria-controls="tab1" role="tab" data-toggle="tab">
									<div className="img">
										
										<img src={require('../images/Cheers2.png')} />
									</div>
									<h1>Wine Type</h1>
								</a>
							</li>
							<li role="presentation" className="list arrow active list-inline-item" id="tab-menu-2">
									<div className="img arrowcontainer">
										<img src={require('../images/arrow.png')} className="img-fluid" />
									</div>
							</li>
							<li role="presentation" className="list list-inline-item" id="tab-menu-3">
								<a href="#tab2"  className="nav-tabbed nav-tabbed" aria-controls="tab2" role="tab" data-toggle="tab">
									<div className="img">
										<img src={require('../images/Cal2.png')} />
									</div>
									<h1 >Frequency</h1>
								</a>
							</li>
							<li role="presentation" className="list arrow list-inline-item" id="tab-menu-4">
									<div className="img arrowcontainer">
										<img src={require('../images/arrow.png')} className="img-fluid" />
									</div>
							</li>
							<li role="presentation" className="list list-inline-item" id="tab-menu-5">
								<a href="#tab3" className="nav-tabbed nav-tabbed" aria-controls="tab3" role="tab" data-toggle="tab">
									<div className="img">
										<img src={require('../images/Me2.png')}  />
									</div>
									<h1 >Account</h1>
								</a>
							</li>
							<li role="presentation" className="list arrow list-inline-item" id="tab-menu-6">
									<div className="img arrowcontainer">
										<img src={require('../images/arrow.png')} className="img-fluid" />
									</div>
							</li>
							<li role="presentation" className="list list-inline-item" id="tab-menu-7">
								<a href="#tab4" className="nav-tabbed nav-tabbed" aria-controls="tab4" role="tab" data-toggle="tab">
									<div className="img">
										<img src={require('../images/cart.png')}  />
									</div>
									<h1 >Checkout</h1>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="container checkout-form-wrap">
					<div className="tab-content">
						<div role="tabpanel" className="tab-pane fade in active first-tab" id="tab1">
							<h1 className="title-tab">Choose your wine types</h1>
							<div className="row form-group product-chooser">
		
								<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="3-reds">
										<div className="winecontainer">
											<img src={require('../images/bootle1.png')} className="img-fluid col-xs-4 col-sm-4 col-md-12 col-lg-12" alt="Mobile and Desktop" />
										</div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">3 reds</span>
											<input type="radio" name="product" value="wine" />
										</div>
										<div className="clear"></div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="3-white">
										<div className="winecontainer">
										<img src={require('../images/bootle2.png')} className="img-fluid col-xs-4 col-sm-4 col-md-12 col-lg-12" alt="Mobile and Desktop" />
									</div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">3 whites</span>
											<input type="radio" name="product" value="wine" />
										</div>
										<div className="clear"></div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="2-red">
										<div className="winecontainer">
										<img src={require('../images/bootle3.png')} className="img-fluid col-xs-4 col-sm-4 col-md-12 col-lg-12" alt="Mobile and Desktop" />
									</div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">2 reds, 1 white</span>
											<input type="radio" name="product" value="wine" checked="checked" />
										</div>
										<div className="clear"></div>
									</div>
								</div>

								<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="2-white">
										<div className="winecontainer">
										<img src={require('../images/bootle4.png')} className="img-fluid col-xs-4 col-sm-4 col-md-12 col-lg-12" alt="Mobile and Desktop" />
									</div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">2 whites, 1 reds</span>
											<input type="radio" name="product" value="mobile_desktop" checked="checked" />
										</div>
										<div className="clear"></div>
									</div>
								</div>
								<div className="clearfix"></div>
								<div className="col-md-12">
									<a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab" className="nav-tabbed btn btn-black-next">Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade in first-tab freq" id="tab2">
							<h1 className="title-tab">Choose how often</h1>
							<div className="row form-group product-chooser">
								<div></div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="1-mo">
										<div className="mt-img-choose1"></div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">One month only</span>
											<span className="subtitle">3 bottles total</span>
											<input type="radio" name="freq" value="wine" />
										</div>
										
									</div>
								</div>
								<div className="clear"></div>

								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="2-mo">
										<div className="mt-img-choose2"></div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">Monthly</span>
											<span className="subtitle">3 bottles per month</span>
											<input type="radio" name="freq" value="wine" />
										</div>
										
									</div>
								</div>
								<div className="clear"></div>

								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 row-eq-height">
									<div className="product-chooser-item" id="3-mo">
										<div className="mt-img-choose3"></div>
										<div className="col-xs-8 col-sm-8 col-md-12 col-lg-12">
											<span className="title">Every 2 months</span>
											<span className="subtitle">3 bottles every other month</span>
											<input type="radio" name="freq" value="wine" checked="checked" />
										</div>
										
									</div>
								</div>
								<div className="clear"></div>

								<div className="clearfix"></div>
								<div className="col-md-12">
									<a href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab" className="nav-tabbed btn btn-black-back"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back</a>
									<a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab" className="nav-tabbed btn btn-black-next">Next <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade in first-tab" id="tab3">
							<h1 className="title-tab">Create an account</h1>
							<div className="frm-login">
								<input type="text" name="" id="email-login" placeholder="Email Address..." />
								<input type="text" name="" id="password-login" placeholder="Password..." />
								<button className="btn">Create Account</button>
								<span>Already have an account?</span>
								<a className="nav-tabbed btn login" id="login-click" href="#tab4" aria-controls="tab3" role="tab" data-toggle="tab">Log In</a>
								<a href="" className="guest" id="checkout-guest">Check out as a Guest</a>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade in checkout-form cart-view" id="tab4">
							<h1 className="title-tab">Check Out</h1>

							<div className="col-lg-4 col-md-12 pull-right side-menu">
								<div className="col-md-12 pull-left no-padding">
									<h1 className="checkout-title">In Your Cart</h1>
								</div>
								<div className="col-md-12 pull-left bg-gray">
									<div className="col-md-6 pull-left no-padding">
										<div className="black-box">&nbsp;</div>
									</div>
									<div className="col-md-6 pull-left no-padding">
										<a href="" className="remove">Remove</a>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Unscrewed Explorer Membership</h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Price: <span>$45/mo</span></h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Type: <span>2 reds, 1 white</span></h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Frequency: <span>monthly</span></h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Quantity:</h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<select name="" id="qty"><option>3</option></select>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Shipping <span className="price">$8.00</span></h1>
									</div>
									<div className="col-md-12 pull-left no-padding" >
										<h1>Tax <span className="price">$4.20</span></h1>
									</div>
									<div className="col-md-12 pull-left no-padding">
										<hr />
									</div>
									<div className="col-md-12 pull-left no-padding">
										<h1>Total <span className="price">$52.20</span></h1>
									</div>
								</div>
							</div>
							<div className="col-lg-8 col-md-12 pull-left left-side">
								<div className="col-md-12 pull-left">
									<h1 className="checkout-title">Shipping Adress</h1>
								</div>
								<form name="myForm" method="post">
								<div className="col-md-6 pull-left">
									<input type="text" id="checkout-first" name="checkout-first" placeholder="First Name.." required />
								</div>
								<div className="col-md-6 pull-left">
									<input type="text" id="checkout-last" name="checkout-last" placeholder="Last Name.." required />
								</div>
								<div className="col-md-12 pull-left">
									<input type="text" id="checkout-address" name="checkout-address" placeholder="Address.." required />
								</div>
								<div className="col-md-4 pull-left">
									<input type="text" id="checkout-city" name="checkout-city" placeholder="City.." required />
								</div>
								<div className="col-md-4 pull-left">
									<select id="states" name="state" required>
										<option value="" id="item1" checked>Select One...</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District Of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
								<div className="col-md-4 pull-left">
									<input type="number" id="checkout-zip" name="checkout-zip" placeholder="Zip.." required />
								</div>
								
								<div className="col-md-6 pull-left">
									<input id="bar" placeholder="Phone (for shipping carrier) .." type="text" name="checkout-phone" onkeydown="javascript:backspacerDOWN(this,event);" onkeyup="javascript:backspacerUP(this,event);" />
								</div>
								
								<div className="col-md-6 pull-left">
									<input type="email" id="checkout-email" name="checkout-email" placeholder="Email Address..." required />
								</div>
								<div className="section-two">&nbsp;</div>
								<div className="col-md-12 pull-left">
									<h1 className="checkout-title">Payment Method</h1>
								</div>
								<div className="col-md-12 pull-left">
									<div id="card-element" className="field"></div>
								</div>
								<div className="col-md-12 pull-left">
									<button className="nav-tabbed btn btn-black-back checkout-cart col-md-6" id="checkout-buy" type="submit">Buy Now</button>
								</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<UpperFooter />
		</div>
	)
}
