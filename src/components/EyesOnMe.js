// Code EyesOnMe Component Here
import React from 'react';


export default function EyesOnMe() {

    const focusing = () => console.log('Good!');
    const lookAtMe = () => console.log('Hey! Eyes on me!');

    return (
        <React.Fragment>
            <button onFocus={focusing} onBlur={lookAtMe}>Eyes on me</button>
        </React.Fragment>
    )
}