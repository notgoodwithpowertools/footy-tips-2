import React from 'react';
import '../css/player.css';
import { firebaseStorageRef } from '../api/firebase/index.js';

const PersonImage = ({firstname, imageName}) => {

  console.log("PersonImage imageName:", imageName);

  var picStyle = {
    height: '60px',
    width: '60px'
  }


  return (
    <div>
      <img className={picStyle} src={imageName} />
    </div>
  );

};

export default PersonImage;
