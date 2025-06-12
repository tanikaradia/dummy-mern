import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleCLick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE", //BACKEND side
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json }); //FRONTEND side
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      {/* <p>{workout.createdAt}</p>*/}
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleCLick}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
