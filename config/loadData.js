var admin = require("firebase-admin");
var firebase = require("firebase");
var env = require('node-env-file');
var Time = require('./date-actions.js');

// Fetch the service account key JSON file contents
// var serviceAccount = require('./FootyTips-Dev-203df7e03e29.json');
var serviceAccount = require('../../../Downloads/footytips-dev-firebase-adminsdk-ozaty-f0916a38c8.json');
// config/FootyTips-Prod-0c7373417381.json

// Load any undefined ENV variables form a specified file.
env('./local.env');

console.log("process.env.DATABASE_URL:", process.env.DATABASE_URL);

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

var games = [
    {
       "id":0
      ,"round_num":1
      ,"home_team_id":2
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:20 pm"))
    },
    {
       "id":1
      ,"round_num":1
      ,"home_team_id":2
      ,"away_team_id":13
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:20 pm"))
    },
    {
       "id":2
      ,"round_num":1
      ,"home_team_id":3
      ,"away_team_id":17
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:50 pm"))
    },
    {
       "id":3
      ,"round_num":1
      ,"home_team_id":14
      ,"away_team_id":10
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "4:35 pm"))
    },
    {
       "id":4
      ,"round_num":1
      ,"home_team_id":15
      ,"away_team_id":12
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "4:35 pm"))
    },
    {
       "id":5
      ,"round_num":1
      ,"home_team_id":7
      ,"away_team_id":1
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:25 pm"))
    },
    {
       "id":6
      ,"round_num":1
      ,"home_team_id":4
      ,"away_team_id":9
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/26/2017", "7:25 pm"))
    },
    {
       "id":7
      ,"round_num":1
      ,"home_team_id":11
      ,"away_team_id":16
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("3/26/2017", "1:10 pm"))
    },
    {
       "id":8
      ,"round_num":1
      ,"home_team_id":0
      ,"away_team_id":8
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("3/26/2017", "3:20 pm"))
    },
    {
       "id":9
      ,"round_num":1
      ,"home_team_id":5
      ,"away_team_id":6
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("3/30/2017", "7:40 pm"))
    },
    {
       "id":10
      ,"round_num":2
      ,"home_team_id":13
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/31/2017", "7:20 pm"))
    },
    {
       "id":11
      ,"round_num":2
      ,"home_team_id":17
      ,"away_team_id":15
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/1/2017", "7:50 pm"))
    },
    {
       "id":12
      ,"round_num":2
      ,"home_team_id":9
      ,"away_team_id":0
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/1/2017", "1:45 pm"))
    },
    {
       "id":13
      ,"round_num":2
      ,"home_team_id":8
      ,"away_team_id":7
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/1/2017", "4:35 pm"))
    },
    {
       "id":14
      ,"round_num":2
      ,"home_team_id":1
      ,"away_team_id":4
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("4/1/2017", "7:25 pm"))
    },
    {
       "id":15
      ,"round_num":2
      ,"home_team_id":16
      ,"away_team_id":14
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/2/2017", "7:40 pm"))
    },
    {
       "id":16
      ,"round_num":2
      ,"home_team_id":6
      ,"away_team_id":11
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/2/2017", "1:10 pm"))
    },
    {
       "id":17
      ,"round_num":2
      ,"home_team_id":10
      ,"away_team_id":2
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/2/2017", "3:20 pm"))
    },
    {
       "id":18
      ,"round_num":2
      ,"home_team_id":12
      ,"away_team_id":5
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/7/2017", "4:40 pm"))
    },
    {
       "id":19
      ,"round_num":3
      ,"home_team_id":15
      ,"away_team_id":3
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "7:50 pm"))
    },
    {
       "id":20
      ,"round_num":3
      ,"home_team_id":11
      ,"away_team_id":8
      ,"venue":"Blundstone Arena"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "1:45 pm"))
    },
    {
       "id":21
      ,"round_num":3
      ,"home_team_id":13
      ,"away_team_id":16
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "2:10 pm"))
    },
    {
       "id":22
      ,"round_num":3
      ,"home_team_id":6
      ,"away_team_id":10
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "4:35 pm"))
    },
    {
       "id":23
      ,"round_num":3
      ,"home_team_id":12
      ,"away_team_id":0
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "7:40 pm"))
    },
    {
       "id":24
      ,"round_num":3
      ,"home_team_id":5
      ,"away_team_id":17
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/8/2017", "7:40 pm"))
    },
    {
       "id":25
      ,"round_num":3
      ,"home_team_id":14
      ,"away_team_id":1
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/9/2017", "1:10 pm"))
    },
    {
       "id":26
      ,"round_num":3
      ,"home_team_id":2
      ,"away_team_id":4
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/9/2017", "3:20 pm"))
    },
    {
       "id":27
      ,"round_num":3
      ,"home_team_id":7
      ,"away_team_id":9
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/9/2017", "4:40 pm"))
    },
    {
       "id":28
      ,"round_num":4
      ,"home_team_id":16
      ,"away_team_id":15
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/13/2017", "8:10 pm"))
    },
    {
       "id":29
      ,"round_num":4
      ,"home_team_id":11
      ,"away_team_id":17
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/14/2017", "4:20 pm"))
    },
    {
       "id":30
      ,"round_num":4
      ,"home_team_id":10
      ,"away_team_id":5
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/15/2017", "1:45 pm"))
    },
    {
       "id":31
      ,"round_num":4
      ,"home_team_id":8
      ,"away_team_id":12
      ,"venue":"Manuka Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/15/2017", "4:35 pm"))
    },
    {
       "id":32
      ,"round_num":4
      ,"home_team_id":2
      ,"away_team_id":7
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/15/2017", "7:25 pm"))
    },
    {
       "id":33
      ,"round_num":4
      ,"home_team_id":0
      ,"away_team_id":4
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/15/2017", "7:40 pm"))
    },
    {
       "id":34
      ,"round_num":4
      ,"home_team_id":3
      ,"away_team_id":14
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/16/2017", "3:20 pm"))
    },
    {
       "id":35
      ,"round_num":4
      ,"home_team_id":1
      ,"away_team_id":13
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("4/16/2017", "4:40 pm"))
    },
    {
       "id":36
      ,"round_num":4
      ,"home_team_id":9
      ,"away_team_id":6
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/17/2017", "3:20 pm"))
    },
    {
       "id":37
      ,"round_num":5
      ,"home_team_id":12
      ,"away_team_id":2
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/21/2017", "7:50 pm"))
    },
    {
       "id":38
      ,"round_num":5
      ,"home_team_id":17
      ,"away_team_id":1
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/22/2017", "1:45 pm"))
    },
    {
       "id":39
      ,"round_num":5
      ,"home_team_id":7
      ,"away_team_id":0
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/22/2017", "4:35 pm"))
    },
    {
       "id":40
      ,"round_num":5
      ,"home_team_id":15
      ,"away_team_id":8
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("4/22/2017", "7:25 pm"))
    },
    {
       "id":41
      ,"round_num":5
      ,"home_team_id":5
      ,"away_team_id":11
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/22/2017", "7:40 pm"))
    },
    {
       "id":42
      ,"round_num":5
      ,"home_team_id":14
      ,"away_team_id":6
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/23/2017", "3:20 pm"))
    },
    {
       "id":43
      ,"round_num":5
      ,"home_team_id":9
      ,"away_team_id":16
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/23/2017", "4:40 pm"))
    },
    {
       "id":44
      ,"round_num":5
      ,"home_team_id":13
      ,"away_team_id":10
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/24/2017", "7:25 pm"))
    },
    {
       "id":45
      ,"round_num":5
      ,"home_team_id":4
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/25/2017", "3:20 pm"))
    },
    {
       "id":46
      ,"round_num":6
      ,"home_team_id":8
      ,"away_team_id":17
      ,"venue":"Manuka Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/28/2017", "7:50 pm"))
    },
    {
       "id":47
      ,"round_num":6
      ,"home_team_id":9
      ,"away_team_id":14
      ,"venue":"University of Tasmania Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/29/2017", "1:45 pm"))
    },
    {
       "id":48
      ,"round_num":6
      ,"home_team_id":2
      ,"away_team_id":15
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/29/2017", "2:10 pm"))
    },
    {
       "id":49
      ,"round_num":6
      ,"home_team_id":1
      ,"away_team_id":12
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("4/29/2017", "4:35 pm"))
    },
    {
       "id":50
      ,"round_num":6
      ,"home_team_id":11
      ,"away_team_id":7
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/29/2017", "7:25 pm"))
    },
    {
       "id":51
      ,"round_num":6
      ,"home_team_id":16
      ,"away_team_id":5
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/29/2017", "8:10 pm"))
    },
    {
       "id":52
      ,"round_num":6
      ,"home_team_id":4
      ,"away_team_id":10
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("4/30/2017", "1:10 pm"))
    },
    {
       "id":53
      ,"round_num":6
      ,"home_team_id":6
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("4/30/2017", "3:20 pm"))
    },
    {
       "id":54
      ,"round_num":6
      ,"home_team_id":0
      ,"away_team_id":13
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("4/30/2017", "4:40 pm"))
    },
    {
       "id":55
      ,"round_num":7
      ,"home_team_id":14
      ,"away_team_id":8
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/5/2017", "7:50 pm"))
    },
    {
       "id":56
      ,"round_num":7
      ,"home_team_id":11
      ,"away_team_id":0
      ,"venue":"Blundstone Arena"
      ,"datestamp": Number(Time.getTimeStamp("5/6/2017", "1:45 pm"))
    },
    {
       "id":57
      ,"round_num":7
      ,"home_team_id":3
      ,"away_team_id":2
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/6/2017", "2:10 pm"))
    },
    {
       "id":58
      ,"round_num":7
      ,"home_team_id":12
      ,"away_team_id":16
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("5/6/2017", "4:35 pm"))
    },
    {
       "id":59
      ,"round_num":7
      ,"home_team_id":7
      ,"away_team_id":6
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/6/2017", "7:25 pm"))
    },
    {
       "id":60
      ,"round_num":7
      ,"home_team_id":17
      ,"away_team_id":13
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/6/2017", "7:25 pm"))
    },
    {
       "id":61
      ,"round_num":7
      ,"home_team_id":15
      ,"away_team_id":1
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("5/7/2017", "1:10 pm"))
    },
    {
       "id":62
      ,"round_num":7
      ,"home_team_id":10
      ,"away_team_id":9
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/7/2017", "3:20 pm"))
    },
    {
       "id":63
      ,"round_num":7
      ,"home_team_id":5
      ,"away_team_id":4
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/7/2017", "4:40 pm"))
    },
    {
       "id":64
      ,"round_num":8
      ,"home_team_id":16
      ,"away_team_id":17
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/12/2017", "8:10 pm"))
    },
    {
       "id":65
      ,"round_num":8
      ,"home_team_id":9
      ,"away_team_id":1
      ,"venue":"University of Tasmania Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/13/2017", "1:45 pm"))
    },
    {
       "id":66
      ,"round_num":8
      ,"home_team_id":14
      ,"away_team_id":2
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/13/2017", "2:10 pm"))
    },
    {
       "id":67
      ,"round_num":8
      ,"home_team_id":8
      ,"away_team_id":3
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/13/2017", "4:35 pm"))
    },
    {
       "id":68
      ,"round_num":8
      ,"home_team_id":4
      ,"away_team_id":6
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/13/2017", "7:25 pm"))
    },
    {
       "id":69
      ,"round_num":8
      ,"home_team_id":0
      ,"away_team_id":10
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("5/13/2017", "7:40 pm"))
    },
    {
       "id":70
      ,"round_num":8
      ,"home_team_id":13
      ,"away_team_id":5
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/14/2017", "1:10 pm"))
    },
    {
       "id":71
      ,"round_num":8
      ,"home_team_id":7
      ,"away_team_id":12
      ,"venue":"Jiangwan Sports Centre"
      ,"datestamp": Number(Time.getTimeStamp("5/14/2017", "3:20 pm"))
    },
    {
       "id":72
      ,"round_num":8
      ,"home_team_id":11
      ,"away_team_id":15
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/14/2017", "4:40 pm"))
    },
    {
       "id":73
      ,"round_num":9
      ,"home_team_id":6
      ,"away_team_id":17
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/19/2017", "7:50 pm"))
    },
    {
       "id":74
      ,"round_num":9
      ,"home_team_id":14
      ,"away_team_id":15
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/20/2017", "1:45 pm"))
    },
    {
       "id":75
      ,"round_num":9
      ,"home_team_id":8
      ,"away_team_id":13
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/20/2017", "4:35 pm"))
    },
    {
       "id":76
      ,"round_num":9
      ,"home_team_id":1
      ,"away_team_id":0
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("5/20/2017", "7:25 pm"))
    },
    {
       "id":77
      ,"round_num":9
      ,"home_team_id":3
      ,"away_team_id":9
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/20/2017", "7:25 pm"))
    },
    {
       "id":78
      ,"round_num":9
      ,"home_team_id":4
      ,"away_team_id":16
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/21/2017", "1:10 pm"))
    },
    {
       "id":79
      ,"round_num":9
      ,"home_team_id":10
      ,"away_team_id":11
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/21/2017", "3:20 pm"))
    },
    {
       "id":80
      ,"round_num":9
      ,"home_team_id":5
      ,"away_team_id":2
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/21/2017", "4:40 pm"))
    },
    {
       "id":81
      ,"round_num":10
      ,"home_team_id":6
      ,"away_team_id":12
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/25/2017", "7:20 pm"))
    },
    {
       "id":82
      ,"round_num":10
      ,"home_team_id":15
      ,"away_team_id":9
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("5/26/2017", "7:50 pm"))
    },
    {
       "id":83
      ,"round_num":10
      ,"home_team_id":17
      ,"away_team_id":14
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/27/2017", "1:45 pm"))
    },
    {
       "id":84
      ,"round_num":10
      ,"home_team_id":10
      ,"away_team_id":7
      ,"venue":"TIO Traeger Park"
      ,"datestamp": Number(Time.getTimeStamp("5/27/2017", "4:35 pm"))
    },
    {
       "id":85
      ,"round_num":10
      ,"home_team_id":13
      ,"away_team_id":4
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/27/2017", "7:25 pm"))
    },
    {
       "id":86
      ,"round_num":10
      ,"home_team_id":0
      ,"away_team_id":5
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("5/27/2017", "7:40 pm"))
    },
    {
       "id":87
      ,"round_num":10
      ,"home_team_id":3
      ,"away_team_id":1
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("5/28/2017", "1:10 pm"))
    },
    {
       "id":88
      ,"round_num":10
      ,"home_team_id":2
      ,"away_team_id":11
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/28/2017", "3:20 pm"))
    },
    {
       "id":89
      ,"round_num":10
      ,"home_team_id":16
      ,"away_team_id":8
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("5/28/2017", "4:40 pm"))
    },
    {
       "id":90
      ,"round_num":11
      ,"home_team_id":12
      ,"away_team_id":9
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("6/1/2017", "7:50 pm"))
    },
    {
       "id":91
      ,"round_num":11
      ,"home_team_id":6
      ,"away_team_id":0
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/2/2017", "7:50 pm"))
    },
    {
       "id":92
      ,"round_num":11
      ,"home_team_id":7
      ,"away_team_id":16
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/3/2017", "1:45 pm"))
    },
    {
       "id":93
      ,"round_num":11
      ,"home_team_id":8
      ,"away_team_id":4
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/3/2017", "4:35 pm"))
    },
    {
       "id":94
      ,"round_num":11
      ,"home_team_id":11
      ,"away_team_id":13
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/3/2017", "7:25 pm"))
    },
    {
       "id":95
      ,"round_num":11
      ,"home_team_id":5
      ,"away_team_id":3
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/4/2017", "4:40 pm"))
    },
    {
       "id":96
      ,"round_num":12
      ,"home_team_id":15
      ,"away_team_id":17
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("6/8/2017", "7:20 pm"))
    },
    {
       "id":97
      ,"round_num":12
      ,"home_team_id":0
      ,"away_team_id":14
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("6/9/2017", "7:50 pm"))
    },
    {
       "id":98
      ,"round_num":12
      ,"home_team_id":9
      ,"away_team_id":7
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/10/2017", "1:45 pm"))
    },
    {
       "id":99
      ,"round_num":12
      ,"home_team_id":1
      ,"away_team_id":5
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("6/10/2017", "4:35 pm"))
    },
    {
       "id":100
      ,"round_num":12
      ,"home_team_id":4
      ,"away_team_id":12
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/10/2017", "7:25 pm"))
    },
    {
       "id":101
      ,"round_num":12
      ,"home_team_id":2
      ,"away_team_id":8
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/11/2017", "3:20 pm"))
    },
    {
       "id":102
      ,"round_num":12
      ,"home_team_id":10
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/12/2017", "3:20 pm"))
    },
    {
       "id":103
      ,"round_num":13
      ,"home_team_id":16
      ,"away_team_id":6
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/15/2017", "8:10 pm"))
    },
    {
       "id":104
      ,"round_num":13
      ,"home_team_id":11
      ,"away_team_id":14
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/16/2017", "7:50 pm"))
    },
    {
       "id":105
      ,"round_num":13
      ,"home_team_id":13
      ,"away_team_id":15
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/17/2017", "1:45 pm"))
    },
    {
       "id":106
      ,"round_num":13
      ,"home_team_id":12
      ,"away_team_id":1
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("6/17/2017", "4:35 pm"))
    },
    {
       "id":107
      ,"round_num":13
      ,"home_team_id":7
      ,"away_team_id":2
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/17/2017", "7:25 pm"))
    },
    {
       "id":108
      ,"round_num":13
      ,"home_team_id":17
      ,"away_team_id":10
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/18/2017", "3:20 pm"))
    },
    {
       "id":109
      ,"round_num":14
      ,"home_team_id":0
      ,"away_team_id":9
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("6/22/2017", "7:50 pm"))
    },
    {
       "id":110
      ,"round_num":14
      ,"home_team_id":15
      ,"away_team_id":4
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("6/23/2017", "7:50 pm"))
    },
    {
       "id":111
      ,"round_num":14
      ,"home_team_id":3
      ,"away_team_id":12
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/24/2017", "1:45 pm"))
    },
    {
       "id":112
      ,"round_num":14
      ,"home_team_id":1
      ,"away_team_id":8
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("6/24/2017", "4:35 pm"))
    },
    {
       "id":113
      ,"round_num":14
      ,"home_team_id":17
      ,"away_team_id":11
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/24/2017", "7:25 pm"))
    },
    {
       "id":114
      ,"round_num":14
      ,"home_team_id":16
      ,"away_team_id":10
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/24/2017", "7:40 pm"))
    },
    {
       "id":115
      ,"round_num":14
      ,"home_team_id":6
      ,"away_team_id":5
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/25/2017", "1:10 pm"))
    },
    {
       "id":116
      ,"round_num":14
      ,"home_team_id":13
      ,"away_team_id":2
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/25/2017", "3:20 pm"))
    },
    {
       "id":117
      ,"round_num":14
      ,"home_team_id":14
      ,"away_team_id":7
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("6/25/2017", "4:40 pm"))
    },
    {
       "id":118
      ,"round_num":15
      ,"home_team_id":10
      ,"away_team_id":15
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("6/30/2017", "7:50 pm"))
    },
    {
       "id":119
      ,"round_num":15
      ,"home_team_id":17
      ,"away_team_id":16
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/1/2017", "1:45 pm"))
    },
    {
       "id":120
      ,"round_num":15
      ,"home_team_id":2
      ,"away_team_id":0
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/1/2017", "2:10 pm"))
    },
    {
       "id":121
      ,"round_num":15
      ,"home_team_id":7
      ,"away_team_id":11
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/1/2017", "4:35 pm"))
    },
    {
       "id":122
      ,"round_num":15
      ,"home_team_id":8
      ,"away_team_id":6
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/1/2017", "7:25 pm"))
    },
    {
       "id":123
      ,"round_num":15
      ,"home_team_id":12
      ,"away_team_id":13
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("7/1/2017", "7:40 pm"))
    },
    {
       "id":124
      ,"round_num":15
      ,"home_team_id":4
      ,"away_team_id":1
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/2/2017", "1:10 pm"))
    },
    {
       "id":125
      ,"round_num":15
      ,"home_team_id":9
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/2/2017", "3:20 pm"))
    },
    {
       "id":126
      ,"round_num":15
      ,"home_team_id":5
      ,"away_team_id":14
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/2/2017", "4:40 pm"))
    },
    {
       "id":127
      ,"round_num":16
      ,"home_team_id":0
      ,"away_team_id":17
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("7/7/2017", "7:50 pm"))
    },
    {
       "id":128
      ,"round_num":16
      ,"home_team_id":9
      ,"away_team_id":8
      ,"venue":"University of Tasmania Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/8/2017", "1:45 pm"))
    },
    {
       "id":129
      ,"round_num":16
      ,"home_team_id":3
      ,"away_team_id":4
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/8/2017", "2:10 pm"))
    },
    {
       "id":130
      ,"round_num":16
      ,"home_team_id":15
      ,"away_team_id":7
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("7/8/2017", "4:35 pm"))
    },
    {
       "id":131
      ,"round_num":16
      ,"home_team_id":1
      ,"away_team_id":6
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("7/8/2017", "7:25 pm"))
    },
    {
       "id":132
      ,"round_num":16
      ,"home_team_id":14
      ,"away_team_id":13
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/8/2017", "7:25 pm"))
    },
    {
       "id":133
      ,"round_num":16
      ,"home_team_id":11
      ,"away_team_id":5
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/9/2017", "1:10 pm"))
    },
    {
       "id":134
      ,"round_num":16
      ,"home_team_id":2
      ,"away_team_id":10
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/9/2017", "3:20 pm"))
    },
    {
       "id":135
      ,"round_num":16
      ,"home_team_id":16
      ,"away_team_id":12
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/9/2017", "4:40 pm"))
    },
    {
       "id":136
      ,"round_num":17
      ,"home_team_id":14
      ,"away_team_id":4
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/14/2017", "7:50 pm"))
    },
    {
       "id":137
      ,"round_num":17
      ,"home_team_id":6
      ,"away_team_id":9
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/15/2017", "1:45 pm"))
    },
    {
       "id":138
      ,"round_num":17
      ,"home_team_id":12
      ,"away_team_id":11
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("7/15/2017", "2:10 pm"))
    },
    {
       "id":139
      ,"round_num":17
      ,"home_team_id":7
      ,"away_team_id":3
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/15/2017", "4:35 pm"))
    },
    {
       "id":140
      ,"round_num":17
      ,"home_team_id":8
      ,"away_team_id":15
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/15/2017", "7:25 pm"))
    },
    {
       "id":141
      ,"round_num":17
      ,"home_team_id":10
      ,"away_team_id":0
      ,"venue":"TIO Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/15/2017", "7:40 pm"))
    },
    {
       "id":142
      ,"round_num":17
      ,"home_team_id":13
      ,"away_team_id":1
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/16/2017", "1:10 pm"))
    },
    {
       "id":143
      ,"round_num":17
      ,"home_team_id":2
      ,"away_team_id":17
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/16/2017", "3:20 pm"))
    },
    {
       "id":144
      ,"round_num":17
      ,"home_team_id":5
      ,"away_team_id":16
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/16/2017", "4:40 pm"))
    },
    {
       "id":145
      ,"round_num":18
      ,"home_team_id":0
      ,"away_team_id":6
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("7/21/2017", "7:50 pm"))
    },
    {
       "id":146
      ,"round_num":18
      ,"home_team_id":4
      ,"away_team_id":11
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/22/2017", "1:45 pm"))
    },
    {
       "id":147
      ,"round_num":18
      ,"home_team_id":10
      ,"away_team_id":12
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/22/2017", "2:10 pm"))
    },
    {
       "id":148
      ,"round_num":18
      ,"home_team_id":17
      ,"away_team_id":7
      ,"venue":"Cazalys Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/22/2017", "4:35 pm"))
    },
    {
       "id":149
      ,"round_num":18
      ,"home_team_id":15
      ,"away_team_id":14
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("7/22/2017", "7:25 pm"))
    },
    {
       "id":150
      ,"round_num":18
      ,"home_team_id":5
      ,"away_team_id":9
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/22/2017", "7:40 pm"))
    },
    {
       "id":151
      ,"round_num":18
      ,"home_team_id":13
      ,"away_team_id":8
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/23/2017", "1:10 pm"))
    },
    {
       "id":152
      ,"round_num":18
      ,"home_team_id":3
      ,"away_team_id":16
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/23/2017", "3:20 pm"))
    },
    {
       "id":153
      ,"round_num":18
      ,"home_team_id":1
      ,"away_team_id":2
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("7/23/2017", "4:40 pm"))
    },
    {
       "id":154
      ,"round_num":19
      ,"home_team_id":9
      ,"away_team_id":15
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/28/2017", "7:50 pm"))
    },
    {
       "id":155
      ,"round_num":19
      ,"home_team_id":11
      ,"away_team_id":10
      ,"venue":"Blundstone Arena"
      ,"datestamp": Number(Time.getTimeStamp("7/29/2017", "1:45 pm"))
    },
    {
       "id":156
      ,"round_num":19
      ,"home_team_id":8
      ,"away_team_id":5
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/29/2017", "2:10 pm"))
    },
    {
       "id":157
      ,"round_num":19
      ,"home_team_id":12
      ,"away_team_id":14
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("7/29/2017", "4:35 pm"))
    },
    {
       "id":158
      ,"round_num":19
      ,"home_team_id":2
      ,"away_team_id":6
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/29/2017", "7:25 pm"))
    },
    {
       "id":159
      ,"round_num":19
      ,"home_team_id":7
      ,"away_team_id":13
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/29/2017", "7:25 pm"))
    },
    {
       "id":160
      ,"round_num":19
      ,"home_team_id":17
      ,"away_team_id":4
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/30/2017", "1:10 pm"))
    },
    {
       "id":161
      ,"round_num":19
      ,"home_team_id":3
      ,"away_team_id":0
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("7/30/2017", "3:20 pm"))
    },
    {
       "id":162
      ,"round_num":19
      ,"home_team_id":16
      ,"away_team_id":1
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("7/30/2017", "4:40 pm"))
    },
    {
       "id":163
      ,"round_num":20
      ,"home_team_id":6
      ,"away_team_id":15
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/4/2017", "7:50 pm"))
    },
    {
       "id":164
      ,"round_num":20
      ,"home_team_id":8
      ,"away_team_id":10
      ,"venue":"Manuka Oval"
      ,"datestamp": Number(Time.getTimeStamp("8/5/2017", "1:45 pm"))
    },
    {
       "id":165
      ,"round_num":20
      ,"home_team_id":4
      ,"away_team_id":2
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/5/2017", "2:10 pm"))
    },
    {
       "id":166
      ,"round_num":20
      ,"home_team_id":1
      ,"away_team_id":17
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("8/5/2017", "4:35 pm"))
    },
    {
       "id":167
      ,"round_num":20
      ,"home_team_id":11
      ,"away_team_id":3
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/5/2017", "7:25 pm"))
    },
    {
       "id":168
      ,"round_num":20
      ,"home_team_id":5
      ,"away_team_id":7
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/5/2017", "7:40 pm"))
    },
    {
       "id":169
      ,"round_num":20
      ,"home_team_id":14
      ,"away_team_id":16
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/6/2017", "1:10 pm"))
    },
    {
       "id":170
      ,"round_num":20
      ,"home_team_id":13
      ,"away_team_id":9
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/6/2017", "3:20 pm"))
    },
    {
       "id":171
      ,"round_num":20
      ,"home_team_id":0
      ,"away_team_id":12
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("8/6/2017", "4:40 pm"))
    },
    {
       "id":172
      ,"round_num":21
      ,"home_team_id":17
      ,"away_team_id":8
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/11/2017", "7:50 pm"))
    },
    {
       "id":173
      ,"round_num":21
      ,"home_team_id":15
      ,"away_team_id":5
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("8/12/2017", "1:45 pm"))
    },
    {
       "id":174
      ,"round_num":21
      ,"home_team_id":6
      ,"away_team_id":13
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/12/2017", "2:10 pm"))
    },
    {
       "id":175
      ,"round_num":21
      ,"home_team_id":1
      ,"away_team_id":7
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("8/12/2017", "4:35 pm"))
    },
    {
       "id":176
      ,"round_num":21
      ,"home_team_id":4
      ,"away_team_id":0
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/12/2017", "7:25 pm"))
    },
    {
       "id":177
      ,"round_num":21
      ,"home_team_id":16
      ,"away_team_id":2
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/12/2017", "7:40 pm"))
    },
    {
       "id":178
      ,"round_num":21
      ,"home_team_id":10
      ,"away_team_id":14
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/13/2017", "1:10 pm"))
    },
    {
       "id":179
      ,"round_num":21
      ,"home_team_id":9
      ,"away_team_id":11
      ,"venue":"University of Tasmania Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/13/2017", "3:20 pm"))
    },
    {
       "id":180
      ,"round_num":21
      ,"home_team_id":12
      ,"away_team_id":3
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("8/13/2017", "4:40 pm"))
    },
    {
       "id":181
      ,"round_num":22
      ,"home_team_id":0
      ,"away_team_id":15
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("8/18/2017", "7:50 pm"))
    },
    {
       "id":182
      ,"round_num":22
      ,"home_team_id":17
      ,"away_team_id":12
      ,"venue":"Eureka Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/19/2017", "1:45 pm"))
    },
    {
       "id":183
      ,"round_num":22
      ,"home_team_id":3
      ,"away_team_id":6
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/19/2017", "2:10 pm"))
    },
    {
       "id":184
      ,"round_num":22
      ,"home_team_id":8
      ,"away_team_id":16
      ,"venue":"Spotless Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/19/2017", "4:35 pm"))
    },
    {
       "id":185
      ,"round_num":22
      ,"home_team_id":7
      ,"away_team_id":4
      ,"venue":"Metricon Stadium"
      ,"datestamp": Number(Time.getTimeStamp("", "7:25 pm"))
    },
    {
       "id":186
      ,"round_num":22
      ,"home_team_id":2
      ,"away_team_id":9
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/19/2017", "7:25 pm"))
    },
    {
       "id":187
      ,"round_num":22
      ,"home_team_id":10
      ,"away_team_id":1
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/19/2017", "1:10 pm"))
    },
    {
       "id":188
      ,"round_num":22
      ,"home_team_id":14
      ,"away_team_id":11
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "3:20 pm"))
    },
    {
       "id":189
      ,"round_num":22
      ,"home_team_id":5
      ,"away_team_id":13
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":190
      ,"round_num":23
      ,"home_team_id":1
      ,"away_team_id":11
      ,"venue":"Gabba"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":191
      ,"round_num":23
      ,"home_team_id":3
      ,"away_team_id":10
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":192
      ,"round_num":23
      ,"home_team_id":4
      ,"away_team_id":5
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":193
      ,"round_num":23
      ,"home_team_id":6
      ,"away_team_id":8
      ,"venue":"Simonds Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":194
      ,"round_num":23
      ,"home_team_id":9
      ,"away_team_id":17
      ,"venue":"Etihad Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":195
      ,"round_num":23
      ,"home_team_id":12
      ,"away_team_id":7
      ,"venue":"Adelaide Oval"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":196
      ,"round_num":23
      ,"home_team_id":13
      ,"away_team_id":14
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":197
      ,"round_num":23
      ,"home_team_id":15
      ,"away_team_id":2
      ,"venue":"SCG"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
    },
    {
       "id":198
      ,"round_num":23
      ,"home_team_id":16
      ,"away_team_id":0
      ,"venue":"Domain Stadium"
      ,"datestamp": Number(Time.getTimeStamp("8/20/2017", "4:40 pm"))
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

ref.once("value", function(snapshot) {
  console.log('Finish...', snapshot.val());
});
