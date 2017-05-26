import React from 'react';

import team_img from '../images/wbu.jpg';
import { getTeam } from '../api/team.js';
// import Image from './Image.jsx';
// import tick from '../images/tick.jpg';
// import cross from '../images/cross.jpg';

export const Team = ({id}) => {
 // var { team_id } = props;
 // console.log("team_id:", id);

 return (
   <div className='gameItem' >

     <img className='teamIcon' src={getTeam(id).img} alt={team_img}></img>
     <div className='teamNameLg'>{getTeam(id).name}</div>
     <div className='teamNameSm'>{getTeam(id).sname}</div>

   </div>

 );

}

export default Team;
