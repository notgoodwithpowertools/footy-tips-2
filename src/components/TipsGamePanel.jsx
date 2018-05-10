import React from 'react';

// import Team from './Team.jsx';
// import Image from './Image.jsx';
import { getTeam } from '../api/team.js';
import { setGameResult } from '../actions/game-actions.js';

export const TipsGamePanel = ({game, admin, games, tips, users}) => {

  //var resultClass = (game.result_team_id === undefined) ? "" : (game.home_team_id === tipTeamId ? "correctTip" : "incorrectTip");

  var handleClick = (teamId) => {

    console.log("handleClick - teamId:", teamId);

    if (admin) {
      if (game.result_team_id === teamId) {
        // Toggle to Draw ID
        teamId = 99;
      };
        // Toggle to undefined
      if (game.result_team_id === 99) {
        teamId = null;
      }
      setGameResult(game, teamId);

      //updateTipTotals(game, games, tips, users);
      // console.log("Div clicked...If admin:", admin + "... setting game id:", game.id + " result to team_id:", teamId);
    }
  };
  // }
  var homeTeamClass, awayTeamClass = "";
  let drawTeamId = 99;
  switch (game.result_team_id) {
    case game.home_team_id: {
      homeTeamClass =  "correctTip";
      awayTeamClass = "incorrectTip";
      break;
    }

    case game.away_team_id: {
      homeTeamClass =  "incorrectTip";
      awayTeamClass = "correctTip";
      break;
    }

    case drawTeamId: {
      homeTeamClass =  "drawTip";
      awayTeamClass = "drawTip";
      break;
    }

    default: {
      homeTeamClass = "";
      awayTeamClass = "";
    }
  }

  return (
    <div className='tipsGamePanel'>
      <div className={'tipsTeamItem ' + homeTeamClass} onClick={() => {handleClick(game.home_team_id)}}>
        <img className='tipsGameIcon' src={getTeam(game.home_team_id).img} alt={getTeam(game.home_team_id).img}></img>
      </div>

      <div className='tipsDetails'><p>{game.venue}</p></div>
      <div className={'tipsTeamItem ' + awayTeamClass} onClick={() => {handleClick(game.away_team_id)}}>
        <img className='tipsGameIcon' src={getTeam(game.away_team_id).img} alt={getTeam(game.away_team_id).img}></img>
      </div>

    </div>
  );
}

// module.exports = TipsGamePanel;
export default TipsGamePanel;
