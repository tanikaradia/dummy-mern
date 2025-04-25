const express = require("express");
const router = express.Router();
// const Workout = require("../models/workoutModels");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutCtrl");

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post(
  "/",
  createWorkout
  // async (req, res) => {
  // const { title, reps } = req.body;

  // try {
  //   const workout = await Workout.create({ title, reps });
  //   res.status(200).json(workout);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
  // // res.json({ msg: "POSST :3" });
  //}
);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
