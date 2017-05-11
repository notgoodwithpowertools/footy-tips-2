// This was an attempt to store Tips in Redux and load leaderboard from there
// Seems like it hit a roadblock looking to sort tips by round

import React from 'react';
var {connect} = require('react-redux');

import Player from './Player.jsx';
// import { updatePlayers } from '../actions/player-actions.js';
// import { firebaseRef } from '../api/firebase/index.js';
// import { rankPlayers } from '../api/rank.js';

export class LeaderBoard extends React.Component {

  constructor (props) {
    super(props);
    this.renderPlayers = this.renderPlayers.bind(this);
  }

  renderPlayers () {
    var { tips } = this.props;

    return tips.map( (tip, index) => {
      // console.log("tip:", tip);
      return <p key={index}>{tip.uid + " - " + tip.name}</p>
    });
  }


  render () {
    return (
      <div>
        <h2>Footy Tipping 2017 Leader Board</h2>
        {this.renderPlayers()}
      </div>
    )
  }

};

export default connect(
  (state) => {
    return {
      tips: state.tips
    };
    //return state;
  }

)(LeaderBoard);
