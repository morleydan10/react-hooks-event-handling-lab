// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){

    function renderFocus() {
        console.log("Good!")
    };

    function renderBlur() {
        console.log("Hey! Eyes on me!")
    };

    return (
        <button 
            id="eye-button"
            onBlur={renderBlur}
            onFocus={renderFocus}>
            Eyes on me        
        </button>
    )
};

export default EyesOnMe;