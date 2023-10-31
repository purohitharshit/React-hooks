import React, { useReducer } from "react";
import reducer from "./reducer";

// The useReducer Hook is similar to the useState 
// The useReducer Hook accepts two arguments.

// useReducer(<reducer>, <initialState>)

// The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

// The useReducer Hook returns the current stateand a dispatchmethod.

const UseReducer = () => {
    //useReducer is similar to useState. UseState is used in small projects and useReducer  in large projects
    let inititalValue = 0;

    const [count, dispatch] = useReducer(reducer,inititalValue);

  return (
    <>
      <button onClick={()=> dispatch({type:"INC"})}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch({type: "DEC"})}>-</button>
    </>
  );
};

export default UseReducer;
