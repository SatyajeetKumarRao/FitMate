const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    height: { type: Number, required: true },
    initialWeight: { type: Number, required: true },
    currentWeight: { type: Number, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"] },
    goals: {
      targetWeight: { type: Number, required: true },
      goal: {
        type: String,
        required: true,
        enum: ["Lose weight", "Maintain weight", "Gain weight"],
      },
      activityLevel: {
        type: String,
        required: true,
        enum: [
          "Sedentary",
          "Lightly Active",
          "Moderately Active",
          "Very Active",
        ],
      },
    },
    tdee: { type: Number, default: 0, required: true },
    targetTdee: { type: Number, default: 0, required: true },
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
