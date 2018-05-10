import React from 'react';
// var { connect } = require('react-redux');
import { connect } from 'react-redux';
import '../css/roundselect.css';
import { setRoundNum } from '../actions/roundNum-actions.js';
// import { getNextRound } from '../actions/nextRoundNum-actions.js';
// import { updatePlayers } from '../actions/player-actions.js';

export class RoundSelector extends React.Component {
// export const RoundSelector = ({selectedRound = 'Round 1'}) => {
  // console.log("selectedRound:", selectedRound);
  constructor(props) {
    super(props);
    // this.selectedRound = (this.state.round_num !== 'undefined') ? this.state.round_num : 3;
    // var {round_num} = this.props;
    // console.log("selected round_num", round_num);

    this.getRounds = this.getRounds.bind(this);
    this.setRound = this.setRound.bind(this);
    // this.setRound(this.props.nextRoundNum);

  }

  // componentWillMount () {
  //   var { setNext, dispatch, games } = this.props;
  //   if ((setNext) && (games.length > 0)) {
  //     console.log("setNext:", setNext + ' Games:', games);
  //     var nextRoundNum = getNextRound(games)
  //     console.log("Next round:", nextRoundNum);
  //     dispatch(setRoundNum(nextRoundNum));
  //   }
  // }

  setRound (aRoundNum) {
    // e.preventDefault();
    var { dispatch } = this.props;
    console.log("e:", aRoundNum);
    dispatch(setRoundNum(aRoundNum));
  }

  // getRounds (split) {
  //   var {round_num} = this.props;
  //   var lowSplit = 12;
  //   var rounds = [];
  //   //var split = 12;
  //   if (split === 'low') {
  //     for (var i = 1; i <= lowSplit; i++) {
  //         rounds.push(i);
  //     }
  //   }
  //   else {
  //     for (var p = lowSplit + 1; p <= 23; p++) {
  //         rounds.push(p);
  //     }
  //   }

  getRounds () {
    var { round_num, maxRoundNum } = this.props;
    // var lowSplit = 12;
    var rounds = [];
    //var split = 12;
    // if (split === 'low') {
      for (var i = 1; i <= maxRoundNum; i++) {
          rounds.push(i);
      }
    // }
    // else {
    //   for (var p = lowSplit + 1; p <= 23; p++) {
    //       rounds.push(p);
    //   }
    // }

    // console.log("this.round_num:", round_num);
    return rounds.map((num, index) => {
        // console.log("round_num:", round_num);
        var highlightClass = 'paginatorButton'
        if (num === round_num) {
          highlightClass = 'selectedRound paginatorButton'
        }
        // return <p key={round_num}>{round_num}</p>
        return <button key={index} value={num} className={highlightClass} onClick={() => {this.setRound(num)}}>{num}</button>
    });
  };

 render () {
   return (
     <div>

         <div className="roundSelect">

           <div className='roundNums'>
             <div className='roundItem'>
              <p>Round</p>
             </div>
             {/*<div className='roundItems'>
               {this.getRounds('low')}
             </div>
             <div className='roundItems'>
               {this.getRounds()}
             </div> */}
             <div className='roundItems'>
               {this.getRounds()}
             </div>
           </div>

         </div>
     </div>

   );
  }

}

// export default RoundSelector;

export default connect(
  (state) => {
    return {
      round_num: state.roundNum,
      maxRoundNum: state.maxRoundNum
      // games: state.games
      // nextRoundNum: state.nextRoundNum
    };
    //return state;
  }

)(RoundSelector);
