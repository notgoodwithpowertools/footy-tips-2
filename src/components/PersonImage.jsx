import React from 'react';
import * as Redux from 'react-redux';

import '../css/player.css';
import { firebaseStorageRef } from '../api/firebase/index.js';

class PersonImage extends React.Component {

  constructor (props) {
    super(props);
    // var { user } = props;
    this.state = ({imageName: undefined });
    this.getImage = this.getImage.bind(this);
    // this.getImage();
  }

  getImage (user) {
    console.log("getImage...");
    // var { user } = this.props;

    if (user !== undefined) {
      var fileName = user.firstname + '.jpg';
      var imageRef = firebaseStorageRef.child('userimages/' + fileName);
      imageRef.getDownloadURL().then((url) => {
        // this.state.imageName = url;
        console.log("Setting state...");
        this.setState({imageName: url});
        return url;

      }).catch(function(err) {
            console.log("Error...");
        });
    }
    else {
      this.setState({imageName: undefined});
      // return undefined;
    }
  }

  componentWillMount () {
    var { user } = this.props;

    try {
      var fileName = user.firstname.toLowerCase();
      console.log("fileName:", fileName);
      var imageName = require(`../images/${fileName}.png`);
      this.getImage(user);
      // this.setState({imageName: imageName});

    }
    catch(err) {
      console.log("Err:", err);
      imageName = require(`../images/ryan.png`);
      this.setState({imageName: imageName});
    }
  }

  render () {

    var { user } = this.props;

    var picStyle = {
      height: '80px',
      width: '80px'
    }
    var imageName = this.state.imageName;
    if (imageName === undefined) {
      imageName = require(`../images/ryan.png`)
    }
    console.log("Render PersonImage...", user.firstname);


    return (
      <div>
        <img style={picStyle} src={imageName} alt={require('../images/george.png')}/>
      </div>
    );
  }

};

export default Redux.connect(
  (state) => {
    return {
      user: state.user
    };
    //return state;
  }
)(PersonImage);
