import React from 'react';
// import Image from './Image.jsx';
import '../css/datetime.css';

// const DateTime = (props) => {
export class DateTime extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {games: []};
    // this.getGamePanels = this.getGamePanels.bind(this);
    // this.loadGames();
    // this.handleChange = this.handleChange.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleChangeHour = this.handleChangeHour.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);

  }

  // componentWillMount () {
  //   console.log("DateTime: componentWillMount ...");
  //   var d  = new Date(this.props.datetime);
  //   this.setState({day: d.getDate()});
  //   this.setState({month: d.getMonth() + 1});
  //   this.setState({year: d.getFullYear()});
  //   this.setState({hour: d.getHours()});
  //   this.setState({min: d.getMinutes()});
  //   this.setState({datestamp: this.props.datetime});
  //   this.setState({datestr: d.toString()});
  //
  // }

  // handleChange (event) {
    // console.log("Current state: datestamp:", this.state.datestamp);
    // console.log("Current state: datestamp:", this.props.datetime);
    // console.log("Handling the datetime change... values from input", event.target.name, event.target.value);

    // this.setState({[event.target.name]: event.target.value});
    // console.log("New Date vals: Month:", (this.state.month - 1) + " ,Day:", this.state.day + " ,HR:", this.state.hour + " MIN:", this.state.min);
    // var n = new Date(2017, (this.state.month - 1), this.state.day, this.state.hour, this.state.min, 0);
    // n = n.getTime();
    // console.log("N:", n.getTime() + " - date:", n.toDateString());
    // this.setState({datestamp: n});
    // this.props.onChange(n);
  // }
  handleChangeYear (event) {

    var d  = new Date(this.props.datetime);
    var n = new Date(event.target.value, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), 0);
    this.props.onChange(n);

  }

  handleChangeMonth (event) {
    // console.log("Current state: datestamp:", this.props.datetime);
    // console.log("Handling the datetime change... values from input", event.target.name, event.target.value);
    // console.log("New Date vals: Month:", (event.target.value - 1) + " ,Day:", this.state.day + " ,HR:", this.state.hour + " MIN:", this.state.min);
    var d  = new Date(this.props.datetime);
    var n = new Date(d.getFullYear(), (event.target.value - 1), d.getDate(), d.getHours(), d.getMinutes(), 0);
    // n = n.getTime();
    // console.log("N:", n.getTime() + " - date:", n.toDateString());
    // this.setState({datestamp: n});
    this.props.onChange(n);
  }

  handleChangeDay (event) {
    // console.log("Current state: datestamp:", this.props.datetime);
    var d  = new Date(this.props.datetime);
    // console.log("Handling the datetime change... values from input", event.target.name, event.target.value);
    // console.log("New Date vals: Month:", this.state.month + " ,Day:", event.target.value + " ,HR:", this.state.hour + " MIN:", this.state.min);
    var n = new Date(d.getFullYear(), d.getMonth(), event.target.value, d.getHours(), d.getMinutes(), 0);
    // n = n.getTime();
    // console.log("N:", n.getTime() + " - date:", n.toDateString());
    // this.setState({datestamp: n});
    this.props.onChange(n);
  }

  handleChangeHour (event) {
    var d  = new Date(this.props.datetime);
    // console.log("Handling the datetime change... values from input", event.target.name, event.target.value);
    // console.log("New Date vals: Month:", this.state.month + " ,Day:", event.target.value + " ,HR:", this.state.hour + " MIN:", this.state.min);
    var n = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.target.value, d.getMinutes(), 0);
    // n = n.getTime();
    // console.log("N:", n.getTime() + " - date:", n.toDateString());
    // this.setState({datestamp: n});
    this.props.onChange(n);
  }

  handleChangeMin (event) {
    var d  = new Date(this.props.datetime);
    // console.log("Handling the datetime change... values from input", event.target.name, event.target.value);
    // console.log("New Date vals: Month:", this.state.month + " ,Day:", event.target.value + " ,HR:", this.state.hour + " MIN:", this.state.min);
    var n = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), event.target.value, 0);
    // n = n.getTime();
    // console.log("N:", n.getTime() + " - date:", n.toDateString());
    // this.setState({datestamp: n});
    this.props.onChange(n);
  }

  // var style = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: '10px'
  //
  // };
  //
  // var textStyle = {
  //   margin: '5px',
  //   marginRight: '15px',
  //
  //   // paddingRight: '15px'
  // }
  //


  // return (
  //   <div style={style}>
  //     <Image src={src} />
  //     <p style={textStyle}>{text}</p>
  //   </div>
  // );
  render () {

    var d  = new Date(this.props.datetime);
    // console.log("d:", d.toString());
    // this.setState({day: d.getDate()});
    // this.setState({month: d.getMonth() + 1});
    // this.setState({year: d.getFullYear()});
    // this.setState({hour: d.getHours()});
    // this.setState({min: d.getMinutes()});
    // this.setState({datestamp: this.props.datetime});
    // this.setState({datestr: d.toString()});

    return (
      <div className='datetimepanel'>
        <p className='datetimeItem'>{d.toString()}</p>
        <div className='datetimeItem'>
          <input name='day' type='number' max='31' min='1' value={d.getDate()} onChange={ this.handleChangeDay }></input>
          &nbsp;- DD -&nbsp;
          <input name='month' type='number' max='12' min='1' value={d.getMonth()+1} onChange={ this.handleChangeMonth }></input>
          &nbsp;- MM -&nbsp;
          <input name='year' type='number' max='2035' min='2017' value={d.getFullYear()} onChange={ this.handleChangeYear }></input>
          &nbsp; - YYYY @ &nbsp;
          <input name='hour' type='number' max='23' min='1' value={d.getHours()} onChange={ this.handleChangeHour }></input>
          &nbsp;: HH &nbsp;
          <input name='min' type='number' max='59' min='0' value={d.getMinutes()} onChange={ this.handleChangeMin }></input>
          &nbsp;: MM
        </div>
      </div>
    )
  }
}

export default DateTime;
