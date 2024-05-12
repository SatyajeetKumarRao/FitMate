const express = require("express");
const { Meal } = require("../models/Meals.model");
const { authenticateUser } = require("../middleware/users.middleware");
const { DailyLog } = require("../models/DailyLogs.model");

const mealsRouter = express.Router();

const todayDate = () => {
  return new Date().toISOString().split("T")[0];
};

mealsRouter.post("/addMeal", authenticateUser, async (req, res) => {
  try {
    const reqData = req.body;

    const meal = await Meal.findOne({ date: todayDate(), user: req.userId });

    if (!meal) {
      const newMeal = new Meal({
        user: req.userId,
        date: todayDate(),
        foods: reqData,
      });
      await newMeal.save();

      const dailyLogs = await DailyLog.findOne({
        date: todayDate(),
        user: req.userId,
      });

      if (!dailyLogs) {
        const newDailyLogs = new Meal({
          user: req.userId,
          date: todayDate(),
          meals: newMeal._id,
        });
        await newDailyLogs.save();
      } else {
        const updateDailyLogs = await DailyLog.findByIdAndUpdate(
          dailyLogs._id,
          { meals: newMeal._id }
        );
      }

      return res.status(201).json({ message: "New Meal Added", data: newMeal });
    } else {
      const updateMeal = await Meal.findByIdAndUpdate(
        meal._id,
        {
          foods: [...meal.foods, ...reqData],
        },
        {
          new: true,
        }
      );

      return res
        .status(200)
        .json({ message: "Meal Updated", data: updateMeal });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: true, message: error.message });
  }
});

mealsRouter.get("/", authenticateUser, (req, res) => {
  try {
    const userId = req.userId;
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: true, message: error.message });
  }
});

mealsRouter.all("*", (req, res) => {
  return res.status(404).json({ error: true, message: "404 Invalid Route" });
});

module.exports = { mealsRouter };
