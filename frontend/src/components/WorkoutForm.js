import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setemptyField] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); //without this You type info and hit submit--Page refreshes 😩--Your React state is lost
    const workout = { title, reps };

    const response = await fetch("/api/workouts", {
      //connect to BE
      method: "POST",
      body: JSON.stringify(workout), //body converted into JSON string
      headers: {
        "Content-Type": "application/json", //👈 “I’m sending JSON.”
      },
    }); //req
    const json = await response.json(); //res

    if (!response.ok) {
      setError(json.error);
      setemptyField(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setError(null);
      setemptyField([]);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add new Workout</h3>
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        //e=event--passed to funn,target=triggered--ele causing event,value=current value typed
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add Workout</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
