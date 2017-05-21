import React from 'react';
import { getTeam } from '../api/team.js';

export const GameDetails = ({venue, result}) => {

 var getResultTxt = () => {
   if (result !== undefined) {
    return (<p className='gameResultTxt'>Won by {getTeam(result).nickname}</p>)
   }
   else return venue;
 }


 return (
   <div className='gameItem gameDetails gameStatus'>

     <div className="gameVenue">
       {getResultTxt()}

     </div>

   </div>

 );

}

export default GameDetails;
