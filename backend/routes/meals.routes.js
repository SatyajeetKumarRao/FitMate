const express = require("express");

const mealsRouter = express.Router();

mealsRouter.post("/addMeal", async (req, res) => {
    const {}  = req.body;

});

module.exports = { mealsRouter };


