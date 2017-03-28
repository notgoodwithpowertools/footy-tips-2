import React from 'react';
import * as Redux from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import './css/App.css';
import './css/index.css';



import Home from './components/Home.jsx';
import About from './components/About.jsx';
import LeaderBoard from './components/LeaderBoard.jsx';
//import Topic from './components/Topic.jsx';
import Topics from './components/Topics.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import LandingPage from './components/LandingPage.jsx';
import User from './components/User.jsx';
// import Spinner from './components/Spinner.jsx';

import * as authActions from './actions/auth-actions.js';


//const BasicExample = () => (
export class MyApp extends React.Component {

  componentDidMount () {
    // const leaderboardRef = firebase.database().ref.child('leaderboard');
  }

  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(authActions.startLogout());
  }


  render () {

    // const user = true;
    var { user }  = this.props;
    console.log("user:", user);

    var menu = () => {

      if ( user ) {
        return (
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/start">Start</Link></li>
            <li><Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link></li>
          </ul>
        )
      }
    }

    // function protect (aComponent) {
    const protect = (aComponent) => {

      if (!user) {
        return LandingPage;
      }
      else {
        return aComponent;
      }
    };

    return (


      <Router>
        <div>
          {menu()}

          <hr/>

          {/* }<Route exact path="/" component={Home}/> */}
          <Route exact path="/" render={() => (
              user ?
              <Home /> :
              <Redirect to="/start" />
          )}/>
          {/*}<Route path="/home" render={() => (
            user ?
            <Home /> :
            <Redirect to="/start" />
            )}/> */}
          <Route path="/login" render={() => (
              user ?
              <Redirect to="/home" /> :
              <Login />
          )}/>
          <Route path="/register" render={() => (
              user ?
              <Redirect to="/home" /> :
              <Register />
          )}/>
          <Route path="/start" render={() => (
              user ?
              <Redirect to="/home" /> :
              <LandingPage />
          )}/>
          <Route path="/home" render={protect(Home)} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/user" component={protect(User)} />
          {/* <Route path="/topics" render={({Topics}) => (<Redirect to="/start" />)}/> */}
          <Route path="/topics" render={protect(Topics)} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/about" component={About} />
          {/*<Route path="/about" render={protect(About)}/> */}
          {/*<Route path="/start" component={LandingPage} /> */}
          {/*<Route render={() => (<Redirect to="/home" />)}/> */}
        </div>
      </Router>
      )
    }
};

export default Redux.connect(
  (state) => {
    return {
      user: state.auth.uid
    };
    //return state;
  }

)(MyApp);
// export default MyApp;
