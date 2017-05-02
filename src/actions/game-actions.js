import { firebaseRef } from '../api/firebase/index.js';

export var updateGames = (games) => {
  return {
    type: 'UPDATE_GAMES',
    games: games
  }
};

// export var startAddGames = () => {
//   console.log('startAddGames...');
//   return (dispatch, getState) => {
//
//     //Updated Firebase schema bu uid
//     //var todosRef = firebaseRef.child('todos');
//     // var uid = getState().auth.uid;
//     var gamesRef = firebaseRef.child(`/games`);
//
//     return gamesRef.once('value').then((snapshot) => {
//       var games = snapshot.val() || {};
//       console.log('snapshot.val() games', games);
//       var parsedGames = [];
//
//       //translate to an array
//       Object.keys(games).forEach( (gameId) => {
//         parsedGames.push({
//           id: gameId,
//           ...games[gameId]
//         });
//
//       });
//       console.log('parsedGames:', parsedGames);
//       // add to store
//       dispatch(addGames(parsedGames));
//     });
//
//   };
// };


export var startAddGames = () => {
  console.log('startAddGames...');
  return (dispatch, getState) => {

    var gamesRef = firebaseRef.child(`/games`);
    gamesRef.on('value', snap => {

      // return snap.val();
      var games = snap.val() || {};
      console.log("snap.val() games", snap.val());
      var parsedGames = [];

      Object.keys(games).forEach( (gameId) => {
        parsedGames.push({
          id: gameId,
          // parsedRoundScores,
          ...games[gameId]
        });
      });

      console.log("games (parsed from Firebase):", parsedGames);
      dispatch(updateGames(parsedGames));

    });
  };
};

export var filterGames = (games, round) => {

  console.log("Filtering games for round num:", round);
  var filteredGames = games;

  // Filter by showCompleted
  filteredGames = filteredGames.filter((game) => {
    // console.log("game.round:", game.round_num);
    return game.round_num === round;

  });
  console.log("filteredGames:", filteredGames);
  return filteredGames;

};

export var addGame = (game) => {

  console.log("addGame... Adding game record to Firebase:", game);
  firebaseRef.child(`games`).push(game);

}

export var deleteGame = (game_id) => {

  console.log("deleteGame... Deleting game record to Firebase:", game_id);
  firebaseRef.child(`games/${game_id}`).remove();

}

export var setGameResult = (game_id, team_id) => {

  console.log("setGameResult... Setting game id:" + game_id + " result record to Firebase:", team_id);
  if (team_id < 0) {
    firebaseRef.child(`games/${game_id}/result_team_id`).remove();
  }
  else {
    firebaseRef.child(`games/${game_id}/result_team_id`).set(team_id);
  }
  // gamesRef.set(games, function(error) {
  //   if (error) {
  //     console.log("Games data could not be saved.", error);
  //   } else {
  //     console.log("Games data saved successfully.");
  //     /*ref.once("value", function(snapshot) {
  //       console.log(snapshot.val());
  //     }); */
  //   }
  // });

}


/*
export var addGameSetTeam = (name, id) => {
  console.log("addGameSetTeam... name:", name);
  // switch (name) {
  //   case (name === 'home'):
  //     console.log("HOME...");
  //     return ({
  //       type: 'SET_HOME_TEAM',
  //       id: id
  //     });
  //     break;
  //
  //   case (name === 'away'):
  //     console.log("AWAY...");
  //     return ({
  //       type: 'SET_AWAY_TEAM',
  //       id: id
  //     });
  //
  //   default:
  //     return ({
  //       type: 'SET_AWAY_TEAM',
  //       id: id
  //     });
  //
  // }
  // +++++++++++++++++
  if (name === "home") {
    return (
      {
        type: 'SET_HOME_TEAM',
        id: id
      }
    );

  }
  else {
    return (
      {
          type: 'SET_AWAY_TEAM',
          id: id
      }
    );


  }
  // ++++++++++

}; */
