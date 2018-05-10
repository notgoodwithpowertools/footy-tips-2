import React from 'react';
// import { getDay } from '../actions/date-actions.js';

export const DatePanel = ({aDate}) => {

  // aDate = new Date(aDate);
  return (
    <div className='panel datepanel'><p className='panelItem'>{aDate}</p></div>


  );
}

// module.exports = DatePanel;
export default DatePanel;
