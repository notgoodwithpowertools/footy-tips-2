import React from 'react';
import * as Redux from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'



import Home from './components/Home.jsx';
import About from './components/About.jsx';
//import Topic from './components/Topic.jsx';
import Topics from './components/Topics.jsx';
import Login from './components/Login.jsx';
import LandingPage from './components/LandingPage.jsx';
// import Spinner from './components/Spinner.jsx';

import * as authActions from './actions/auth-actions.js';


//const BasicExample = () => (
export class MyApp extends React.Component {

  onLogout (e) {
      var {dispatch} = this.props;
      e.preventDefault();
      dispatch(authActions.startLogout());
  }



  render () {




    // const user = true;
    var { uid }  = this.props;
    console.log("uid:", uid);

    var menu = () => {

      if ( uid ) {
        return (
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/login">Logon</Link></li>
            <li><Link to="/start">Start</Link></li>
            <li><Link to="#" onClick={this.onLogout.bind(this)}>Logout</Link></li>
          </ul>
        )
      }
    }

    // function protect (aComponent) {
    const protect = (aComponent) => {

      if (!uid) {
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
          uid ?
          <Home /> :
          <Redirect to="/start" />
        )}/>
      {/*}<Route path="/home" render={() => (
            user ?
            <Home /> :
            <Redirect to="/start" />
          )}/> */}
        <Route path="/login" render={() => (
          uid ?
          <Redirect to="/home" /> :
          <Login />
        )}/>
      <Route path="/start" render={() => (
          uid ?
          <Redirect to="/home" /> :
          <LandingPage />
        )}/>
        <Route path="/home" render={protect(Home)} />
        {/* <Route path="/topics" render={({Topics}) => (<Redirect to="/start" />)}/> */}
        <Route path="/topics" render={protect(Topics)} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/about" component={About} />
        {/*<Route path="/about" render={protect(About)}/> */}
        {/*<Route path="/start" component={LandingPage} /> */}
        <Route render={() => (<Redirect to="/home" />)}/>
      </div>
    </Router>
  )
  }
};

export default Redux.connect(
  (state) => {
    return {
      uid: state.auth.uid
    };
    //return state;
  }

)(MyApp);
// export default MyApp;
