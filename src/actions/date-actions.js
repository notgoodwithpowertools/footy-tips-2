var moment = require('moment');

exports.getTimeStamp = (date, time) => {

  // var momentStamp = moment(`${date} ${time}`, 'M-DD-YYYY hh:mm a').format('x');
  var momentStamp = moment(`${date} ${time}`, 'DD-M-YYYY hh:mm a').format('x');
  return Number(momentStamp);

};

// exports.getDateString = (aDate) => {
//   var momentString = moment(aDate).format("dddd, MMM Do");
//   return momentString;
// }

exports.getDay = (aDate) => {
  var momentString = moment(aDate).format("ddd, MMM Do");
  return momentString;
}
