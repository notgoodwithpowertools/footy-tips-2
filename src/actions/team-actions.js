import { firebaseRef } from '../api/firebase/index.js';

export var loadTeams = (teams) => {
  return {
    type: 'LOAD_TEAMS',
    teams: teams
  }
};


export var startLoadTeams = () => {
  console.log('startLoadTeams...');
  return (dispatch, getState) => {

    //Updated Firebase schema bu uid
    //var todosRef = firebaseRef.child('todos');
    // var uid = getState().auth.uid;
    var teamsRef = firebaseRef.child(`/teams`);

    return teamsRef.once('value').then((snapshot) => {
      var teams = snapshot.val() || {};
      // console.log('snapshot.val() teams', teams);
      var parsedTeams = [];

      //translate to an array
      Object.keys(teams).forEach( (teamId) => {
        parsedTeams.push({
          id: teamId,
          ...teams[teamId]
        });

      });
      // console.log('parsedTeams:', parsedTeams);
      dispatch(loadTeams(parsedTeams));
    });

  };
};
