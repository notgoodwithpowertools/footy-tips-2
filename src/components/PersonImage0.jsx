import React from 'react';
import '../css/player.css';
import { firebaseStorageRef } from '../api/firebase/index.js';

const PersonImage = ({firstname}) => {

  var picStyle = {
    height: '60px',
    width: '60px'
  }

  // function getFirstUser() {
  //     return getUsers().then(function(users) {
  //         return users[0].name;
  //     }).catch(function(err) {
  //         return {
  //           name: 'default user'
  //         };
  //     });
  // }

  // function getImage(firstname) {
  //   var imageRef = firebaseStorageRef.child('userimages/' + firstname + '.jpg');
  //   return imageRef.getDownloadURL().then(function(url) {
  //       return url;
  //   }).catch(function(err) {
  //       console.log("Error...");
  //   });
  // }

  // async function getImage(firstname) {
  //   var imageRef = firebaseStorageRef.child('userimages/' + firstname + '.jpg');
  //   let  url = await imageRef.getDownloadURL();
  //   return url;
  // }

  // var imageName = undefined;
  console.log("firstname:", firstname);
  var image = require('../images/george.png');
  if (firstname !== undefined) {
    console.log("Name found");
    // image = getImage(firstname)
    // image = "https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=91d597d7-34ff-44e6-b879-a5e7fe160473";
  // }

    var imageRef = firebaseStorageRef.child('userimages/' + firstname + '.jpg');
    image = imageRef.getDownloadURL().then(function(url) {
    // Insert url into an <img> tag to "download"

    // this.setState({imageName: url});
      console.log("imageName URL:", url);
      console.log("Setting image download...");
      return url;
    }).catch(function(error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object_not_found':
        // File doesn't exist
        console.log("Error...");
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        console.log("Error...permission");
        break;

      case 'storage/canceled':
        // User canceled the upload
        console.log("Error...cancelled");
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        console.log("Error...unknown");
        break;
      default:
        console.log("Default...", error);
        break;
      }
    });
  }
  console.log("IMAGE:", image);



  // try {
  //   var fileName = firstname.toLowerCase()
  //   console.log("fileName:", fileName);
  //   // var imageName = require(`../images/${fileName}.jpg`)
  //   var imageName = "https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=91d597d7-34ff-44e6-b879-a5e7fe160473";
  // }
  // catch(err) {
  //   console.log("Err:", err);
  //   var imageName = require(`../images/ryan.png`)
  // }

  // if (imageName === undefined) {
  //   imageName = require(`../images/ryan.png`)
  // };

  return (
    <div>
      <img className={picStyle} src={image} />
    </div>
  );

};

export default PersonImage;
