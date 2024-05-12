const express = require("express");

const { authenticateUser } = require("../middleware/users.middleware");
const { DailyLog } = require("../models/DailyLogs.model");

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

    console.log(todayDate(), userId, dailyLog);

    if (!dailyLog) {
      return res.status(200).json({ data: null });
    } else {
      console.log(userId);

      const result = await DailyLog.aggregate([
        {
          $match: { user: userId, date: todayDate() },
        },
        // {
        //   $lookup: {
        //     from: "workouts",
        //     localField: "workouts",
        //     foreignField: "_id",
        //     as: "workouts",
        //   },
        // },
        // { $unwind: "$workouts" },
        // {
        //   $lookup: {
        //     from: "exercises",
        //     localField: "workouts.exercises.exercise",
        //     foreignField: "_id",
        //     as: "exercises",
        //   },
        // },
        // {
        //   $addFields: {
        //     totalCaloriesBurned: {
        //       $sum: {
        //         $multiply: [
        //           "$exercises.caloriesBurnedPerMinute",
        //           "$workouts.exercises.duration",
        //         ],
        //       },
        //     },
        //   },
        // },
        // {
        //   $lookup: {
        //     from: "meals",
        //     localField: "meals",
        //     foreignField: "_id",
        //     as: "meals",
        //   },
        // },
        // { $unwind: "$meals" },
        // {
        //   $lookup: {
        //     from: "foods",
        //     localField: "meals.foods.food",
        //     foreignField: "_id",
        //     as: "foods",
        //   },
        // },
        // {
        //   $addFields: {
        //     totalCaloriesConsumed: {
        //       $sum: {
        //         $multiply: ["$foods.calories", "$meals.foods.quantity"],
        //       },
        //     },
        //   },
        // },
        // {
        //   $project: {
        //     _id: 0,
        //     totalCaloriesBurned: 1,
        //     totalCaloriesConsumed: 1,
        //   },
        // },
      ]);

      console.log(result);
    }

    return res.status(200).json({ data: "foodsData" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: true, message: error.message });
  }
});

module.exports = { dailyLogRouter };
