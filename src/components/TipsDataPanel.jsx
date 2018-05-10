import React from 'react';

// import Team from './Team.jsx';
// import Image from './Image.jsx';
// import { getTeam } from '../api/team.js';
// import { setTip } from '../actions/tip-actions.js';
//
// import edit_result_icon from '../images/edit_result.png';

export const TipsDataPanel = ({data}) => {

  // data = [1,2,3,4,5,6,7];
  var sideHeading = "Correct";

  var getDataItems = () => {
    return data.map( (item, index) => {
      return (
        <div key={index} className='tipsTeamItem'>
          {item}
        </div>
      )

    });
  }

  return (
  <div className='tipsPanel'>
    <div className='tipsGamePanel'>
      <div className='tipsTeamItem tipsGameIcon'>

      </div>
      <div className='tipsDetails'>
        {sideHeading}
      </div>
      <div className='tipsTeamItem tipsGameIcon'>

      </div>

    </div>
    <div className="tipsEditPanel">
      {getDataItems()}
    </div>

  </div>
  );

}

// module.exports = TipsDataPanel;
export default TipsDataPanel;
