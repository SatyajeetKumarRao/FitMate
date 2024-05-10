require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const { User } = require("../models/users.model");
// const { BlacklistToken } = require("../models/blacklistToken.model");

const validateRegister = (req, res, next) => {
  const { name, email, password, height, initialWeight, dob, gender, goals } =
    req.body;

  if (
    name &&
    email &&
    password &&
    height &&
    initialWeight &&
    dob &&
    gender &&
    goals.targetWeight &&
    goals.goal &&
    goals.activityLevel
  ) {
    const isValidGender = ["male", "female"].includes(gender);

    if (!isValidGender) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid user gender" });
    }

    const isValidGoal = [
      "Lose weight",
      "Maintain weight",
      "Gain weight",
    ].includes(goals.goal);

    if (!isValidGoal) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid user goal" });
    }

    const isValidActivityLevel = [
      "Sedentary",
      "Lightly Active",
      "Moderately Active",
      "Very Active",
    ].includes(goals.activityLevel);

    if (!isValidActivityLevel) {
      return res
        .status(400)
        .json({ error: true, message: "Invalid user activityLevel" });
    }

    next();
  } else {
    return res.status(400).json({
      error: true,
      message:
        "Some fields are missing [name, email, password, height, initialWeight, dob, gender, goals {targetWeight, activityLevel}] all are required.",
    });
  }
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    next();
  } else {
    return res.status(400).json({
      error: true,
      message: "Some fields are missing [email, password] all are required.",
    });
  }
};

// const authenticateUser = async (req, res, next) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] == "Bearer"
//   ) {
//     const accessToken = req.headers.authorization.split(" ")[1];

//     const isBlackListed = await BlacklistToken.findOne({ token: accessToken });

//     if (isBlackListed) {
//       return res.status(400).json({ error: true, message: "Invalid Token" });
//     }

//     try {
//       var decodedData = jwt.verify(
//         accessToken,
//         process.env.ACCESS_TOKEN_SECRET
//       );

//       if (decodedData) {
//         const { email } = decodedData;

//         const user = await User.findOne({ email });

//         if (user) {
//           next();
//         } else {
//           return res.status(400).json({
//             error: true,
//             message: "Invalid Access Token. User does not exist",
//           });
//         }
//       } else {
//         return res
//           .status(400)
//           .json({ error: true, message: "Invalid Access Token" });
//       }
//     } catch (err) {
//       res.status(401).json({ error: true, message: err.message });
//     }
//   } else {
//     return res
//       .status(400)
//       .json({ error: true, message: "Access Token Required" });
//   }
// };

// const authorizeUser = async (req, res, next) => {
//   const accessToken = req.headers.authorization.split(" ")[1];

//   var decodedData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

//   const { email } = decodedData;

//   const user = await User.findOne({ email });

//   if (user.role == "admin") {
//     next();
//   } else {
//     return res.status(400).json({
//       error: true,
//       message: "User not authorized to access this route",
//     });
//   }
// };

module.exports = {
  validateRegister,
  validateLogin,
  // authenticateUser,
  // authorizeUser,
};
