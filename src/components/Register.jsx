import React from 'react';
import * as Redux from 'react-redux';
import * as authActions from '../actions/auth-actions.js';
import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom';

import '../css/landing.css';

// Convert to React.Component
//export var Login = React.createClass({
export class Register extends React.Component {

  constructor (props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register (e) {
    e.preventDefault();
    var emailTxt = this.refs.userid.value;
    var passwordTxt = this.refs.password.value;
    var firstname = this.refs.firstname.value;
    var {dispatch} = this.props;
    console.log("Begin registration...");
    dispatch(authActions.registerUser(emailTxt, passwordTxt, firstname));
  }

  //Same as ...
  //render: function () {}
  render () {
    return (
      <div className='landing blur'>

        <h1 className="lpHeading">Register</h1>
          <div className="loginPanel">
            <input className="loginInput" type="email" ref="userid" placeholder="Enter email id..." />
            <input className="loginInput" type="password" ref="password" placeholder="Enter password..." />
            <input className="loginInput" type="text" ref="firstname" placeholder="Enter name..." />
            <button className="button2" onClick={this.register}>Register</button>
            <Link className="lpLink" to='/login'>Back to Login</Link>
          </div>
      </div>
    )
  }
};

//export default Login;
export default Redux.connect()(Register);
