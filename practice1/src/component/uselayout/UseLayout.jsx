import React, { useLayoutEffect, useEffect } from "react";

//similar to useEffect, but useLayoutEffect runs synchronously after a render but before the screen is updated

//useEffect runs asynchronously and after a render is painted to the screen

const UseLayout = () =>{

    //here if 3 useEffect is there then there will be firt,second and third... all useEffect will be printed on console in top to bottom order asynchronously

    // and if a  useLayoutEffect comes then it will be printed before the screen is updated

    useEffect(()=>{
        console.log("I'm first useeffect")
    })

    useLayoutEffect(()=>{
        console.log("I'm second useeffect")
    })

    useEffect(()=>{
        console.log("I'm third useeffect")
    })

    

    return(
        <>

        </>
    )
}

export default UseLayout