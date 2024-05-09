const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  height: { type: Number, required: true },
  initialWeight: { type: Number, required: true },
  currentWeight: { type: Number, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true, enum: ["Male", "Female"] },
  goals: {
    targetWeight: { type: Number, required: true },
    activityLevel: {
      type: String,
      enum: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"],
    },
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  cumulativeNetCalories: { type: Number, default: 0 },
});

// Create Models
const User = mongoose.model("User", userSchema);

module.exports = { User };
