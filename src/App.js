import React, { Component } from 'react';
import {
  Route,
  Switch
 } from 'react-router-dom';
import {TopNav} from './components/TopNav.js'
import {ExplorerHomePage} from './components/ExplorerHomePage.js'
import {ExplorerPage} from './components/ExplorerPage.js'
import {LoginPage} from './components/LoginPage.js'
import {SignupPage} from './components/SignupPage.js'
import {Footer} from './components/Footer.js'


class App extends Component {
  render() {
    return (
    	<div>
		  	<TopNav />
		  	<Switch>
				  <Route exact path='/' component={ExplorerHomePage}/>
				  <Route path='/explorer' component={ExplorerPage}/>
				  <Route path='/login' component={LoginPage}/>
				  <Route path='/signup' component={SignupPage}/>
				</Switch>
				<Footer />
			</div>
    );
  }
}

export default App;
