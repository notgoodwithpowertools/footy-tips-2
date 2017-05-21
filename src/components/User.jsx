import React from 'react';
import * as Redux from 'react-redux';
import '../css/userpanel.css';
// const User = () => {
export class User extends React.Component {

  render () {

  var { user }  = this.props;



  return (
    <div className='userpanel'>
      <h3>Email: </h3>
      <p>{user.email}</p>
      <h3>User Name:</h3>
      <p>{user.firstname}</p>

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
