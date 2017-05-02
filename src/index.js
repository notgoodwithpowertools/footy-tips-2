import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './MyApp';
import './css/index.css';


import { Provider } from 'react-redux';

var store = require('./store/configureStore.jsx').configure();

import * as authActions from './actions/auth-actions.js';
import * as teamActions from './actions/team-actions.js';
import * as playerActions from './actions/player-actions.js';
import * as gameActions from './actions/game-actions.js';

//Use Firebase to control user page redirection depending on login state
import firebase from './api/firebase/index.js';
store.dispatch(teamActions.startLoadTeams());
store.dispatch(playerActions.startAddPlayers());
store.dispatch(gameActions.startAddGames());

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    //store.dispatch(authActions.login(user.uid));
    store.dispatch(authActions.login(user.uid));
    store.dispatch(authActions.startAddUser(user.uid));
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
