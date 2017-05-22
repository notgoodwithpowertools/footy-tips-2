import React from 'react';
import { connect } from 'react-redux';

import RoundSelector from './RoundSelector.jsx';
import RoundSelectMob from './RoundSelectMob.jsx';
// import DatePanel from './DatePanel.jsx';
import GamesList from './GamesList.jsx';
import GameAdmin from './GameAdmin.jsx';
// import GamePanel from './GamePanel.jsx';
// import TeamSelect from './TeamSelect.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
// import { filterGames } from '../actions/game-actions.js';
// import { isAdmin } from '../actions/auth-actions.js';
import { setRoundNum } from '../actions/roundNum-actions.js';

// import startAddGames from '../actions/game-actions.js';

import '../css/gamepage.css';

// const GamePage = () => {
export class GamePage extends React.Component {
  //
  // constructor(props) {
    // super(props);
    // this.state = {games: []};
    // this.loadGames = this.loadGames.bind(this);
    // this.loadGames();
    // this.handleClick = this.handleClick.bind(this);
  // }

  componentWillMount () {
    var { dispatch, nextRoundNum } = this.props;
    if (nextRoundNum !== undefined) {
      console.log("Next round:", nextRoundNum);
      dispatch(setRoundNum(nextRoundNum));
    }
  }


  // componentDidMount () {
  // loadGames () {
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
  //
  // getGamePanels () {
  //   console.log("Getting games list from state (not Redux)...", this.state.games);
  //   var { round_num } = this.props;
  //   var filteredGames = this.state.games;
  //   console.log("getGamePanels... round_num:", round_num);
  //   filteredGames = filterGames(this.state.games, round_num);
  //
  //   if (filteredGames.length === 0) {
  //     return (
  //         <div>
  //           <p className="container__message">No Games</p>
  //         </div>
  //     )
  //   }
  //
  //   return filteredGames.map( (game, index) => {
  //     console.log("Game:", game);
  //     return (
  //       <GamePanel key={game.id} {...game} />
  //     )
  //   });
  //
  // }

  // handleClick (text) {
    // console.log('Button clicked...', text);
    // var { round_num } = this.props;
    // var { round_num, addGameSettings } = this.props;
    // addGameSettings.round_num = round_num;
    // console.log("addGameSettings:", addGameSettings);



  // }

  getAdminPanel () {
    console.log("getAdminPanel...");

    var { admin } = this.props;
    // console.log("getAdminPanel...round_num:", round_num);
    // if (isAdmin(true, user)) {
    if (admin) {
      // return <h4>Admin Panel</h4>;

      // return (
      //   <div>
      //     <h4>Admin Panel</h4>
      //     <TeamSelect name="home" />
      //     <TeamSelect name="away" />
      //     <button className="button2" onClick={this.handleClick.bind(this)}>Add</button>
      //   </div>
      // )
      return <GameAdmin />
    }
    return null;

  }

  render () {

    var { round_num } = this.props;
    console.log("Round:", round_num);
    // console.log("Teams:", teams);

    return (
      <div>
        {/* <h2>GamePage</h2> */}
        <RoundSelector />
        <RoundSelectMob />

        {this.getAdminPanel()}
        {/*}<DatePanel /> */}
        {/* this.getGamePanels() */}
        <GamesList round={round_num}/>
      </div>

    );
  }

};

// export default GamePage;
export default connect(
  (state) => {
    return {
      // addGameSettings: state.addGameSettings,
      // teams: state.teams,
      round_num: state.roundNum,
      nextRoundNum: state.nextRoundNum,
      user: state.user.uid,
      admin: state.auth.admin
    };
    //return state;
  }

)(GamePage);
