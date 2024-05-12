const { calculateAge } = require("./AgeCalculator");

const TdeeCalculator = ({ gender, weight, height, dob, activityLevel }) => {
  let BMR = 0;

  if (gender === "male") {
    BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * calculateAge(dob);
  } else {
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * calculateAge(dob);
  }

  let TDEE = BMR;

  switch (activityLevel) {
    case "Sedentary":
      TDEE = TDEE * 1.2;

      break;

    case "Lightly Active":
      TDEE = TDEE * 1.375;

      break;

    case "Moderately Active":
      TDEE = TDEE * 1.55;

      break;

    case "Very Active":
      TDEE = TDEE * 1.725;

      break;

    default:
      break;
  }

  TDEE = Math.ceil(TDEE);

  return TDEE;
};

const TargetTdeeCalculator = ({ goal, TDEE }) => {
  let targetTdee = TDEE;

  switch (goal) {
    case "Lose weight":
      targetTdee = targetTdee - 550;
      break;

    case "Maintain weight":
      targetTdee = targetTdee;
      break;

    case "Gain weight":
      targetTdee = targetTdee + 550;
      break;

    default:
      break;
  }

  return targetTdee;
};

module.exports = { TdeeCalculator, TargetTdeeCalculator };
