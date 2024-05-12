const calculateAge = (dob) => {
  var tempDob = new Date(dob);

  var currentDate = new Date();

  var timeDiff = currentDate.getTime() - tempDob.getTime();

  var age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

  return age;
};

module.exports = { calculateAge };
