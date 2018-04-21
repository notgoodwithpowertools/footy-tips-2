import React from 'react';
import { getTeam } from '../api/team.js';

export const GameDetails = ({venue, result}) => {

 var getResultTxt = () => {
 //   if (result !== undefined) {
 //    return (<p className='gameResultTxt'>Won by {getTeam(result).nickname}</p>)
 //   }
 //   else return venue;
 //   (result !== undefined) ?
 // }
   // Implement Drawn result text
   var resultTxt = (result === undefined) ? venue : (result === 99 ? "Drawn" : "Won by " + getTeam(result).nickname);

   return resultTxt;
 }

 var getDrawnClass = () => {
   var drawnClass = (result === 99) ? 'drawn' : '';
   return drawnClass;
 }

 return (
   <div className='gameItem gameDetails gameStatus'>

     <div className={"gameVenue " + getDrawnClass()}>
       {getResultTxt()}

     </div>

   </div>

 );

}

export default GameDetails;
