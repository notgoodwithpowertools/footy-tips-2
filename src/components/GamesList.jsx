import React from 'react';
import { connect } from 'react-redux';
import GamePanel from './GamePanel.jsx';
// import TeamSelect from './TeamSelect.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
import { filterGames } from '../actions/game-actions.js';

export class GamesList extends React.Component {

  constructor() {
    super();
    // this.state = {games: []};
    this.getGamePanels = this.getGamePanels.bind(this);
    // this.loadGames();
  }

  // componentWillUnmount () {
  //   var gamesRef = firebaseRef.child(`/games`);
  //   gamesRef.off('value');
  // }

  // componentWillMount () {
  //   console.log("GamePage componentWillMount...");
  //   // var { dispatch } = this.props;
  //   var gamesRef = firebaseRef.child(`/games`);
  //
  //   gamesRef.on('value', snap => {
  //
  //     // return snap.val();
  //     var games = snap.val() || {};
  //     console.log("snap.val() games", snap.val());
  //     var parsedGames = [];
  //
  //     Object.keys(games).forEach( (gameId) => {
  //       parsedGames.push({
  //         id: gameId,
  //         // parsedRoundScores,
  //         ...games[gameId]
  //       });
  //     });
  //
  //     console.log("games (parsed from Firebase):", parsedGames);
  //     this.setState({games: parsedGames});
  //     // update the state with received game data
  //     // dispatch(updateGames(parsedGames));
  //   });
  // }

  getGamePanels () {
    // Moving Games to Redux
    // console.log("Getting games list from state (not Redux)...", this.state.games);
    // var { round, admin } = this.props;
    // var filteredGames = this.state.games;
    // console.log("getGamePanels... round:", round);
    // filteredGames = filterGames(this.state.games, round);
    var { round, admin, games } = this.props;
    console.log("Getting games list from Redux...", games);

    var filteredGames = games;
    console.log("getGamePanels... round:", round);
    filteredGames = filterGames(games, round);


    if (filteredGames.length === 0) {
      return (
          <div>
            <p className="container__message">No Games</p>
          </div>
      )
    }

    return filteredGames.map( (game, index) => {
      console.log("Game:", game);
      return (
        <GamePanel key={game.id} admin={admin} {...game} />
      )
    });

  }

  render () {
    return (
      <div>
      {this.getGamePanels()}
      </div>

    );
  }

} // end -- GamesList

// export default GamesList;
export default connect(
  (state) => {
    return {
      // addGameSettings: state.addGameSettings,
      // teams: state.teams,
      round: state.roundNum,
      // user: state.user.uid,
      admin: state.auth.admin,
      games: state.games
    };
    //return state;
  }

)(GamesList);
