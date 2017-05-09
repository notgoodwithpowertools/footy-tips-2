import { firebaseRef } from '../api/firebase/index.js';

export var updateGames = (games) => {
  return {
    type: 'UPDATE_GAMES',
    games: games
  }
};

export var startAddGames = () => {
  console.log('startAddGames...');
  return (dispatch, getState) => {

    var gamesRef = firebaseRef.child(`/games`);
    gamesRef.on('value', snap => {

      // return snap.val();
      var games = snap.val() || {};
      // console.log("snap.val() games", snap.val());
      var parsedGames = [];

      Object.keys(games).forEach( (gameId) => {
        parsedGames.push({
          id: gameId,
          // parsedRoundScores,
          ...games[gameId]
        });
      });

      // console.log("games (parsed from Firebase):", parsedGames);
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
  // console.log("filteredGames:", filteredGames);
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

export var setGameResult = (game, team_id) => {

  console.log("setGameResult... Setting game id:" + game.id + " result record to Firebase:", team_id);
  if (team_id < 0) {
    firebaseRef.child(`games/${game.id}/result_team_id`).remove();
  }
  else {
    firebaseRef.child(`games/${game.id}/result_team_id`).set(team_id);
  }

  // Check and update tips
  // Get round number
  // console.log("Setting round tip results for round:", game.round_num);
  // Get users

  // for each user check game setting - update user for that round which will tleaderboard + or -



}