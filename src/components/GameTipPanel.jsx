import React from 'react';

import Image from './Image.jsx';
import { setTip } from '../actions/tip-actions.js';
import edit_result_icon from '../images/edit_result.png';
import tick from '../images/tick.jpg';
import cross from '../images/cross.jpg';
import neutral from '../images/neutral.png';
// import change from '../images/change.jpg';
// import blank from '../images/car2.jpg';

export const GameTipPanel = (props) => {

  var { game, tip, user, admin } = props;
  var awayTipIcon = edit_result_icon;
  var homeTipIcon = edit_result_icon;

  //  get Tip
  // var tipTeamId = undefined || tip.tip_team_id;
  // var isTippingOpen = (game.datestamp > Date.now()) ? true : false;
  var tipResultTxt = (game.datestamp > Date.now()) ? "Tipping Open" : "Tipping Closed";


  var handleTeamClick = (tipTeamId) => {

    // console.log("Click!!!!!");

    if (admin) {
      setTip(user, game.id, tipTeamId);
    }
    else {
      if (game.datestamp > Date.now()) {
        console.log("Set tip for teamId:", tipTeamId);
        setTip(user, game.id, tipTeamId);
      }
      else console.log("Tipping is closed...");
    }

  };

  // var getTipText = () => {
  //   if (tipResult) {
  //     return "Correct Tip"
  //   }
  //   else return "Incorrect Tip"
  // }


  if (game.result_team_id !== undefined) {

    if (game.result_team_id === 99) {
      if (tip.tip_team_id === game.home_team_id) {
        homeTipIcon = neutral;
        awayTipIcon = admin ? edit_result_icon : null;
      }
      if (tip.tip_team_id === game.away_team_id) {
        homeTipIcon = admin ? edit_result_icon : null;
        awayTipIcon = neutral;
      }

    }
    else {
    if (game.result_team_id === tip.tip_team_id) {
      tipResultTxt = "Correct Tip";
      if (tip.tip_team_id === game.home_team_id) {
        homeTipIcon = tick;
        awayTipIcon = admin ? edit_result_icon : null;
      }
      if (tip.tip_team_id === game.away_team_id) {
        homeTipIcon = admin ? edit_result_icon : null;
        awayTipIcon = tick;
      }
    }
    else {
      tipResultTxt = "Incorrect Tip";
      if (tip.tip_team_id === game.home_team_id) {
        homeTipIcon = cross;
        //awayTipIcon = null;
        awayTipIcon = admin ? edit_result_icon : null;
      }
      if (tip.tip_team_id === game.away_team_id) {
        homeTipIcon = admin ? edit_result_icon : null;
        awayTipIcon = cross;
      }
    }
  }
  }
  else { // Game result is not in
    if (tip.tip_team_id === game.home_team_id) {
      homeTipIcon = tick;
      // awayTipIcon = edit_result_icon;
      awayTipIcon = (game.datestamp > Date.now()) ? edit_result_icon : admin ? edit_result_icon : null;
    }
    if (tip.tip_team_id === game.away_team_id) {
      // homeTipIcon = edit_result_icon;
      homeTipIcon = (game.datestamp > Date.now()) ? edit_result_icon : admin ? edit_result_icon : null;
      awayTipIcon = tick;
    }
  }


  return (
    <div className='panel gamePanel gameTipPanel'>

      <div className='gameItem'>
        <Image src={homeTipIcon} width={35} height={35} mode='fit' onClick={() => {handleTeamClick(game.home_team_id)}} cssClass='statusIcon'/>
      </div>

      <div className='gameDetails'>
        {tipResultTxt}
      </div>

      <div className='gameItem'>
        <Image src={awayTipIcon} width={35} height={35} mode='fit' onClick={() => {handleTeamClick(game.away_team_id)}} cssClass='statusIcon'/>
      </div>

    </div>

  );
}

// module.exports = GameTipPanel;
export default GameTipPanel;
