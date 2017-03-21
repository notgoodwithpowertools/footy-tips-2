import firebase, { firebaseRef, githubProvider} from '../api/firebase/index.js';

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid: uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then( () => {
      console.log("Logged out...");
    });
  };
};

export var startGitHubLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};


export var startEmailLogin = (email = "aqwerty543@gmail.com", password) => {
  return (dispatch, getState) => {
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //var testEmail = "aqwerty543@gmail.com";
    console.log("Email for login:", email);
    //var testPassword = "wally123";
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
    //firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};


export var registerUser = (email, password) => {
  return (dispatch, getState) => {
    var testEmail = "aqwerty543@gmail.com";
    var testPassword = "aqwerty543";
  /*return firebase.auth().createUserWithEmailAndPassword(testEmail, testPassword)
    .then(saveUser)
    .catch((error) => console.log('Oops - Error registering user:', error))*/
    firebase.auth().createUserWithEmailAndPassword(testEmail, testPassword).then((result) => {
      saveUser(result);
      console.log("Registration worked...", result);
    }, (error) => {
      console.log("Unable to register", error);
    });
  };
};

export function saveUser (user) {
  console.log("User:", user);
  return firebaseRef.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
