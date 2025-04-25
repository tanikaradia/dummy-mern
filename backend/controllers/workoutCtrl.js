const Workout = require("../models/workoutModels");
const mongoose = require("mongoose");

//get alll
const getWorkouts = async (req, res) => {
  const workout = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workout);
};

//get by id
const getWorkout = async (req, res) => {
  const { id } = req.params; //id to params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "noo workout anna" });
  } //method if passed id is wrong, and donut want systeem to crash 💥

  const workout = await Workout.findById(id); //thisss

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//create_post
const createWorkout = async (req, res) => {
  //global fun name
  const { title, reps } = req.body;

  try {
    const workout = await Workout.create({ title, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id }); //cant send direct (id), but in obj{}

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  } //why/not ???

  res.status(200).json(workout);
  //res.json({ msg: "DELETE X(" });
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "workout ille anna" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, //title: 'abc'
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  //obj
  createWorkout, //prop
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
