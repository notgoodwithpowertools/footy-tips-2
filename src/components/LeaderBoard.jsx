import React from 'react';
var {connect} = require('react-redux');

import Player from './Player.jsx';
import { updatePlayers } from '../actions/player-actions.js';
import { firebaseRef } from '../api/firebase/index.js';
import { rankPlayers } from '../api/rank.js';

export class LeaderBoard extends React.Component {

  // constructor (props) {
  //   super(props);
  // }

  componentDidMount () {

    console.log("LeaderBoard component did mount...");

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

  } // end -- componentDidMount

  render () {

    // var sortPlayers = ( a, b ) => {
    // //  console.log("pre a:", a);
    // //  console.log("pre b:", b);
    //   a = Number(a.score);
    //   b = Number(b.score);
    //   // console.log("a:", a);
    //   // console.log("b:", b);
    //   if (a < b) {
    //     return 1;
    //   }
    //   if (a > b) {
    //     return -1;
    //   }
    //   return 0;
    // }

    var { leaderboard } = this.props;
    // console.log("leaderboard:", leaderboard);
    var filteredPlayers = leaderboard;
    if (filteredPlayers.length > 0) {
      filteredPlayers = rankPlayers(leaderboard);
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

      return filteredPlayers.map( (player, index) => {
        var rank = index + 1;
        return (
          <Player key={player.id} {...player} rank={rank}/>
        )
      });
    }

    return (
      <div>
        <h2>Footy Tipping 2017 Leader Board</h2>
        {renderPlayers()}
      </div>
    )
  }

};

export default connect(
  (state) => {
    return {
      leaderboard: state.leaderboard
    };
    //return state;
  }

)(LeaderBoard);
