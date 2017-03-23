import React from 'react';
import * as Redux from 'react-redux';
import * as authActions from '../actions/auth-actions.js';

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
      <div>

        <h3>Register</h3>
          <div>
            <input type="email" ref="userid" placeholder="Enter email id..." />
            <input type="password" ref="password" placeholder="Enter password..." />
            <input type="text" ref="firstname" placeholder="Enter name..." />
          </div>
        <button className="button" onClick={this.register}>Register</button>

      </div>
    )
  }
};

//export default Login;
export default Redux.connect()(Register);
