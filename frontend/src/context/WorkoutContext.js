import { createContext, useReducer } from "react";

// 💡 useReducer + Context = Redux-lite
export const WorkoutsContext = createContext(); //CONTEXTobj=funn() //Data container=ek global jagah banana jahan shared data rakha ja sake.
//useContext(WorkoutsContext) tabhi kar paoge jab aapka component WorkoutsContextProvider ke andar ho.
export const WorkoutsReducer = (state, action) => {
  // (state,action)=>new state --is called REDUCER
  switch (
    action.type //reducers==LOGIC
  ) {
    case "SET_WORKOUTS": //store data
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT": //show on page without reloading
      return {
        workouts: [action.payload, ...state.workouts], //new data,...prev/pehle jo workouts the, unhe EXPAND karke bahar array me lana(unpack)
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
        //a new array with all workouts Except the one that matches the ID(deleted)
        //where, .filter() creates a new array, keeping only elements where the condition is true
        //and for each workout w, it compares its _id to the _id of deleted workout
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  //namm kuchh bhi, but fir wahi App file me bhi use hoga

  //Data supplier=context ko data dena via value={...}
  const [state, dispatch] = useReducer(WorkoutsReducer, {
    workouts: null,
  });
  return (
    //state==CURRENT data, dispatch==funn to ACTION
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider> //App comp //⬆️createContext()
  );
};
