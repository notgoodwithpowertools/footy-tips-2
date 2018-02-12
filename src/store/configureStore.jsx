//var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//var {searchTextReducer, showCompletedReducer, todosReducer} = require('../reducers/reducers.jsx');
import { authReducer, userReducer, msgReducer, seasonReducer, leaderboardReducer, teamsReducer, roundNumReducer, gamesReducer, tipsReducer, nextRoundNumReducer, maxRoundNumReducer } from '../reducers/reducers.jsx';

export var configure = (initialState={}) => {
  var reducers = redux.combineReducers({
    auth: authReducer,
    user: userReducer,
    msg: msgReducer,
    season: seasonReducer,
    leaderboard: leaderboardReducer,
    teams: teamsReducer,
    roundNum: roundNumReducer,
    games: gamesReducer,
    tips: tipsReducer,
    nextRoundNum: nextRoundNumReducer,
    maxRoundNum: maxRoundNumReducer
    // ,
    // addGameSettings: addGameReducer
  });

  console.log("Window:", window.navigator.userAgent);



  // if (window.navigator.userAgent.includes('Chrome')) {
  //   //console.log("initialState:", initialState);
  //   var store = redux.createStore(reducers, initialState, redux.compose(
  //     redux.applyMiddleware(thunk)
  //     ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   ));
  // }
  // else {
  //   var store = redux.createStore(reducers, initialState, redux.compose(
  //     redux.applyMiddleware(thunk)
  //     //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   ));
  // }
  // console.log("Check environment for loading DevTools...");
  // const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null;
/*  // Pre state
  var getComposeEnhancers = () => {
    if (window.navigator.userAgent.includes('Chrome')) {
      return redux.compose(
        redux.applyMiddleware(thunk)
        ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
    return redux.compose(redux.applyMiddleware(thunk) );
  };
  var store = redux.createStore(reducers, initialState, getComposeEnhancers() );
*/

  var getComposeEnhancers = () => {
    if (window.navigator.userAgent.includes('Chrome') && (process.env.NODE_ENV === 'development')) {
      return composeWithDevTools(
        redux.applyMiddleware(thunk)
        // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
    // else return null;
    return redux.compose(redux.applyMiddleware(thunk) );
  };
  var store = redux.createStore(reducers, initialState, getComposeEnhancers() );



  return store;
};
