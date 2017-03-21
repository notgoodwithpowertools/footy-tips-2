
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
    default:
      return state;
  }

};
