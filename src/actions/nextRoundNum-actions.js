import { getMaxRoundNum, /* setMaxRoundNum */ } from '../actions/roundNum-actions.js';

export var setNextRoundNum = (num) => {
  return {
    type: 'SET_NEXT_ROUND_NUM',
    nextRoundNum: num
  }
};

export var getNextRound = (games) => {

  var element = games.find( (game) => {
    return game.datestamp > Date.now();
  });
  if (element) {
    console.log("calculated next round:", element.round_num);
    return element.round_num;
  }
  else {
    var maxRoundNum = getMaxRoundNum(games);
    // console.log("calculated next round is last round:", maxRoundNum );
    return maxRoundNum;
    // return undefined;

  }


}
