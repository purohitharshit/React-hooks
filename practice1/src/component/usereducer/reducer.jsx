import React from 'react'

function reducer(state, action){

    if(action.type === "INC"){
        return (state = state+1);
    }
    if(action.type === "DEC"){
        return state>=1 ? (state=state-1) : (state=0) 
    }

    //We can also use switch case here
}

export default reducer