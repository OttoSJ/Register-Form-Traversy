const asyncHandler = require("express-async-handler");

// DESCRIPTION - Get goals
// ROUTE - GET /api/goals
// ACCESS - Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// DESCRIPTION - Set goals
// ROUTE - POST /api/goals
// ACCESS - Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

// DESCRIPTION - Update goal
// ROUTE - GET /api/goals/:id
// ACCESS - Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update goals" });
});

// DESCRIPTION - Delete goals
// ROUTE - DELETE /api/goals/:id
// ACCESS - Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete goals" });
});

module.exports = {
  getGoals,
  updateGoal,
  setGoal,
  deleteGoal,
};
