import React from 'react';
var {connect} = require('react-redux');

import Player from './Player.jsx';
import { updatePlayers } from '../actions/player-actions.js';
import { firebaseRef } from '../api/firebase/index.js';

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
          ...players[playerId]
        });
      });

      dispatch(updatePlayers(parsedPlayers));
    });

  } // end -- componentDidMount

  render () {

    var sortPlayers = ( a, b ) => {
    //  console.log("pre a:", a);
    //  console.log("pre b:", b);
      a = Number(a.score);
      b = Number(b.score);
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

    var { leaderboard } = this.props;
    console.log("leaderboard:", leaderboard);
    // var filteredPlayers = leaderboard.sort();

    // var sortArray = [9, 5, 4, 7, 8];
    // var sortArray = [{name: 'wally', score: '123'}, 5, 4, 7, 8];
    // console.log("SortArray:", sortArray);
    // sortArray.sort();
    // console.log("SortArray:", sortArray);

    // var filteredPlayers = leaderboard.sort(sortPlayers());
    var filteredPlayers = leaderboard;
    if (filteredPlayers.length > 0) {
      filteredPlayers.sort(sortPlayers)
    };
    // leaderboard.sort(sortPlayers);
    // console.log("Array?", Array.isArray(leaderboard), Array.isArray(filteredPlayers) );
    // filteredPlayers.sort();
    // filteredPlayers.sort((a, b) => {
    //   if (a.score < b.score) {
    //     return -1;
    //   }
    //   if (a.score > b.score) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // filterPlayers.sort();
    //console.log("showCompleted:", showCompleted);
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
        // console.log("team.id:", player.id);
        //var i = 1;
        console.log("Player score:", player.score);
        console.log("Player name:", player.name);

        var rank = index + 1;
        return (
          <Player key={player.id} {...player} rank={rank}/>
        )
      });

    }

    return (
      <div>
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
