import React from 'react';
import { getTeam } from '../api/team.js';

export const GameDetails = ({venue, result}) => {

 var getResultTxt = () => {
   if (result !== undefined) {
    return (<p className='gameResultTxt'>Won by {getTeam(result).nickname}</p>)
   }
   else return null;
 }


 return (
   <div className='gameItem gameDetails gameStatus'>

     <div className="gameVenue">
       {venue}
     </div>
     {getResultTxt()}

   </div>

 );

}

export default GameDetails;
