import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error("useWorkoutsContext must be used inside WCProvider");
  }

  return context;
};

// WorkoutsContext = shared data box 📦
// useContext() = open the box 🧠
// useWorkoutsContext() = shortcut to open it 🛠️✨
