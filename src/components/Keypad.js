// Code Keypad Component Here

import React from "react";


function Keypad (){

    function handleChange(){
        console.log("Entering password...")
    };

    return (
        <div>
            <input onChange={handleChange}
             id="password-input" 
             type="password"
             placeholder= "Password here"
             />
        </div>
    )
};

export default Keypad;