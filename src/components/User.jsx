import React from 'react';
import * as Redux from 'react-redux';
import { firebaseStorageRef } from '../api/firebase/index.js';
import '../css/userpanel.css';
import PersonImage2 from './PersonImage2.jsx';
import { setUserImgDB } from '../actions/auth-actions.js';
// import logo from '../svg/logo.svg';

// const User = () => {
export class User extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {games: []};
    // this.getGamePanels = this.getGamePanels.bind(this);
    // this.loadGames();
    // this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.getUserImage = this.getUserImage.bind(this);
    //var defaultImageName = require(`../images/ryan.png`)
    // this.state = {imageName: undefined};

  }

  handleChange (event) {
    var { user }  = this.props;

    console.log("Event", event);
    // console.log("Files:", event.target.files[0]);
    var aFile = event.target.files[0];
    console.log("aFile:", aFile);
    var fileExt = aFile.name.split('.').pop()
    console.log("aFile type:", fileExt);
    // var userImagesRef = firebaseStorageRef.child('userimages/' + user.firstname + '.jpg');
    var userImagesRef = firebaseStorageRef.child('userimages/' + user.firstname + '.' + fileExt);
    // var storageRef = firebase.storage().ref('img/'+file.name);
    // Promise.resolve(aFile).then((aFile) => {
    //   console.log("Hello:", aFile);
    //   var userImagesRef2 = firebaseStorageRef.child('userimages/' + user.firstname + '.jpg');
    //   console.log("Ref:", userImagesRef2);
    // });


    var task = userImagesRef.put(aFile);
    task.on('state_changed',
      function progress (snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("%:", percentage);
        console.log("In progress");
        // var downloadURL = snapshot.downloadURL;
        // console.log("downloadURL:", downloadURL);

      },
      function error () {
        console.log("Error");
      },
      function complete () {
        console.log("Upload complete");
        var downloadURL = task.snapshot.downloadURL;
        console.log("downloadURL:", downloadURL);
        // user.imageURL = downloadURL;
        // console.log("Completed file upload to user:", user);
        setUserImgDB(user, downloadURL);

      }
    );
  }
/*
  componentWillMount () {
    var { user }  = this.props;
    var getImgUrl = (imageRef) =>  {
      return imageRef.getDownloadURL().then(function(url) {
        console.log("url:", url);
        return url;
      }).catch(function(error) {
        // Handle any errors here
        console.log("Error...");
      });
    }
    //
    console.log("User ... componentWillMount...Name:", user.firstname);
    //
    // var imageName = require(`../images/ryan.png`)
    //
    if (user !== '') {
      console.log("We have a user:", user.firstname);
      var fileName = user.firstname + '.jpg';
      var imageRef = firebaseStorageRef.child('userimages/' + fileName);
    // //   // var fileName = 'wally3.jpg';

      console.log("imageRef:", imageRef);
      // var userFileRef = imagesRef.child(fileName);
      // console.log("userFileRef:", userFileRef);
      // var imageName = userFileRef.getDownloadURL();
      // console.log("imageName:", imageName);
      // imageName = 'https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=a6ab547b-9464-4d56-9143-15b60a1f424b';
      // this.setState({imageName: 'https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=91d597d7-34ff-44e6-b879-a5e7fe160473'})



    //
    //   var imageName = imageRef.getDownloadURL().then(function(url) {
    //     // Insert url into an <img> tag to "download"
    //
    //     // this.setState({imageName: url});
    //     console.log("imageName URL:", url);
    //     console.log("Setting image download...");
    //
    //     return url;
    //     }).catch(function(error) {
    //
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/object_not_found':
    //         // File doesn't exist
    //         console.log("Error...");
    //         break;
    //
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         console.log("Error...permission");
    //         break;
    //
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         console.log("Error...cancelled");
    //         break;
    //
    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect the server response
    //         console.log("Error...unknown");
    //         break;
    //       default:
    //         console.log("Default...", error);
    //         break;
    //     }
    //   });
    // }

    // imageName = imageRef.getDownloadURL();
    var imageName = getImgUrl(imageRef)
    console.log("IMAGENAME:", imageName);
    this.setState({imageName: imageName});
    console.log("imageName2:", user.firstname);


    // this.setState({userImageURL: userFileRef.getDownloadURL()});
    // this.setState({userImageURL: imageName});
  }
}
*/
  // getUserImage () {
  //   var { user } = this.props;
  //   // var imageName = require(`../images/ryan.png`);
  //   var imageName = logo;
  //   console.log("Getting user image...");
  //   // if (user.image === 'custom') {
  //   //   console.log("Custom image...");
  //   // }
  //   // else {
  //   //   console.log("Default image...");
  //   // }
  //   // return logo;
  //   return "https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=a6ab547b-9464-4d56-9143-15b60a1f424b";
  // }

  render () {

    var { user }  = this.props;

  // var imageName = require(`../images/ryan.png`)
  //
  // console.log("User render:", this.state.imageName);
  //
  // if (this.state.imageName === 'default') {
  //   console.log("Default user image...");
  // }
  // else {
  //   console.log("Custom image...");
  //
  // }


  // var imagesRef = firebaseStorageRef.child('userimages');
  //
  // var fileName = 'wally3.jpg';
  // var userFileRef = imagesRef.child(fileName);

  // // var upLoadFile = new File(logo);
  // // imagesRef.put(upLoadFile);
  // console.log("Storage reference:", userFileRef.fullPath);
  // var imageName = "https://firebasestorage.googleapis.com/v0/b/footytips-dev.appspot.com/o/userimages%2Fwally3.jpg?alt=media&token=91d597d7-34ff-44e6-b879-a5e7fe160473";
  // var imageName = undefined;

  return (
    <div className='userpanel'>
      <h3>Email: </h3>
      <p>{user.email}</p>
      <h3>User Name:</h3>
      <p>{user.firstname}</p>
      {/* }<img src={this.getUserImage()} alt={require('../images/george.png') }/> */}
      <h3>Image:</h3>
      <PersonImage2 imageURL={user.imageURL} />
      Change image
      <input type='file' name='img' accept='.gif,.jpg,.jpeg,.png' onChange={ this.handleChange }/>

    </div>
  )
  }

};

export default Redux.connect(
  (state) => {
    return {
      user: state.user
    };
    //return state;
  }

)(User);

// export default User;
