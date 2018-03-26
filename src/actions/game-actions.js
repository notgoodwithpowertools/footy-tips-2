import { firebaseRef } from '../api/firebase/index.js';
// import { getTip } from './tip-actions.js';
import { getNextRound, setNextRoundNum } from '../actions/nextRoundNum-actions.js';
import { getMaxRoundNum, setMaxRoundNum } from '../actions/roundNum-actions.js';

export var updateGames = (games) => {
  return {
    type: 'UPDATE_GAMES',
    games: games
  }
};

export var startAddGames = () => {
  console.log('startAddGames...');
  return (dispatch, getState) => {
    // var gamesPath =
    // var gamesRef = firebaseRef.child(`/games`);
    // Using games by season
    var gamesRef = firebaseRef.child(`season-2018-games`);
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
      dispatch(setMaxRoundNum(getMaxRoundNum(parsedGames)));
      dispatch(setNextRoundNum(getNextRound(parsedGames)));
      // console.log("Max Round Num:", getMaxRoundNum(parsedGames));


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

  // Sort on datstamp
  filteredGames.sort( (a, b) => {
    return a.datestamp > b.datestamp
  });

  // console.log("filteredGames:", filteredGames);
  return filteredGames;

};

export var addGame = (game) => {

  console.log("addGame... Adding game record to Firebase:", game);
  firebaseRef.child(`season-2018-games`).push(game);

}

export var deleteGame = (game_id) => {

  console.log("deleteGame... Deleting game record to Firebase:", game_id);
  firebaseRef.child(`season-2018-games/${game_id}`).remove();

}

export var setGameResult = (game, team_id) => {

  console.log("setGameResult... Setting game id:" + game.id + " result record to Firebase:", team_id);
  if (team_id < 0) {
    firebaseRef.child(`season-2018-games/${game.id}/result_team_id`).remove();
  }
  else {
    firebaseRef.child(`season-2018-games/${game.id}/result_team_id`).set(team_id);
  }

  // Check and update tips
  // Get round number
  // updateTipTotals(game.round_num);
  // Get users

  // for each user check game setting - update user for that round which will tleaderboard + or -
}
