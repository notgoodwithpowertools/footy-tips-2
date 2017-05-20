import React from 'react';
import { connect } from 'react-redux';
import GamePanel from './GamePanel.jsx';
import GameTipPanel from './GameTipPanel.jsx';
// import TeamSelect from './TeamSelect.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
import { filterGames } from '../actions/game-actions.js';
import { getTip } from '../actions/tip-actions.js';

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

    var { round, user, admin, games, tips } = this.props;
    // console.log("Getting games list from Redux...", games);

    var filteredGames = games;

    filteredGames = filterGames(games, round);


    if ((filteredGames.length === 0) || (user === undefined)) {
      return (
          <div>
            <p className="container__message">No Games</p>
          </div>
      )
    };


    return filteredGames.map( (game, index) => {
      // console.log("getGamePanels... user:", user);
      var aTip = getTip(tips, game.id, user.uid);
      // console.log("Game id:", game.id + " uid:", user.uid + " aTip:", aTip);
      return (
        <div key={'div-' + game.id}>
          <GamePanel key={game.id} admin={admin} game={game} />
          <GameTipPanel game={game} tip={aTip} user={user.uid} admin={admin}/>
        </div>



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
      user: state.user,
      admin: state.auth.admin,
      games: state.games,
      tips: state.tips
    };
    //return state;
  }

)(GamesList);
