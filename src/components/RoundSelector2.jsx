import React from 'react';
var { connect } = require('react-redux');
import '../css/roundselect.css';
import { setRoundNum } from '../actions/roundNum-actions.js';
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
  }

  setRound (aRoundNum) {
    // e.preventDefault();
    var { dispatch } = this.props;
    console.log("e:", aRoundNum);
    dispatch(setRoundNum(aRoundNum));
  }

  // getRounds (split) {
  getRounds () {
    var {round_num} = this.props;
    // var lowSplit = 12;
    var rounds = [];
    //var split = 12;
    // if (split === 'low') {
    //   for (var i = 1; i <= lowSplit; i++) {
    //       rounds.push(i);
    //   }
    // }
    // else {
    //   for (var p = lowSplit + 1; p <= 23; p++) {
    //       rounds.push(p);
    //   }
    // }

    for (var i = 1; i <= 23; i++) {
          rounds.push(i);
    }
    // return (rounds);

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
  }

 render () {
   return (
     <div>

         <div className="roundSelect">

           <div className='roundNums'>
             <div className='roundItem'>
              <p>Round</p>
             </div>
             {/*}<div className='roundItems'>
               {this.getRounds('low')}
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
      round_num: state.roundNum
    };
    //return state;
  }

)(RoundSelector);
