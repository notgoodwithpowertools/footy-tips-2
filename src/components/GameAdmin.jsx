import React from 'react';
import { connect } from 'react-redux';
// import GamePanel from './GamePanel.jsx';
import TeamSelect from './TeamSelect.jsx';
import NumSelect from './NumSelect.jsx';
import DateTime from './DateTime.jsx';
// import { firebaseRef } from '../api/firebase/index.js';
import { addGame } from '../actions/game-actions.js';
import '../css/adminpanel.css';

export class GameAdmin extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {games: []};
    // this.loadGames = this.loadGames.bind(this);
    // this.loadGames();
    // this.round_num = props.round;
    var d = new Date();
    // Convert to Milliseconds
    d = d.getTime();
    // console.log("Milliseconds:", d);
    // var n = d.getTime();

    this.state = {home: 0, away: 0, venue: '', num: this.props.round_num, datetime: d};
    // this.state = {away: 0};

  }

  // componentWillMount () {
  //   console.log("GameAdmin componentWillMount...");
  //   // this.setState({num: this.props.round_num})
  // }

  // componentDidUpdate () {
  //   console.log("GameAdmin componentDidUpdate...");
  //   // this.setState({num: this.props.round_num});
  //   console.log("this.state.num", this.state.num);
  // }

  handleClick () {
    // var { round_num } = this.props;
    // console.log("Refs:", this.refs.venue.value);
    // this.setState({venue: this.refs.venue.value})
    // console.log("handleClick...");
    // console.log("Home:", typeof(this.state.home));
    // console.log("Away:", this.state.away);
    // console.log("Round:", round_num);
    // console.log("Admin Round to Add:", this.state.num);
    var aGame = {home_team_id: Number(this.state.home),
                 away_team_id: Number(this.state.away),
                 round_num: this.state.num,
                 venue: this.refs.venue.value,
                 datestamp: Number(this.state.datetime)};
    addGame(aGame);
  }

  handleSelect (name, id) {
    // Use a dynamic object key using the [] syntax
    this.setState({[name]: id});
  }

  // updateInputValue: function(evt) {
  // updateInputValue (evt) {
  //   console.log("Event:", evt);
  //   this.setState({
  //     venue: evt.target.value
  //   });
  // }

  // handleInc () {
  //   console.log("INCREMENT");
  // }

  handleNumChange (num) {
    // console.log("handleAdminRound ...", num);
    if ((this.state.num === 1) && (num < 0)) {
      this.setState({num: 1});
    }
    else {
      this.setState({num: this.state.num + num});
    }
    // console.log("Num:",this.state.num);
  }

  handleOnChange (aDate) {
    // aDate = aDate.getMilliseconds();
    // console.log("GameAdmin:handleOnChange..." + aDate);

    this.setState({datetime: aDate});
    // console.log("New Date:", this.state.datetime);
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
    // var { round_num } = this.props;
    // var d = new Date();
    // var n = d.getTime();

    return (
      <div className='adminPanel'>
        <h4>Admin Panel</h4>
        <NumSelect num={this.state.num} handleNumChange={this.handleNumChange.bind(this)}/>
        <input type="text" ref="venue" name="venue" className="venue" placeholder="Venue..."></input>
        <DateTime datetime={this.state.datetime} onChange={this.handleOnChange.bind(this)}/>
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
