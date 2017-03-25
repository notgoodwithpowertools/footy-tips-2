//var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';

//var {searchTextReducer, showCompletedReducer, todosReducer} = require('../reducers/reducers.jsx');
import { authReducer, userReducer, msgReducer } from '../reducers/reducers.jsx';

export var configure = (initialState={}) => {
  var reducers = redux.combineReducers({
    auth: authReducer,
    user: userReducer,
    msg: msgReducer
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


  return store;
};
