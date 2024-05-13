const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");
const { DailyLog } = require("../models/DailyLogs.model");
const { mongoose } = require("mongoose");

const dailyLogRouter = express.Router();

const todayDate = () => {
  return new Date().toISOString().split("T")[0];
};

dailyLogRouter.get("/", authenticateUser, async (req, res) => {
  try {
    const userId = req.userId;

    const dailyLog = await DailyLog.findOne({
      date: todayDate(),
      user: userId,
    });

    if (!dailyLog) {
      return res.status(200).json({ data: null });
    } else {
      const result = await DailyLog.aggregate([
        {
          $match: {
            user: new mongoose.Types.ObjectId(userId),
            date: todayDate(),
          },
        },
        {
          $lookup: {
            from: "meals",
            localField: "meals",
            foreignField: "_id",
            as: "meals",
          },
        },
        { $unwind: "$meals" },
        { $unwind: "$meals.foods" },
        {
          $lookup: {
            from: "foods",
            localField: "meals.foods.food",
            foreignField: "_id",
            as: "foodDetail",
          },
        },
        { $unwind: "$foodDetail" },
        {
          $addFields: {
            totalCalories: {
              $multiply: ["$meals.foods.quantity", "$foodDetail.calories"],
            },
          },
        },
        {
          $group: {
            _id: "$user",
            workouts: { $addToSet: "$workouts" },
            totalCalories: { $sum: "$totalCalories" },
          },
        },
        { $unwind: "$workouts" },
        {
          $lookup: {
            from: "workouts",
            localField: "workouts",
            foreignField: "_id",
            as: "workouts",
          },
        },
        { $unwind: "$workouts" },
        { $unwind: "$workouts.exercises" },
        {
          $lookup: {
            from: "exercises",
            localField: "workouts.exercises.exercise",
            foreignField: "_id",
            as: "exerciseDetail",
          },
        },
        { $unwind: "$exerciseDetail" },
        {
          $addFields: {
            totalCaloriesBurned: {
              $multiply: [
                "$workouts.exercises.duration",
                "$exerciseDetail.caloriesBurnedPerMinute",
              ],
            },
          },
        },
        {
          $group: {
            _id: "$_id",
            totalCalories: { $addToSet: "$totalCalories" },
            totalCaloriesBurned: { $sum: "$totalCaloriesBurned" },
          },
        },
        { $unwind: "$totalCalories" },
        { $project: { _id: 0 } },
      ]);

      console.log(result);
      return res.status(200).json({ data: result[0] });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
});

module.exports = { dailyLogRouter };
