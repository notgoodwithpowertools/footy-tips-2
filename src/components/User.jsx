import React from 'react';
import * as Redux from 'react-redux';

// const User = () => {
export class User extends React.Component {

  //console.log("uid XXX:", uid);
  render () {

  var { user }  = this.props;

  return (
    <div>
      <h2>Email - {user.email}</h2>
      <h2>User - {user.firstname}</h2>

    </div>
  )
  }

};

export default Redux.connect(
  (state) => {
    return {
      user: state.user
    };
    //return state;
  }

)(User);

// export default User;
