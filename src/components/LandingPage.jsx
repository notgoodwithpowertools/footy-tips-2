var React = require('react');

import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom';

// import Login from './Login.jsx';

// Refactor to stateless functional Component
var LandingPage = (props) => {
  return (

    <div className="landing">
    <div className="title">
      <div className="first">
        <h1 className="heading">Footy Tipping</h1>
      </div>
      <div className="second">
        <button className="button1"><Link to='/login'>Log in</Link></button>
        <button className="button2"><Link to='/register'>Register</Link></button>

      </div>
    </div>

    </div>

  )
};

export default LandingPage;
