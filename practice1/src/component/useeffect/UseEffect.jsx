import React from "react";
import "./style.css";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useState, useEffect } from "react";

const UseEffect = () => {
  //Exercise 1

//   const [count, setCount] = useState(0);

//   const update = (val) => {
//     if (val === "inc") return setCount(count + 1);
//     if (val === "dec") return setCount(count - 1);
//   };

//   useEffect(() => {
//     document.title = count;
//   }, []); // here if empty array is passed then the page will load(run) only on first render of funct. component

//   useEffect(() => {
//     document.title = count;
//   }, [count]); // here if, after comma nothing is written or [count] is written both will load(run) the page on every render.

//   return (
//     <>
//       <div className="container">
//         <button
//           onClick={() => {
//             update("inc");
//           }}
//         >
//           <BiPlusMedical className="plus-icon" />
//         </button>
//         <h1>{count}</h1>
//         <button onClick={() => (count === 0 ? setCount(0) : update("dec"))}>
//           <FaMinus className="minus-icon" />
//         </button>
//       </div>
//     </>
//   );

  // Exercise 2

  // const[count,setCount] = useState(0);

  // useEffect(()=>{
  //     setTimeout(()=>{
  //          setCount((count)=> count+1)
  //     },1000)
  // })

  // return (
  //     <h1>I have rendered {count} times</h1>
  // )

  //Exercise 3

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(()=>{
    setCalculation(count*2);
  },[count]);

  return(
    <>
    <p>Count : {count}</p>

    <button onClick={()=> setCount(count+1)}>+</button>

    <p>Calculation : {calculation}</p>
    </>
  )


};

export default UseEffect;
