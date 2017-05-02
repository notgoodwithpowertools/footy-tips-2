import React from 'react';
import { connect } from 'react-redux';
// import GamePanel from './GamePanel.jsx';
import TeamSelect from './TeamSelect.jsx';
// import Image from './Image.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
import { addGame } from '../actions/game-actions.js';
import '../css/adminpanel.css';

export class GameAdmin extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {games: []};
    // this.loadGames = this.loadGames.bind(this);
    // this.loadGames();
    this.round_num = props.round;
    this.state = {home: 0, away: 0};
    // this.state = {away: 0};

  }

  handleClick () {
    var { round_num } = this.props;
    // console.log("handleClick...");
    // console.log("Home:", typeof(this.state.home));
    // console.log("Away:", this.state.away);
    // console.log("Round:", round_num);
    var aGame = {home_team_id: Number(this.state.home), away_team_id: Number(this.state.away), round_num: round_num};
    addGame(aGame);
  }

  handleSelect (name, id) {
    // Use a dynamic object key using the [] syntax
    this.setState({[name]: id});
  }


  render () {

    // try {
    //   // var fileName = name.toLowerCase()
    //   // console.log("fileName:", fileName);
    //   // var imageName = require(`../images/dots_circle.svg`)
    //   var imageName = require(`../logo.svg`)
    //
    // }
    // catch(err) {
    //   console.log("Err:", err);
    //   imageName = require(`../images/ryan.png`)
    // }
    /*
    <img src={imageName} alt={imageName}/>
    <Image src={imageName} width={50} height={50} mode='fit' />
      <Image src={imageName} width={50} height={50} mode='fit' />
    */

    return (
      <div className='adminPanel'>
        <h4>Admin Panel</h4>
        <TeamSelect name="home" onSelect={this.handleSelect.bind(this)}/>
        <TeamSelect name="away" onSelect={this.handleSelect.bind(this)}/>
        <button className="adminButton" onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    )
  }


} // end -- GameAdmin

// module.exports = GameAdmin;
export default connect(
  (state) => {
    return {
      round_num: state.roundNum,
    };
    //return state;
  }

)(GameAdmin);
