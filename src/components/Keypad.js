// Code Keypad Component Here

import React from 'react';

function Keypad (){

    function logChanging (e) {
        e.preventDefault();
        // e.target.reset();
        console.log('Entering password...');
    }


    return (
        <div>
            <form onChange={logChanging}>
                <input type="password"></input>
            </form>
        </div>
    )
}

export default Keypad;