import React, { createContext, useContext, useState } from 'react'


//example of props drilling
// To use the state defined in function component1 in Component4 we must pass the state through all the nested components till the last component through 'props'. This is known as props drilling

// With the help of useContext, we can get rid of this problem

// function Component1(){

//     const [user, setUser] = useState("RAM KUMAR");

//     return(
//         <>
//         <h1>Hello {user}</h1>
//         <Component2 user={user}/>
//         </>
//     )
// }

// function Component2({user}){
//     return (
//         <>
//         <h1>Component 2</h1>
//         <Component3 user={user}/>
//         </>
//     )
// }

// function Component3({user}){
//     return(
//         <>
//         <h1>Component 3</h1>
//         <Component4 user={user}/>
//         </>
//     )
// }

// function Component4({user}){
//     return(
//         <>
//         <h1>Component 4</h1>
//         <h2>Hello {user}</h2>
//         </>
//     )
// }

// export default Component1;


// ******* UseContext **********
//Here we can get rid of 'props' passing through each nested component, but we must pass the child component in every parent component and at the topmost component we must use the 'createContext' with a 'value' attribute and we should use the 'useContext' only in the component we want to use the 'state' 

const userContext = createContext();

function Component1(){

    const [user, setUser] = useState("RAM KUMAR");

    return(
        <userContext.Provider value={user}> 
        {/*  *** You must provide userContext the "value" of "user" *** */}

        <h1>Hello {user}</h1>
        <Component2 user={user}/>

        </userContext.Provider>
    )
}

function Component2(){
    return (
        <>
        <h1>Component 2</h1>
        <Component3/>
        </>
    )
}

function Component3(){
    return(
        <>
        <h1>Component 3</h1>
        <Component4/>
        </>
    )
}

function Component4(){
    const user = useContext(userContext);
    return(
        <>
        <h1>Component 4</h1>
        <h2>Hello {user}</h2>
        </>
    )
}

export default Component1;
