import React from 'react';

// import Team from './Team.jsx';
// import Image from './Image.jsx';
import { getTeam } from '../api/team.js';
import { setTip } from '../actions/tip-actions.js';

import edit_result_icon from '../images/edit_result.png';

export const TipsUserTipPanel = ({game, user, tip}) => {

  // var tip = {}
  // tip.result_team_id = 1;
  // console.log("TipsUserTipPanel ... getTeam sname:", getTeam(tip.result_team_id).sname);

  var tipTeamId = undefined || tip.tip_team_id;
  var icon = tipTeamId !== undefined ? getTeam(tipTeamId).img : edit_result_icon;
  var iconClass = "tipsGameIcon";
  if (icon === edit_result_icon) {
    iconClass = "tipsEditIcon";
  }

  // var resultClass = "" || (tipTeamId === game.result_team_id ? "correctTip" : "incorrectTip");
  // console.log("game.result_team_id:", game.result_team_id);
  // var resultClass = (game.result_team_id === undefined) ? "" : (game.result_team_id === tipTeamId ? "correctTip" : "incorrectTip");
  var resultClass = (game.result_team_id === undefined) ? "" : (game.result_team_id === 99 ? "drawTip" : (game.result_team_id === tipTeamId ? "correctTip" : "incorrectTip"));
  // console.log("Game id:", game.id + " resultClass:", resultClass);

  // var icon = edit_result_icon
  // if (selectedTeamId != undefined) {
  //   icon = getTeam(selectedTeamId).img;
  // }

  var handleClick = () => {
    // console.log("Div clicked... User ID:", user.id + ' Game ID:', game.id + ' Tip Team ID:', tipTeamId);
    // if (game.id) {
    //
    // }
    // if (tipTeamId === game.home_team_id) {
    //   tipTeamId = game.away_team_id;
    // };
    // if (tipTeamId === game.away_team_id) {
    //   tipTeamId = undefined;
    // };
    // if (tipTeamId === undefined) {
    //   tipTeamId = game.home_team_id;
    // };

    switch (tipTeamId) {
      case game.home_team_id: {
        tipTeamId = game.away_team_id;
        break;
      }

      case game.away_team_id: {
        tipTeamId = undefined;
        break;
      }

      default:
        tipTeamId = game.home_team_id;
    }

    setTip(user.id, game.id, tipTeamId);

  }

  return (
    <div className={'tipsTeamItem ' + resultClass} onClick={() => {handleClick()}}>
      <img className={iconClass} src={icon} alt={icon}></img>
    </div>
  );
}

// module.exports = TipsUserTipPanel;
export default TipsUserTipPanel;
