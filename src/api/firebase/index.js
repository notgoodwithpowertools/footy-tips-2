import firebase from 'firebase';

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("authDomain", process.env.REACT_APP_AUTH_DOMAIN);


try {

  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  };

  console.log("Firebase config:", config);
  firebase.initializeApp(config);


} catch (e) {

}



export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export var firebaseStorageRef = firebase.storage().ref();
export default firebase;

/*
<script src="https://www.gstatic.com/firebasejs/3.5.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAh-YrgSMzMco2xB81nUar_TJwRKGGQB6c",
    authDomain: "aa-todo-app.firebaseapp.com",
    databaseURL: "https://aa-todo-app.firebaseio.com",
    storageBucket: "aa-todo-app.appspot.com",
    messagingSenderId: "677047813556"
  };
  firebase.initializeApp(config);
</script>
*/
