var moment = require('moment');

exports.getTimeStamp = (date, time) => {

  var momentStamp = moment(`${date} ${time}`, 'M-DD-YYYY hh:mm a').format('x');
  return Number(momentStamp);

};
