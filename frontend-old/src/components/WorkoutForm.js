import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");

  return (
    <form className="create">
      <h3>Add new Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </form>
  );
};
