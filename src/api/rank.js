
export var rankPlayers = (leaderboard) => {
  console.log('rankPlayers using this leaderboard...', leaderboard);

  var sortOnTotalScore = ( a, b ) => {
    a = Number(a.totalScore);
    b = Number(b.totalScore);
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

  //set score for each player
  var rankedLeaderboard = leaderboard.map( (player) => {
    // var outputArray = [];
    // console.log("player...", player);
    player.totalScore = 0;

    // Add up totalScore
    if (player.roundscores !== undefined) {

      for (const key of Object.keys(player.roundscores)) {
        //player.totalScore = 0;
        // console.log("Object:", key, player.roundscores[key]);
        // console.log("Key:", key + " myObject @ key:", player.roundscores[key]);
        player.totalScore += player.roundscores[key];
        // console.log("player...", player);
        // return outputArray.push(player)
      };

    }
    return player;
  });

  // Rank based on totalScore
  rankedLeaderboard.sort(sortOnTotalScore);
  console.log("Leaderboard Sorted on Totals", rankedLeaderboard);

  // return leaderboard;
  return rankedLeaderboard;
}
