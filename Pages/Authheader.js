import React from 'react'

function Authheader() {

    const user = JSON.parse(localStorage.getItem('data'));

    if(user && user.login){
    return {'x-access-token':user.token}
} else{
    return {};
}
}
export default Authheader;
