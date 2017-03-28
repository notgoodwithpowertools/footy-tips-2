var React = require('react');

import '../css/numbercircle.css';
import '../css/player.css';
//import andrewimg from '../images/george.png';
//import ryanimg from '../images/ryan.png';

//var moment = require('moment');

//var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Player extends React.Component {

  render () {

    var {name, score, rank} = this.props;

    console.log("name:", name);
    /*
    var getImage = (aname) => {
      if (eval((aname + 'img').toLowerCase()) === undefined ) {
        return ryanimg;
      } else {
          return (eval(name + 'img'));
      }
    }

    var image = getImage(name);

    console.log("image:", image); */
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();
    // var imageName = 'harry';
    try {
      var fileName = name.toLowerCase()
      console.log("fileName:", fileName);
      var imageName = require(`../images/${fileName}.png`)

    }
    catch(err) {
      console.log("Err:", err);
      imageName = require(`../images/ryan.png`)
    }

    return (

      <div className='playerRow'>
        {/* <div className='details'><div className='numbercircle'>{rank}</div><img src={require(`../images/${imageName}.png`) } alt={require('../images/george.png') }/><p className='player'>{name}</p></div> */}
        <div className='details'><div className='numbercircle'>{rank}</div><img className='pic' src={ imageName } alt={require('../images/george.png') }/><p className='player'>{name}</p></div>
        <div className='total'><div className='totalBox'>{score}</div> </div>
      </div>

    )
  }
};

export default Player;
