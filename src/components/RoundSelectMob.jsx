import React from 'react';

var { connect } = require('react-redux');
import '../css/roundSelectMob.css';
import { setRoundNum } from '../actions/roundNum-actions.js';

export class RoundSelectMob extends React.Component {

  setRound (aRoundNum) {
    var { dispatch } = this.props;
    aRoundNum = aRoundNum < 1 ? 1 : aRoundNum > 23 ? 23 : aRoundNum;
    // if (aRoundNum < 1) {
    //   aRoundNum = 1;
    // };
    // if (aRoundNum > 23) {
    //   aRoundNum = 23;
    // };
    dispatch(setRoundNum(aRoundNum));
  }

render () {
  var { round_num } = this.props;
  return (
    <div className='roundSelectMob'>
      <button value={round_num - 1} className='roundSelectMobButton' onClick={() => {this.setRound(round_num - 1)}}>&#10094;</button>
      <button value={round_num} className='roundSelectMobButton' onClick={() => {this.setRound(round_num)}}>{round_num}</button>
      <button value={round_num + 1} className='roundSelectMobButton' onClick={() => {this.setRound(round_num + 1)}}>&#10095;</button>
    </div>
  );
}


};

export default connect(
  (state) => {
    return {
      round_num: state.roundNum,
      // games: state.games
      // nextRoundNum: state.nextRoundNum
    };
    //return state;
  }

)(RoundSelectMob);
