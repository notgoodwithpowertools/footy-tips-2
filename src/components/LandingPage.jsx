var React = require('react');

import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom';

// import Login from './Login.jsx';
import '../css/landing.css';
import '../css/button.css';

// Refactor to stateless functional Component
var LandingPage = (props) => {
  return (

    <div className="landing">
    <div className="title">
      <div className="first">
        <h1 className="heading">Landing Page</h1>
      </div>
      <div className="second">
        <Link className="button2 link" to='/login'>Signin</Link>
        <Link className="button2 link"to='/register'>Register</Link>

      </div>
    </div>

    </div>

  )
};

export default LandingPage;
