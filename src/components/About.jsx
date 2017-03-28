import React from 'react';

import '../css/numbercircle.css';
import '../css/player.css';
import george from '../images/george.png';

const About = () => {

  return (
    <div className='background'>
      <h2>About</h2>
        <div className="numbercircle">Andrew</div>

      <div className='playerRow'>
        <div className='numbercircle'>1</div><img src={george} alt={george}/><p className='player'>Connor</p><div className='numbersquare'>2</div>
      </div>
      <div className='playerRow'>
        <div className='numbercircle'>2</div><img src={george} alt={george}/><p className='player'>Jane</p><div className='resultBox'><div className='totalBox'>12</div></div>
      </div>
      <div className='playerRow'>
        <div className='details'><div className='numbercircle'>1</div><img src={george} alt={george}/><p className='player'>Connor</p></div>
        <div className='total'><div className='totalBox'>15</div></div>
      </div>

   </div>

  );

};

export default About;
