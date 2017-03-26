var admin = require("firebase-admin");
var firebase = require("firebase");
var env = require('node-env-file');

// Fetch the service account key JSON file contents
var serviceAccount = require('../config/FootyTips-Dev-3344885189d2.json');


// Load any undefined ENV variables form a specified file.
env('../config/development.env');

try {

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    credential: admin.credential.cert(serviceAccount),
  };


} catch (e) {

}


// Initialize the app with a service account, granting admin privileges
/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL
});
*/
admin.initializeApp(config);
//firebase.auth()

admin.auth().createUser({
  uid: "aqwerty001",
  email: "aqwerty543@gmail.com"
})
.then(function(userRecord) {
    // A UserRecord representation of the newly created user is returned
    console.log("Successfully created new user:", userRecord.uid);
    console.log("Successfully created new user:", userRecord.email);
    console.log("Successfully created new user:", userRecord.isAnonymous);
    console.log("Successfully created new user:", userRecord.emailVerified);
    //userRecord.sendEmailVerification()
})
.catch(function(error) {
    console.log("Error creating new user:", error);
});

/*
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});
*/


// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref();
var teamsRef = db.ref('/teams');

//var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
/*
ref.resetPassword({
  email: "aqwerty543@gmail.com"
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        break;
      default:
        console.log("Error resetting password:", error);
    }
  } else {
    console.log("Password reset email sent successfully!");
  }
});
*/



/*
ref.once("value", function(snapshot) {
  console.log("Hello", snapshot.val());
});
*/

console.log('++++++++++++++++++++++++++');
const teams = [
  {
    name: 'Adelaide',
    nickname: 'Crows',
    sname: 'ADE'
  },
  {
    name: 'Brisbane',
    nickname: 'Bears',
    sname: 'BRI'
  },
  {
    name: 'Carlton',
    nickname: 'Blues',
    sname: 'CAR'
  },
  {
    name: 'Collingwood',
    nickname: 'Magpies',
    sname: 'COL'
  },
  {
    name: 'Essendon',
    nickname: 'Bombers',
    sname: 'ESS'
  },
  {
    name: 'Fremantle',
    nickname: 'Dockers',
    sname: 'FRE'
  },
  {
    name: 'Geelong',
    nickname: 'Cats',
    sname: 'GEE'
  },
  {
    name: 'Gold Coast',
    nickname: 'Suns',
    sname: 'GCS'
  },
  {
    name: 'Greater Western Sydney',
    nickname: 'Giants',
    sname: 'GWS'
  },
  {
    name: 'Hawthorn',
    nickname: 'Hawks',
    sname: 'HAW'
  },
  {
    name: 'Melbourne',
    nickname: 'Demons',
    sname: 'MEL'
  },
  {
    name: 'North Melbourne',
    nickname: 'Kangaroos',
    sname: 'NTH'
  },
  {
    name: 'Port Adelaide',
    nickname: 'Power',
    sname: 'PTA'
  },
  {
    name: 'Richmond',
    nickname: 'Tigers',
    sname: 'RIC'
  },
  {
    name: 'St Kilda',
    nickname: 'Saints',
    sname: 'STK'
  },
  {
    name: 'Sydney',
    nickname: 'Swans',
    sname: 'SYD',

  },
  {
    name: 'West Coast',
    nickname: 'Eagles',
    sname: 'WCE',
  },
  {
    name: 'Western Bulldogs',
    nickname: 'BEARS!!!',
    sname: 'WBU',
  }
];

//var dataRef = firebaseRef.child(`/teams`).set(teams);
//var dataRef = firebaseRef.child(`/teams`);

//dataRef.set(teams, function(error) {


teamsRef.set(teams, function(error) {
  if (error) {
    console.log("Teams data could not be saved.", error);
  } else {
    console.log("Teams data saved successfully.");
    /*ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });*/
  }
});

var games = [
  {
    "id": 0,
    'round_num': 'Round 1',
    "home_team_id": 0,
    "away_team_id": 1,
    "venue_id": 1,
    "time": null,
    "result_team_id": null
  },
  {
    "id": 1,
    'round_num': 'Round 1',
    "home_team_id": 2,
    "away_team_id": 3,
    "venue_id": 2,
    "time": null,
    "result_team_id": 3
  },
  {
    "id": 11,
    'round_num': 'Round 2',
    "home_team_id": 2,
    "away_team_id": 3,
    "venue_id": 2,
    "time": null,
    "result_team_id": 3
  },
  {
    "id": 12,
    'round_num': 'Round 3',
    "home_team_id": 3,
    "away_team_id": 4,
    "venue_id": 3,
    "time": null,
    "result_team_id": 4
  },
  {
    "id": 26,
    'round_num': 'Round 3',
    "home_team_id": 6,
    "away_team_id": 5,
    "venue_id": 3,
    "time": null,
    "result_team_id": 5
  },
  {
    "id": 56,
    'round_num': 'Grand Final',
    "home_team_id": 4,
    "away_team_id": 5,
    "venue_id": 1,
    "time": null,
    "result_team_id": 5
  }

];

var gamesRef = db.ref('/games');

gamesRef.set(games, function(error) {
  if (error) {
    console.log("Games data could not be saved.", error);
  } else {
    console.log("Games data saved successfully.");
    /*ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    }); */
  }
});


var tips = [
  {
    "tip_id": 1,
    'user_id': 1,
    "game_id": 1,
    "tip_team_id": 1,
    "tip_result": 1
  },
  {
    "tip_id": 2,
    'user_id': 1,
    "game_id": 2,
    "tip_team_id": 3,
    "tip_result": 0
  },
  {
    "tip_id": 3,
    'user_id': 2,
    "game_id": 1,
    "tip_team_id": 2,
    "tip_result": 0
  },
  {
    "tip_id": 4,
    'user_id': 3,
    "game_id": 11,
    "tip_team_id": 2,
    "tip_result": 0
  },
  {
    "tip_id": 5,
    'user_id': 2,
    "game_id": 26,
    "tip_team_id": 5,
    "tip_result": 1
  }
];




var tipsRef = db.ref('/tips');

tipsRef.set(tips, function(error) {
  if (error) {
    console.log("Tips data could not be saved.", error);
  } else {
    console.log("Tips data saved successfully.");
    /*ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });*/
  }
});



ref.once("value", function(snapshot) {
  console.log('Finish...', snapshot.val());
});
