import React from 'react';

export const dump = (message) =>{
    return(
    console.log(message)
    )
}


export const Isarray = (arr) =>{
    if(arr !== null && arr !== undefined && arr.length>0){
        return false;
    }

    else{
        return true;
    }
}


// export {dump, Isarray}