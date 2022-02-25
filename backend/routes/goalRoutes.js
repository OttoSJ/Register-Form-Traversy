const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// A cleaner way to write this would be like this below and then you can get rid of the other four router routes.

const { protect } = require("../middleware/authMiddleware");

// router.route("/").get(getGoals).post(setGoal);
// router.route("/:id").delete(deleteGoal).put(updateGoal);

router.get("/", protect, getGoals);

router.post("/", protect, setGoal);

router.put("/:id", protect, updateGoal);

router.delete("/:id", protect, deleteGoal);

module.exports = router;
