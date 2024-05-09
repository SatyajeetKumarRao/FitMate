const mongoose = require("mongoose");

// Define Food Schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  servingSize: String,
  macros: {
    protein: Number,
    carbs: Number,
    fat: Number,
  },
});

// Create Models

const Food = mongoose.model("Food", foodSchema);

module.exports = { Food };
