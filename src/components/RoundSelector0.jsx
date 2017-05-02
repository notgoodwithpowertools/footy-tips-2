import React from 'react';
import '../css/roundselect.css';

export const RoundSelector = ({selectedRound = 'Round1'}) => {
  console.log("selectedRound:", selectedRound);

  var lowSplit = 12;

  var getRounds = (split) => {
    var rounds = [];
    //var split = 12;
    if (split === 'low') {
      for (var i = 1; i <= lowSplit; i++) {
          rounds.push(i);
      }
    }
    else {
      for (var p = lowSplit + 1; p <= 23; p++) {
          rounds.push(p);
      }
    }

    return rounds.map((round_num) => {
        return <p key={round_num}>{round_num}</p>
    });
  };


 return (
   <div>

       <div className="roundSelect">

         <div className='roundNums'>
           <div className='roundItem'>
            <p>Round</p>
           </div>
           <div className='roundItems'>
             {getRounds('low')}
           </div>
           <div className='roundItems'>
             {getRounds()}
           </div>
         </div>

       </div>
   </div>

 );

}

export default RoundSelector;
