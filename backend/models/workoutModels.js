const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSc = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workoutsModels", workoutSc);
