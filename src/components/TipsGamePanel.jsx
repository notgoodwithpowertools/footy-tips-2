import React from 'react';

// import Team from './Team.jsx';
// import Image from './Image.jsx';
import { getTeam } from '../api/team.js';

export const TipsGamePanel = ({game}) => {

  return (
    <div className='tipsGamePanel'>
      <img className='tipsGameIcon tipsTeamItem' src={getTeam(game.home_team_id).img} alt={getTeam(game.home_team_id).img}></img>
      <div className='tipsDetails'><p>{game.venue}</p></div>
      <img className='tipsGameIcon tipsTeamItem' src={getTeam(game.away_team_id).img} alt={getTeam(game.away_team_id).img}></img>
    </div>
  );
}

module.exports = TipsGamePanel;
