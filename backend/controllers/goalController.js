const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");
// DESCRIPTION - Get goals
// ROUTE - GET /api/goals
// ACCESS - Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// DESCRIPTION - Set goals
// ROUTE - POST /api/goals
// ACCESS - Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// DESCRIPTION - Update goal
// ROUTE - GET /api/goals/:id
// ACCESS - Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// DESCRIPTION - Delete goals
// ROUTE - DELETE /api/goals/:id
// ACCESS - Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  updateGoal,
  setGoal,
  deleteGoal,
};
