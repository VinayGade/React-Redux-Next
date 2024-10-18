import React, { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState();
    const [displayColor, setDisplayColor] = useState('');

    // Function to update the input state as user types
    const handleInputChange = (e) => {
        setColor(e.target.value);
    };

    const handleClick = () => {
        setDisplayColor(color);
    }

    return (
        <>
            <lable htmlFor='color' >Favorite Color : </lable>
            <input type='text' name="color" value={color} onChange={handleInputChange}></input>
            <button onClick={handleClick}>Submit</button>
            <p>My Favorite Color : <strong style={{ color: displayColor }}>{displayColor}</strong></p>
        </>
    )
}

export default FavoriteColor;