import React from 'react';
import * as Redux from 'react-redux';
import * as authActions from '../actions/auth-actions.js';

// Convert to React.Component
//export var Login = React.createClass({
export class Login extends React.Component {

  constructor (props) {
    super(props);
    this.onLoginGitHub = this.onLoginGitHub.bind(this);
    this.onLoginEmail = this.onLoginEmail.bind(this);
    this.register = this.register.bind(this);
  }

  onLoginGitHub () {
    var {dispatch} = this.props;
    console.log("Begin GitHub login...");
    dispatch(authActions.startGitHubLogin());
  }

  onLoginEmail (e) {
    var emailTxt = this.refs.userid.value;
    var passwordTxt = this.refs.password.value;
    console.log("emailTxt:", emailTxt);
    var {dispatch} = this.props;
    console.log("Begin Email login...");
    dispatch(authActions.startEmailLogin(emailTxt, passwordTxt));
  }

  register () {
    var {dispatch} = this.props;
    console.log("Begin registration...");
    dispatch(authActions.registerUser());
  }

  //Same as ...
  //render: function () {}
  render () {
    return (
      <div>

        <h3>Login</h3>
          <div>
            <input type="email" ref="userid" placeholder="Enter email id..." />
            <input type="password" ref="password" placeholder="Enter password..." />

          </div>
        <p>Login with Github account...</p>
        <button className="button" onClick={this.onLoginGitHub}>Login with Github</button>
        <p>Login with email account...</p>
        <button className="button" onClick={this.onLoginEmail}>Login with Email</button>
        <p>Register email account...</p>
        <button className="button" onClick={this.register}>Register Email</button>

      </div>
    )
  }
};

//export default Login;
export default Redux.connect()(Login);
