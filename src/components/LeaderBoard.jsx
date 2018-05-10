import React from 'react';
import {connect} from 'react-redux';
import Player from './Player.jsx';
import '../css/leaderboard.css';

// import Spinner from './Spinner.jsx';
// import { updatePlayers } from '../actions/player-actions.js';
// import { firebaseRef } from '../api/firebase/index.js';
// import { rankPlayers } from '../api/rank.js';
import { getTipTotals } from '../actions/tip-actions.js';

export class LeaderBoard extends React.Component {

  // constructor (props) {
  //   super(props);
  // }

  // componentDidMount () {
  //
  //   console.log("LeaderBoard component did mount...");
/*
    var { dispatch } = this.props;
    var leaderboardRef = firebaseRef.child(`/leaderboard`);

    leaderboardRef.on('value', snap => {

      // return snap.val();
      var players = snap.val() || {};
      console.log("snap.val() players", snap.val());
      var parsedPlayers = [];

      Object.keys(players).forEach( (playerId) => {
        parsedPlayers.push({
          id: playerId,
          // parsedRoundScores,
          ...players[playerId]
        });
      });

      console.log("parsedPlayers (returned from Firebase - unranked):", parsedPlayers);

      dispatch(updatePlayers(parsedPlayers));
    });
*/
  //} // end -- componentDidMount

  render () {

    var sortOnTotalTips = ( a, b ) => {
      a = Number(a.totalTips);
      b = Number(b.totalTips);
      // console.log("a:", a);
      // console.log("b:", b);
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }

    var { players, games, tips } = this.props;

    // console.log("Players loading...", players);
    //
    // if (players === '') {
    //   return (
    //     <Spinner />
    //   )
    // }

    // console.log("leaderboard:", leaderboard);
    var filteredPlayers = [];
    if ((players.length > 0) && (tips.length > 0)){

      filteredPlayers = getTipTotals(games, tips, players);
      console.log("filteredPlayers:", filteredPlayers);

      // filteredPlayers = rankPlayers(leaderboard);
      // filteredPlayers.sort(sortPlayers)
    };

    var renderPlayers = () => {

      //var filterPlayers = FTipsAPI.filterGames(games, round);

      if (filteredPlayers.length === 0) {
        return (
            <div>
              <p className="container__message">No Players</p>
            </div>
        )
      }

      filteredPlayers.sort(sortOnTotalTips);

      return filteredPlayers.map( (player, index) => {
        var rank = index + 1;
        // <Player key={player.id} {...player} rank={rank}/>
        return (
          // <p key={player.uid}>{player.firstname} - TotalTips:{player.totalTips}</p>
          <Player key={player.uid} rank={rank} {...player} />
        )
      });
    }

    var { season }  = this.props;

    return (
      <div>
        <h2 className='lbh2'>Footy Tipping {season} Leader Board</h2>
        {renderPlayers()}
      </div>
    )
  }

};

export default connect(
  (state) => {
    return {
      players: state.leaderboard,
      tips: state.tips,
      games: state.games,
      season: state.season
    };
    //return state;
  }

)(LeaderBoard);
