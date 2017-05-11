
export var authReducer = (state = '', action) => {

  switch (action.type) {
    case 'LOGIN':
      console.log("Logging in user...");
      return {
        uid: action.uid
      }
    case 'SET_USER_ADMIN':
      console.log("Setting user admin...");
      return {
        ...state,
        admin: action.admin
      }
    case 'LOGOUT':
      console.log("Logging out user...");
      return {};
    /*
    case 'ADD_USER':
      return {
        user: action.user
      }
    */
    default:
      return state;
  }

};

export var userReducer = (state = '', action) => {

  switch (action.type) {
    case 'ADD_USER':
      return {
        email: action.user.email,
        firstname: action.user.firstname,
        uid: action.user.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }

};

export var msgReducer = (state = '', action) => {

  switch (action.type) {
    case 'SET_MSG':
      return action.msg;
    case 'LOGOUT':
      return '';
    default:
      return state;
  }
}

export var leaderboardReducer = (state = '', action) => {

  switch (action.type) {
    case 'ADD_PLAYERS':
    console.log("Adding Players...");
    return [
      ...state,
      ...action.players
    ];
    case 'UPDATE_PLAYERS':
    console.log("Updating Players...");
    return [
      // ...state,
      ...action.players
    ];
    // case 'LOGOUT':
    // return state;

    default:
    return state;
  }

}

export var teamsReducer = (state = [], action) => {

  switch (action.type) {

    case 'LOAD_TEAMS':
      // console.log("LOAD_TEAMS... action.teams:", action.teams);
      return [
        // ...state,
        ...action.teams
      ];
    // case 'LOGOUT':
    //   return '';
    default:
      return state;
  }
};

export var gamesReducer = (state = [], action) => {
  switch (action.type) {

    case 'UPDATE_GAMES':
    console.log("UPDATE_GAMES: Updating games...");
      return [
        // ...state,
        ...action.games
      ];

    default:
      return state;
  }
};

export var tipsReducer = (state = [], action) => {
  switch (action.type) {

    case 'UPDATE_TIPS':
    console.log("UPDATE_TIPS: Updating tips...");
      return [
        // ...state,
        ...action.tips
      ];

    default:
      return state;
  }
};

export var roundNumReducer = (state = 3, action) => {

  switch (action.type) {
    case 'SET_ROUND_NUM':
      console.log("SET_ROUND_NUM: Setting round_num...", action.roundNum);
      return action.roundNum;

    default:
      return state;
  }

};

// export var addGameReducer = (state = '', action) => {
//
//   switch (action.type) {
//     case 'SET_HOME_TEAM':
//       console.log("SET_HOME_TEAM: Setting home_team...", action.id);
//       return {
//         ...state,
//         home_team: action.id
//       }
//     case 'SET_AWAY_TEAM':
//       console.log("SET_AWAY_TEAM: Setting away_team...", action.id);
//       return {
//         ...state,
//         away_team: action.id
//       }
//
//     default:
//       return state;
//   }
//
// }
