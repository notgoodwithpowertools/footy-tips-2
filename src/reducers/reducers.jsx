
export var authReducer = (state = '', action) => {

  switch (action.type) {
    case 'LOGIN':
      console.log("Logging in user...");
      return {
        uid: action.uid
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
