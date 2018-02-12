var getTimeStamp = require ('../src/actions/date-actions.js');
var moment = require('moment');

var aTime = "7:20 pm";

// var aDate = "3/25/2017";
var aDate = "25/3/2017";

console.log("test timestamp = ", getTimeStamp.getTimeStamp(aDate, aTime));
console.log("test timestamp = ", moment(getTimeStamp.getTimeStamp(aDate, aTime)));
