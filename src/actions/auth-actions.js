import firebase, { firebaseRef, githubProvider} from '../api/firebase/index.js';
import { setMsg } from './msg-actions';
// export var login = (uid) => {
//   return {
//     type: 'LOGIN',
//     uid: uid
//   };
// };
/*
export var setMsg = (msg) => {
  console.log("setting message:", msg);
  return {
    type: 'SET_MSG',
    msg: msg
  };
};
*/
export var login = (uid) => {
  // console.log("login action...");
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

export var addUser = (user) => {
  return {
    type: 'ADD_USER',
    user: user
  };
};

export var startAddUser = () => {
  return (dispatch, getState) => {
    //var todoRef = firebaseRef.child('todos/' + id);
    // Using ES6 template strings

    //Updated Firebase schema bu uid
    //var todoRef = firebaseRef.child(`todos/${id}`);
    var uid = getState().auth.uid;
    console.log("startAddUser:", uid);
    var userRef = firebaseRef.child(`users/${uid}/info`);
    // console.log("userRef:", userRef.value);
    userRef.once("value", function(data) {
      // do some stuff once
      console.log("User Info Data:", data.val());
      dispatch(addUser(data.val()));
    });

    /*
    var updates = {
      uid: uid,
      email: email,
      firstname: firstname
    };
    return userRef.update(updates).then( () => {
      dispatch(login(updates));
    });
    */

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


export var startEmailLogin = (email = "aqwerty543@gmail.com", password = "wally123") => {
  return (dispatch, getState) => {
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    //var testEmail = "aqwerty543@gmail.com";
    console.log("Email for login:", email);
    //var testPassword = "wally123";
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
    //firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked...", result);

      startAddUser();
    }, (error) => {
      console.log("Unable to auth", error);
      console.log("Error:", error.message);
      dispatch(setMsg(error.message));

    });
  };
};


export var registerUser = (email, password, firstname) => {
  return (dispatch, getState) => {
    //var testEmail = "aqwerty543@gmail.com";
    //var testPassword = "aqwerty543";
  /*return firebase.auth().createUserWithEmailAndPassword(testEmail, testPassword)
    .then(saveUser)
    .catch((error) => console.log('Oops - Error registering user:', error))*/
    console.log("registerUser:", email + " password:", password + " firstname:", firstname);
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      saveUser(result, firstname);
      console.log("Registration worked...", result);
    }, (error) => {
      console.log("Unable to register", error);
    });
  };
};

export function saveUser (user, firstname) {
  console.log("Save User:", user);
  return firebaseRef.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      firstname: firstname
    })
    .then(() => user)
}

export var setUserAdmin = (admin) => {
  return {
    type: 'SET_USER_ADMIN',
    admin: admin
  };
};

export var monitorRole = (uid) => {
  return (dispatch, getState) => {
    var adminRef = firebaseRef.child(`admins/${uid}`);
    adminRef.on('value', snap => {

      console.log("snap.val() admin value", snap.val());
      var isAdmin = snap.val()
      if (isAdmin) {
        console.log("User has role of Admin");
      }
      else {
        console.log("User is NOT an Admin");
      }
      dispatch(setUserAdmin(isAdmin));
    });
  }
};
