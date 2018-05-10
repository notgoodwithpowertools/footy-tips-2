import React from 'react';

import Team from './Team.jsx';
import GameDetails from './GameDetails.jsx';
import Image from './Image.jsx';
import tick from '../images/Tick_Dad.png';
import cross from '../images/Cross_Dad.png';
// import neutral from '../images/neutral.png';
import edit_result_icon from '../images/edit_result.png';

import { setGameResult, deleteGame } from '../actions/game-actions.js';

export const GamePanel = (props) => {

  // var { id, home_team_id, away_team_id, admin, venue, result_team_id } = props;
  var { game, admin } = props;
  var { id, home_team_id, away_team_id, venue, result_team_id } = game;

  // console.log("Getting result info for panel for game id:", id + " using result:" + result_team_id);
  var home_team_result_icon = undefined;
  var away_team_result_icon = undefined;

  var handleClick = () => {
    // var { id } = props;
    // console.log("Image clicked... about to delete ", id);
    deleteGame(id);

  };

  var handleTeamClick = (teamId) => {
    // var { id } = props;
    // console.log("Team result clicked... ");
    if (result_team_id === teamId) {
      teamId = -1;
    }
    setGameResult(game, teamId);

  };

  // console.log("Game panel item setting - venue :", Venue);
  var getAdminPanel = () => {
    // console.log("Building admin panel...");
    if (admin) {
      var imageName = require("../images/minus.png");

      return (
        <div>
        <span className='gameItem' onClick={() => {handleClick()}}>
          <Image src={imageName} width={35} height={35} mode='fit' />
        </span>
        </div>

      )
      // return <img src={imageName} alt={imageName} />
    }
    else return null;
  };

  var getResultInfo = () => {
    // console.log("getResultInfo...result_team_id:", result_team_id);

    if (result_team_id === undefined) {
      if (admin) {
        return (
        <div className='gameDetails'>

          <Image src={edit_result_icon} width={35} height={35} mode='fit' onClick={() => {handleTeamClick(home_team_id)}}/>
          <GameDetails venue={venue}/>
          <Image src={edit_result_icon} width={35} height={35} mode='fit' onClick={() => {handleTeamClick(away_team_id)}}/>

        </div>
        )
      }
      else {
        return (
          <GameDetails venue={venue} />
        )
      }
    }
    else {

      if (result_team_id === home_team_id) {
        home_team_result_icon = tick;
        away_team_result_icon = cross;
        // console.log("Home team selected...");
      };
      if (result_team_id === away_team_id) {
        home_team_result_icon = cross;
        away_team_result_icon = tick;
        // console.log("Away team selected...");
      };
      // var action;
      // admin ? (action = () => {handleTeamClick(home_team_id)}) : (action = null);
      if (admin) {
        return (
          <div className='gameDetails'>

            <Image src={home_team_result_icon} width={35} height={35} mode='fit' cssClass='statusIcon' onClick={() => {handleTeamClick(home_team_id)}} />
            <GameDetails venue={venue} result={result_team_id}/>
            <Image src={away_team_result_icon} width={35} height={35} mode='fit' cssClass='statusIcon' onClick={() => {handleTeamClick(away_team_id)}}/>

          </div>
        )
      };
      return (
        <div className='gameDetails'>

          <Image src={home_team_result_icon} width={35} height={35} mode='fit' cssClass='statusIcon'/>
          <GameDetails venue={venue} result={result_team_id}/>
          <Image src={away_team_result_icon} width={35} height={35} mode='fit' cssClass='statusIcon'/>

        </div>
      )
    }
  }
  // var getGameAdminActions = () => {
  //
  // };

  // var home_team_id = 5;
  // var away_team_id = 7;
  // console.log("GamePanel game:", props);
  //<div className='panel gamePanel'><Team id={game.home_team_id}/><GameDetails /><Team id={game.away_team_id}/></div>
  // <span className='badge'>
  //   <Image src={tick} width={20} height={20} mode='fit' />
  // </span>
  return (
    <div className='panel gamePanel'>
      <Team id={home_team_id} />
      {getResultInfo()}
      <Team id={away_team_id}/>
      {getAdminPanel()}
    </div>
  );
}

// module.exports = GamePanel;
export default GamePanel;
