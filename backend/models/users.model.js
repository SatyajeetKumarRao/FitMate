const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    height: { type: Number, required: true },
    initialWeight: { type: Number, required: true },
    currentWeight: { type: Number, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    goals: {
      targetWeight: { type: Number, required: true },
      goal: {
        type: String,
        enum: ["Lose weight", "Maintain weight", "Gain weight"],
      },
      activityLevel: {
        type: String,
        enum: [
          "Sedentary",
          "Lightly Active",
          "Moderately Active",
          "Very Active",
        ],
      },
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    cumulativeNetCalories: { type: Number, default: 0 },
  },
  {
    versionKey: false,
  }
);

// Create Models
const User = mongoose.model("User", userSchema);

module.exports = { User };
