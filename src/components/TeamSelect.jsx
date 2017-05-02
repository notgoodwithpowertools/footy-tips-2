import React from 'react';
import { connect } from 'react-redux';
// import '../css/teamselect.css';
// import '../css/select.css';
// import '../css/select2.css';
import '../css/select3.css';
// import { addGameSetTeam } from '../actions/game-actions.js';

// import { connect } from 'react-redux';

// import team_img from '../images/wbu.jpg';

// export const TeamSelect = ({name, teams}) => {
export class TeamSelect extends React.Component {

  handleChange (e) {
    e.preventDefault();
    // console.log("Team:", name);
    console.log("e:", e.target.value);
    // addGameSetTeam(name, e.target.value);
    // var { dispatch, name } = this.props;
    // var { name } = this.props;

    this.props.onSelect(this.props.name, e.target.value);
    // dispatch(addGameSetTeam(name, e.target.value));

    // export var addGameSetTeam = (name, id) => {
    //   console.log(`addGameSetTeam ... Setting ${name} team to id:${id}`);
    //   // console.log(`addGameSetTeam ... `);
    //   return (dispatch, getState) => {
    //
    //   };
    // };

  }
  // const { teams } = props;
  // console.log("myteams:", teams);
  // console.log("props:", props);
  // const teams = props.teams;
  // console.log("aTeams", teams);
  getTeamList () {

      // const {teams} = props;

      // console.log("getTeamList...");
      // console.log("teams:", teams);

      // const teams = [
      //   {id: 1, name:'Essendon'},
      //   {id: 2, name:'Brisbane'},
      //   {id: 3, name:'Carlton'}
      // ];

      var { teams, name } = this.props;
      // console.log("getTeamList teams:", teams);
      if (teams.length === 0) {
        return (
          <p>No Teams</p>
        )
      }
      else {
        return (
          <div><p>Select {name} team</p>
          <div className="select3">
          <span className="arr3"></span>

          <select onChange={this.handleChange.bind(this)}>

          { teams.map( (team) => {
            // console.log("loading team ... ", team.id);
            // if (team.id === 0) {
            //   return (
            //     <option key={team.id} value={Number(team.id)} >Select Team</option>
            //   )
            // }
            return (
              <option key={team.id} value={team.id} >{team.name}</option>
            )
          })}
          </select>
        </div>
        </div>
        )

      }
  }

  render () {

    return (
      <div>
        {this.getTeamList()}
      </div>
    );

  }

};
// TeamSelect.propTypes = {
//   teams: React.propTypes.array.isRequired
// };

// export default TeamSelect;
//
export default connect(
  (state) => {
    return {
      teams: state.teams
    };
    //return state;
  }

)(TeamSelect);

// export default connect()(TeamSelect);

/*
<div className="teamSelect">

    <div class="caret"></div>
<select>
  {getTeamList()}

</select>
</div>
*/
