var React = require('react');
//var moment = require('moment');

//var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
export class Player extends React.Component {

  render () {

    var {id, name, score} = this.props;
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();

    return (
      <div>
        <p>id:{id}, Name:{name}, Score:{score} </p>
      </div>
    )
  }
};

export default Player;
