import React from 'react';
// import GamePanel from './GamePanel.jsx';
import TeamSelect from './TeamSelect.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
// import { filterGames } from '../actions/game-actions.js';

export class GameAdmin extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {games: []};
    // this.loadGames = this.loadGames.bind(this);
    // this.loadGames();
    this.round_num = props.round;
  }

  handleClick () {
    console.log("handleClick...");
    console.log("Home:", this.state.home);
    console.log("Away:", this.state.away);
    console.log("Round:", this.round_num);


  }

  handleSelect (name, id) {
    // var game = {
    //
    //
    // }
    // var team = name;

    this.setState({[name]: id});
  }


  render () {

    return (
      <div>
        <h4>Admin Panel</h4>
        <TeamSelect name="home" onSelect={this.handleSelect.bind(this)}/>
        <TeamSelect name="away" onSelect={this.handleSelect.bind(this)}/>
        <button className="button2" onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    )
  }


} // end -- GameAdmin

module.exports = GameAdmin;
