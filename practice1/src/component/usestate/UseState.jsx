import React from 'react'
import {BiPlusMedical} from "react-icons/bi"
import {FaMinus} from "react-icons/fa"
import { useState } from 'react'
import "./style.css"

const UseState = () => {
    const [count, setCount] = useState(0); 
    const [color,setColor] = useState("red");
    const [car, setCar] = useState({
        brand: "BMW",
        year : 2023,
        color : "black"
    })

    const updatecolor = () => {
        setCar((previousState)=>{
            return {...previousState, color:"Red"}
        })
    }

  return (
    <>
    <div className='container'>

        {/* 1 */}

        {/* <button onClick={()=>{setCount(count+1)}}>
            <BiPlusMedical className='plus-icon'/>
        </button>
        <h1>{count}</h1>
        <button onClick={()=> count===0 ? setCount(0) : setCount(count-1)}>
            <FaMinus className='minus-icon'/>
        </button> */}

        {/* 2 */}

        {/* <h1>My favorite color is {color}</h1>
        <button onClick={()=>setColor("blue")}>Change</button> */}

        {/* 3 */}

        <h1>My favorite car is {car.brand} and color is {car.color} and bought in {car.year}</h1>
        <button onClick={updatecolor}>Update</button>

        
    </div>
    </>

  )
}

export default UseState;
