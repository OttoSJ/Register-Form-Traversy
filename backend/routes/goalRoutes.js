const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// A cleaner way to write this would be like this below and then you can get rid of the other four router routes.

// router.route("/").get(getGoals).post(setGoal);
// router.route("/:id").delete(deleteGoal).put(updateGoal);

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
