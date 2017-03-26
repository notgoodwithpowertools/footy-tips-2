import { firebaseRef } from '../api/firebase/index.js';

export var addPlayers = (players) => {
  return {
    type: 'ADD_PLAYERS',
    players: players
  }
};

export var updatePlayers = (players) => {
  console.log("Players:", players);
  return {
    type: 'UPDATE_PLAYERS',
    players: players
  }
};

/*
export var getPlayerUpdates = () => {
  console.log('updatePlayers...');
  // return (dispatch, getState) => {

    var leaderboardRef = firebaseRef.child(`/leaderboard`);

    leaderboardRef.on('value', snap => {
      console.log("snap:", snap.val());
      return snap.val();
    });

  // };

};
*/

export var startAddPlayers = () => {
  console.log('startAddPlayers...');
  return (dispatch, getState) => {

    //Updated Firebase schema bu uid
    //var uid = getState().auth.uid;
    var leaderboardRef = firebaseRef.child(`/leaderboard`);

    return leaderboardRef.once('value').then((snapshot) => {
      var players = snapshot.val() || {};
      console.log('snapshot.val() players', players);
      var parsedPlayers = [];

      //translate to an array
      Object.keys(players).forEach( (playerId) => {
        parsedPlayers.push({
          id: playerId,
          ...players[playerId]
        });

      });
      console.log('parsedPlayers:', parsedPlayers);
      dispatch(addPlayers(parsedPlayers));
    });

  };
};
