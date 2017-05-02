import React from 'react';
import { connect } from 'react-redux';
import RoundSelector from './RoundSelector.jsx';
import TipsGamePanel from './TipsGamePanel.jsx';
import TipsUserTipPanel from './TipsUserTipPanel.jsx';

import { firebaseRef } from '../api/firebase/index.js';
import { filterGames } from '../actions/game-actions.js';
import { getTip } from '../actions/tip-actions.js';

import '../css/tips.css';

export class Tips extends React.Component {

  constructor() {
    super();
    this.state = {games: [], tips: {}};
    //this.getGamePanels = this.getGamePanels.bind(this);
    // this.loadGames();
    this.listUsers = this.listUsers.bind(this);
    this.getGamePanels = this.getGamePanels.bind(this);
    this.getUserTipPanels = this.getUserTipPanels.bind(this);
  }

  // componentWillUnmount () {
  //   var gamesRef = firebaseRef.child(`/games`);
  //   gamesRef.off('value');
  // }

  componentWillMount () {
    console.log("Tips componentWillMount...");
    // var { round } = this.props;
    var gamesRef = firebaseRef.child(`/games`);

    gamesRef.on('value', snap => {

      // return snap.val();
      var games = snap.val() || {};
      // console.log("snap.val() games:", snap.val());
      var parsedGames = [];

      Object.keys(games).forEach( (gameId) => {
        parsedGames.push({
          id: gameId,
          // parsedRoundScores,
          ...games[gameId]
        });
      });

      // console.log("games (parsed from Firebase):", parsedGames);
      // update the component state with received game data
      this.setState({games: parsedGames});
      // update the Redux state with received game data
      // dispatch(updateGames(parsedGames));
    });

    var tipsRef = firebaseRef.child(`/tips/`);
    tipsRef.on('value', snap => {

      var tips = snap.val() || {};
      console.log("tipSnap.val() tips:", snap.val());
      var parsedTips = [];

      // Object.keys(tips).forEach( (gameId) => {
      //   parsedTips.push({
      //     gameId: gameId,
      //     // parsedRoundScores,
      //     ...tips[gameId]
      //   });
      // });
      Object.keys(tips).forEach( (uid) => {
        parsedTips.push({
          uid: uid,
          // parsedRoundScores,
          ...tips[uid]
        });
      });
      console.log("tips (parsed from Firebase):", parsedTips);
      this.setState({tips: parsedTips});

    });

  }

  listUsers () {
    var { users } = this.props;

    //var filterPlayers = FTipsAPI.filterGames(games, round);

    if (users.length === 0) {
      return (
        <div>
          <p className="container__message">No Players</p>
        </div>
      )
    }

    // return <p>listUsers</p>
    return users.map( (user, index) => {
      // console.log("User:", user.name);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )
      return (
        <div className='tipEditPanel' key={index}>
          {user.name}
        </div>
      )
    });
  }

  getUserTipPanels (game) {
    // console.log("getUserTipPanels...");
    var { users } = this.props;

    //var filterPlayers = FTipsAPI.filterGames(games, round);

    if (users.length === 0) {
      return (
        <div>
          <p>No Players</p>
        </div>
      )
    }

    // return <p>listUsers</p>
    return users.map( (user, index) => {
      // console.log("User:", user.name);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )

      // var atipId = 6;
      // var aTip = {
      //   tip_team_id: atipId
      // }
      var aTip = getTip(this.state.tips, game.id, user.id);
      // console.log("Getting tip using userid:", user.id + " gameid:", game.id + "tip:", aTip);
      return (
        <TipsUserTipPanel key={index} user={user} game={game} tip={aTip}/>
      )
    });

  }

  getGamePanels () {
    var { round } = this.props;

    console.log("getGamePanels... round:", round);
    var filteredGames = filterGames(this.state.games, round);

    if (filteredGames.length === 0) {
      return (
        <div>
          <p className="container__message">No Games</p>
        </div>
      )
    };

    // return <p>listUsers</p>
    return filteredGames.map( (game, index) => {
      // console.log("Game id:", game.id);
      // return (
      //   <GamePanel key={game.id} admin={admin} {...game} />
      // )
      return (
      <div key={game.id} className='tipsPanel'>
        <TipsGamePanel game={game} />{this.getUserTipPanels(game)}
      </div>
    )

    });
  } // end -- getGamePanels

  render () {
    // {this.listUsers()}
    return (
      <div>
        <h2>Tips Admin</h2>
        <RoundSelector />

        <div className='tipsPanel'>
          <div className='tipsGamePanel'>
            test
          </div>
          {this.listUsers()}
        </div>

        <div>
          {this.getGamePanels()}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      round: state.roundNum,
      users: state.leaderboard
    };
    //return state;
  }

)(Tips);
