import React from 'react';
// var { connect } = require('react-redux');
import { connect } from 'react-redux';
import '../css/numSelect.css';

// const NumSelect = ({onClick}) => {
export class NumSelect extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //
  //   // this.setRound = this.setRound.bind(this);
  //
  // }

  componentWillMount () {
    this.setState({num: this.props.round});
  }

  // componentDidMount () {
  //   this.setState({num: this.props.round});
  // }

  // increment () {
  //   // console.log("INCREMENT");
  //   this.setState({num: this.state.num + 1})
  // }
  //
  // decrement () {
  //   if (this.state.num === 1) {
  //     return;
  //   }
  //   this.setState({num: this.state.num - 1})
  // }

  render () {
    // var { round } = this.props;

    return (
      <div className='numSelect'>
        <button value={this.state.num - 1} className='numSelectButton' onClick={() => {this.props.handleNumChange(-1)}}>&#10094;</button>
        <button value={this.state.num} className='numSelectButton' >{this.props.num}</button>
        <button value={this.state.num + 1} className='numSelectButton' onClick={() => {this.props.handleNumChange(1)}}>&#10095;</button>
      </div>
    );
  }


};

// export default NumSelect;
export default connect(
  (state) => {
    return {
      // round: state.roundNum,
      // games: state.games
      // nextRoundNum: state.nextRoundNum
    };
    //return state;
  }

)(NumSelect);
