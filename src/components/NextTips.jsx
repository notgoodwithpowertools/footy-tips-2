import React from 'react';
import RoundSelector from './RoundSelector.jsx';
import { connect } from 'react-redux';
import { getNextRound } from '../actions/nextRoundNum-actions.js';
// import { filterGames } from '../actions/game-actions.js';
import { setRoundNum } from '../actions/roundNum-actions.js';
// import '../css/home.css';

export class NextTips extends React.Component {

  // constructor(props) {
  //   super(props);
    // var { dispatch, nextRoundNum } = props;
    // this.nextRoundNum = nextRoundNum;
    // dispatch(setRoundNum(nextRoundNum));
    // this.state = {games: []};
    // this.loadGames = this.loadGames.bind(this);
    // this.loadGames();
  // }

  componentWillMount () {
    var { dispatch, nextRoundNum } = this.props;
    if (nextRoundNum !== undefined) {
      console.log("Next round:", nextRoundNum);
      dispatch(setRoundNum(nextRoundNum));
    }
  }

  render () {

    // var { dispatch, nextRoundNum } = this.props;
    // if (nextRoundNum !== undefined) {
    //   console.log("Next round:", nextRoundNum);
    //   dispatch(setRoundNum(nextRoundNum));
    // }

    // var { dispatch, games } = this.props;
    // var nextRound = getNextRound(games);
    // var filteredGames = filterGames(games, nextRound);
    // console.log("filteredGames for upcoming round", filteredGames);
    // if (filteredGames.length > 0) {
    //   console.log("Next round:", getNextRound(games));
    //   dispatch(setRoundNum(nextRound));
    // }


    return (
        // <div className='page'>
          <div>
            <RoundSelector setNext={true}/>
            <h2>Next Tips</h2>
            <p>Next Round:{getNextRound(this.props.games)}</p>
          </div>
        // </div>
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
      user: state.user.uid,
      admin: state.auth.admin,
      games: state.games,
      nextRoundNum: state.nextRoundNum
    };
    //return state;
  }

)(NextTips);
