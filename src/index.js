import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import './css/index.css';

import { Provider } from 'react-redux';

import * as authActions from './actions/auth-actions.js';
import * as teamActions from './actions/team-actions.js';
import * as playerActions from './actions/player-actions.js';
import * as gameActions from './actions/game-actions.js';
import * as tipActions from './actions/tip-actions.js';
// import * as roundActions from './actions/roundNum-actions.js';
//Use Firebase to control user page redirection depending on login state
import firebase from './api/firebase/index.js';


var store = require('./store/configureStore.jsx').configure();


store.dispatch(teamActions.startLoadTeams());
// store.dispatch(playerActions.startAddPlayers());
store.dispatch(playerActions.startAddPlayers2());
store.dispatch(gameActions.startAddGames());
store.dispatch(tipActions.startAddTips());
// store.dispatch(roundActions.setRoundNum(roundActions.getNextRound(store.getState().games)));

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    //store.dispatch(authActions.login(user.uid));
    store.dispatch(authActions.login(user.uid));
    // store.dispatch(authActions.startAddUser(user.uid));

    // startAddUser2 is a change to allow for real time tracking of user changes
    store.dispatch(authActions.startAddUser2(user.uid));
    store.dispatch(authActions.monitorRole(user.uid));

  } else {
    store.dispatch(authActions.logout());
  }
});

store.subscribe(() => {
  var state = store.getState();
  //console.log('New state', store.getState());
  console.log('New state', state);
});

ReactDOM.render(
  <div>
    <Provider store={store}>
    <MyApp />
    </Provider>
  </div>
  , document.getElementById('root')
);
