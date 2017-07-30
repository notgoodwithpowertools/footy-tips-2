import React from 'react';
import * as Redux from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import About from './components/About.jsx';

import './css/nav.css';
import home_img from './images/home.png';
import logout_img from './images/logout.png';
import user_img from './images/man-24-128-white.png';
import list_img from './images/white-list2.png';
import afl_img from './images/afl-white.png';
import info_img from './images/information.png';
import ladder_img from './images/ladder2.png';


const Home = () => (
  <p>
    A <code>&lt;Switch></code> renders the
    first child <code>&lt;Route></code> that
    matches. A <code>&lt;Route></code> with
    no <code>path</code> always matches.
  </p>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const Menu = () => {

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/old-match">Old Match, to be redirected</Link></li>
      <li><Link to="/will-match">Will Match</Link></li>
      <li><Link to="/will-not-match">Will Not Match</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
    </ul>

  )
}

const Menu2 = () => {
  var activeStyle = {
    // fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#E21E31',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E21E31'
  };

  return (
    <div className='nav'>
      <ul className='nav_ul'>
        <li className='nav_li'><NavLink to="/user" activeStyle={activeStyle}><Image src={user_img} height={25} width={25} /><div className='nav_text'>User</div></NavLink></li>
      </ul>
    </div>
  )
}

// const MyApp = () => (
export class MyApp extends React.Component {

  render () {

    // var getMenu = (aUser) => {
    //
    //   if (aUser === undefined) {
    //     return null;
    //   };
    //   return <Menu />;
    // };



    var {user} = this.props;

    return (
      <Router>
        <div>
          {/* getMenu(user) */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Redirect from="/old-match" to="/will-match"/>
            <Route path="/will-match" component={WillMatch}/>
            <Route path="/about" component={About} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    )
  }

}


// export default MyApp;

export default Redux.connect(
  (state) => {
    return {
      user: state.auth.uid
    };
    //return state;
  }

)(MyApp);
