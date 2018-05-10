import React from 'react';
import * as Redux from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  // Switch,
  // Link,
  NavLink
} from 'react-router-dom';

import './css/App.css';
import './css/index.css';



// import Home from './components/Home.jsx';
// import NextTips from './components/NextTips.jsx';
import About from './components/About.jsx';
import LeaderBoard from './components/LeaderBoard.jsx';
//import Topic from './components/Topic.jsx';
import Tips from './components/Tips.jsx';
import Topics from './components/Topics.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import LandingPage from './components/LandingPage.jsx';
import User from './components/User.jsx';
import GamePage from './components/GamePage.jsx';
import Image from './components/Image.jsx';
// import Spinner from './components/Spinner.jsx';

import * as authActions from './actions/auth-actions.js';

import './css/nav.css';
import home_img from './images/home.png';
import logout_img from './images/logout.png';
import user_img from './images/man-24-128-white.png';
import list_img from './images/white-list2.png';
import afl_img from './images/afl-white.png';
import info_img from './images/information.png';
import ladder_img from './images/ladder2.png';

//const BasicExample = () => (
export class MyApp extends React.Component {

  // componentDidMount () {
  //   // const leaderboardRef = firebase.database().ref.child('leaderboard');
  // }
  //
  // componentWillMount () {
  //
  //   // const leaderboardRef = firebase.database().ref.child('leaderboard');
  // }

  constructor() {
    super();
    this.protect = this.protect.bind(this);
  }


  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(authActions.startLogout());
  }

  // function protect (aComponent) {
  protect (aComponent) {
    var {user} = this.props;
    if (user === undefined) {
      return LandingPage;
    }
    else {
      return aComponent;
    }
  }

  render () {

    var activeStyle = {
        // fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#E21E31',
        borderBottomStyle: 'solid',
        borderBottomColor: '#E21E31'
    }

    // const user = true;
    var { user }  = this.props;
    console.log("user:", user);

    var menu = () => {

      if ( user ) {
        return (

          <div className='nav'>
          <ul className='nav_ul'>
            <li className='nav_li'><NavLink to="/user" activeStyle={activeStyle}><Image src={user_img} height={25} width={25} /><div className='nav_text'>User</div></NavLink></li>
            {/* }<li className='nav_li'><NavLink to="/home" activeStyle={activeStyle}><Image src={home_img} height={25} width={25} /><div className='nav_text'>Home</div></NavLink></li> */}
            {/* <li className='nav_li'><NavLink to="/next" activeStyle={activeStyle}><Image src={home_img} height={25} width={25} /><div className='nav_text'>Next</div></NavLink></li> */}
            <li className='nav_li'><NavLink to="/leaderboard" activeStyle={activeStyle}><Image src={list_img} height={25} width={25} /><div className='nav_text'>Leaderboard</div></NavLink></li>
            <li className='nav_li'><NavLink to="/tips" activeStyle={activeStyle}><Image src={afl_img} height={25} width={25} /><div className='nav_text'>Tips</div></NavLink></li>
            <li className='nav_li'><NavLink to="/games" activeStyle={activeStyle}><Image src={home_img} height={25} width={25} /><div className='nav_text'>Games</div></NavLink></li>

            {/* <li className='nav_li'><NavLink to="/topics" activeStyle={activeStyle}>Topics</NavLink></li> */}
            {/* <li className='nav_li'><Link to="/login">Login</Link></li> */}
            <li className='nav_li'><a href="http://www.foxsports.com.au/afl/ladder"
               // eslint-disable-next-line
              target="_blank"><Image src={ladder_img} height={25} width={25} /><div className='nav_text'>Ladder</div></a></li>
            <li className='nav_li'><NavLink to="/about" activeStyle={activeStyle}><Image src={info_img} height={25} width={25} /><div className='nav_text'>About</div></NavLink></li>
            <li className='nav_li'><NavLink to="#" onClick={this.onLogout.bind(this)}><Image src={logout_img} height={25} width={25} /><div className='nav_text'>Logout</div></NavLink></li>
          </ul>
          {/* <hr/> */}
          </div>
        )
      }
    }

    // // function protect (aComponent) {
    // const protect = (aComponent) => {
    //
    //   if (!user) {
    //     return LandingPage;
    //   }
    //   else {
    //     return aComponent;
    //   }
    // };

    return (


      <Router>
        <div>

        {/* <div className='landing blur'> */}
        {/* <div className='content'> */}


          {menu()}
          {/* <Switch> */}


          {/* }<Route exact path="/" component={Home}/> */}
          <Route exact path="/" render={() => (
              user ?
              <User /> :
              <Redirect to="/start" />
          )}/>
          {/*}<Route path="/home" render={() => (
            user ?
            <Home /> :
            <Redirect to="/start" />
            )}/> */}
          <Route path="/login" render={() => (
              user ?
              <Redirect to="/user" /> :
              <Login />
          )}/>
          {/* Removed Registrations*/}
          <Route path="/register" render={() => (
              user ?
              <Redirect to="/user" /> :
              <Register />
          )}/>
          <Route path="/start" render={() => (
              user ?
              <Redirect to="/user" /> :
              <LandingPage />
          )}/>

          {/*<Route path="/home" render={protect(Home)} /> */}
          {/* <Route path="/next" component={protect(NextTips)} /> */}
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/games" component={this.protect(GamePage)} />
          <Route path="/tips" component={this.protect(Tips)} />
          <Route path="/user" component={this.protect(User)} />
          {/* <Route path="/topics" render={({Topics}) => (<Redirect to="/start" />)}/> */}
          <Route path="/topics" render={this.protect(Topics)} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/about" component={About} />
          {/* <Route component={About} /> */}
          {/*<Route path="/about" render={protect(About)}/> */}
          {/*<Route path="/start" component={LandingPage} /> */}
          {/*<Route render={() => (<Redirect to="/home" />)}/> */}

        {/*</div> */}
        {/*</div> */}
        {/*</Switch> */}

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
