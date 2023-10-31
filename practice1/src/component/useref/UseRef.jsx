import React, { useEffect, useState, useRef } from "react";

// 1. It can be used to store a mutable value that does not cause a re-render when updated.

// 2. It can be used to access a DOM element directly.

// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
//whenever function call occurs, useEffect re-renders occurs and "count" value(incase of counter exmaple) increases everytime
const UseRef = () => {
  //   const [inputvalue, setInputvalue] = useState("");
  //   const count = useRef(0);// created a count object with useRef hook
  //   const initialRender = useRef(true);
  //   useEffect(() => {

  //     if (initialRender.current) {
  //         // count.current = count.current;
  //         initialRender.current = false;
  //       } else {
  //         count.current = count.current + 1;
  //       }
  //     // setInputvalue(inputvalue);
  //   },[inputvalue]);

  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={inputvalue}
  //         onChange={(e) => setInputvalue(e.target.value)}
  //       />

  //       <h1>Render count : {count.current}</h1>
  //     </>
  //   );

  // ****** exercise 2  -- Accessing DOM ******

  const inputRef = useRef();

  const changeColor = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "blue";
  };

  return (
    <>
      {/* // ** We must the reference of this useRef(that is object) to the 'button' using ref attribute */}

      <button ref={inputRef} onClick={changeColor}>
        submit
      </button>
    </>
  );
};

export default UseRef;
