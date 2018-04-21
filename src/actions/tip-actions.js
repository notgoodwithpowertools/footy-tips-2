import { firebaseRef } from '../api/firebase/index.js';

export var setTip = (userId, gameId, tipTeamId) => {
  console.log("setTip...User ID:", userId + " Game ID:", gameId + " tip team ID:", tipTeamId);

  if (tipTeamId === undefined) {
    //firebaseRef.child(`tips/${userId}/tips/${gameId}`).remove();
    firebaseRef.child(`season-2018-tips/${userId}/tips/${gameId}`).remove();
  }
  else {
    // firebaseRef.child(`tips/${userId}/tips/${gameId}`).set(tipTeamId);
    firebaseRef.child(`season-2018-tips/${userId}/tips/${gameId}`).set(tipTeamId);
  }

}

export var getTip = (tips, aGameId, aUserId) => {

  // console.log("getTip...tips:", tips);
  // console.log("IsArray:", Array.isArray(tips));

  var tipsAvailable = Array.isArray(tips);
  var atipId = undefined;

  if (tipsAvailable) {

    var aTipElement = tips.find( (element) => {
      return element.uid === aUserId;
    });

    if (aTipElement !== undefined) {
      atipId = aTipElement.tips[aGameId];
    }

  }

  var aTip = {
    tip_team_id: atipId
  }

  return (aTip);

}

export var updateTips = (tips) => {
  return {
    type: 'UPDATE_TIPS',
    tips: tips
  }
};


export var startAddTips = () => {
  console.log('startAddTips...');
  return (dispatch, getState) => {

    // var tipsRef = firebaseRef.child(`/tips`);
    var tipsRef = firebaseRef.child(`season-2018-tips`);
    tipsRef.on('value', snap => {

      // return snap.val();
      var tips = snap.val() || {};
      // console.log("snap.val() games", snap.val());
      var parsedTips = [];

      Object.keys(tips).forEach( (uid) => {
        parsedTips.push({
          uid: uid,
          // parsedRoundScores,
          ...tips[uid]
        });
      });

      // console.log("tips (parsed from Firebase):", parsedTips);
      dispatch(updateTips(parsedTips));

    });
  };
};

/*
export var getRoundTipTotals = (games, tips, users) => {
  // console.log("getRoundTipTotals... Updating round tip results for round:", round);
  console.log("users:", users);
  console.log("games:", games);
  var leaderboard = users.map( (user, index) => {
    console.log("User detail:", user.name + " , ID:", user.id + " for round:", game.round_num);
    var roundscoreTotal = 0;
    games.forEach( (aGame) => {
      var aTip = getTip(tips, aGame.id, user.id);
      console.log("Compare - ID:", aGame.id + " result:", aGame.result_team_id + " ,Tip:", aTip.tip_team_id);
      if ((aGame.result_team_id !== undefined) && (aGame.result_team_id === aTip.tip_team_id)) {
        console.log("Good tip!");
        roundscoreTotal += 1;
      }
      else {
        console.log("Bad tip! or game not complete");
      }
      console.log("roundscore total for user:", user.name + " round:", game.round_num + " == ", + roundscoreTotal);



    });
    return {[user.id]: roundscoreTotal};

  });
  // Update Firebase
  // console.log("Good tip!... about to update Firebase");
  // leaderboard.forEach( (aUser) => {
  //   console.log("Tip total for userid:", aUser.uid + " for round ", game.round_num + " === ", aUser.roundscoreTotal);
  //   // firebaseRef.child(`leaderboard/${aUser.uid}/roundscores/${game.round_num}`).set(aUser.roundscoreTotal);
  // });
    //
    // var aTip = getTip(tips, game.id, user.id);
    // console.log("aTip:", aTip);
    // // Get current roundscore total
    // console.log("roundscores:", user.roundscores);
    // var roundscoreTotal = 0;
    // if (user.roundscores !== undefined) {
    //   roundscoreTotal = user.roundscores[game.round_num];
    // }
    //
    // console.log("roundscoreTotal:", roundscoreTotal);
    // if ((game.result_team_id !== undefined) && (game.result_team_id === aTip.tip_team_id)) {
    //   console.log("Good tip!... about to update Firebase");
    //   roundscoreTotal += 1;
    //   // firebaseRef.child(`leaderboard/${user.id}/roundscores/${game.round_num}`).set(team_id);
    // }
    // console.log("Updated roundscoreTotal:", roundscoreTotal);
    // //   var foundIndex = this.users.findIndex( (element) => {
    // //     // console.log("element.uid:", element.uid + " user.id", user.id);
    // //     return element.uid === user.id;
    // //   });
    // // }
    // return {user}
  // });
  console.log("Leaderboard for update:", leaderboard);
  // roundGames = getGames for roundNum;
  // for each user add up correct tips
  // set Leaderboard values per user per round
}
*/

export var getTipTotals = (games, tips, users) => {
  console.log("getTipTotals...");
  // console.log("users:", users);
  // console.log("games:", games);
  var leaderboard = users.map( (user, index) => {
    // var roundscoreTotal = 0;
    var roundscores = [];
    var round = 0;
    // console.log("User detail:", user.name + " , ID:", user.id);
    for (var aGame of games) {
      // console.log("aGame.datestamp:", aGame.datestamp);
      if (aGame.datestamp > Date.now()) {
        // console.log("All previous games verified");
        break;
      };
      // Set Round
      if (aGame.round_num > round) {
        round = aGame.round_num;
        var roundscoreTotal = 0;
      }

      // console.log("Verifying round:", round);

      // Get & check tips
      var aTip = getTip(tips, aGame.id, user.id);
      // console.log("Compare - ID:", aGame.id + " result:", aGame.result_team_id + " ,Tip:", aTip.tip_team_id);
      // if ((aGame.result_team_id !== undefined) && (aGame.result_team_id === aTip.tip_team_id)) {

      // Count draws (code = 99) as correct tips
      if ((aGame.result_team_id !== undefined) && ((aGame.result_team_id === aTip.tip_team_id) || (aGame.result_team_id === 99)) ){
        roundscoreTotal += 1;
        // console.log("Good tip! Increment round score total is:", roundscoreTotal);
      }
      else {
        // console.log("Bad tip! or game not complete");
      }
      // roundscores.splice(round, 0, roundscoreTotal);
      roundscores[round] = roundscoreTotal;

    }
    // console.log("roundscore total for user:", user.name + " round:", round + " == ", + roundscoreTotal);
    // roundscores[round] = roundscoreTotal;
    // roundscores.push({
    //   [round]: roundscoreTotal
    // });
    // leaderboard.push({
    //   uid: aUser.id,
    //   firstname: aUser.firstname
    //   roundscores: roundscores
    // });
    var totalTips = roundscores.reduce( (sum, current) => {
      return sum+current;
    }, 0);
    // console.log("totalTips:", totalTips);

    return {uid: user.id, firstname: user.name, imageURL: user.imageURL, roundscores: roundscores, totalTips: totalTips};
  });

  // console.log("Leaderboard from TipData:", leaderboard);
  return leaderboard

}
