import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  //def funnal COMPONENT
  //-->>((When a "React" component)) is first loaded onto the page, it goes through the "rendering" process — basically turning your JSX (like <h1>Hello</h1>) into real HTML elements on the screen.

  //React "first" shows the UI--HOME (even if it's just an empty page), then "useEffect" runs after that

  const [workouts, setWorkouts] = useState(null); //State

  useEffect(() => {
    const fetchWorkouts = async () => {
      //function --take some time --return a promise
      //"await" =wait until
      // const response = await fetch("/api/workouts"); //GET req proxy server to conn both fe&be FROM package.json
      const response = await fetch("http://localhost:4444/api/workouts/"); //GET req earlier
      const json = await response.json(); //JSON res (Ab json ke andar poora data array store hota hai)

      if (response.ok) {
        setWorkouts(json); //iske through access kar paenge data me se
      }
    };
    fetchWorkouts();
  }, []);
  //component is rendered -> FIRE funn
  // [] to only fire Once

  return (
    //template
    <div className="home">
      <div className="workouts">
        {workouts && //agar workouts h tabhi map hoga!
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

// ✅ When the component loads:
// 1 it "fetches" the workout list,
// 2 "stores" them in state,
// 3 then "shows each" one using the WorkoutDetails component.
