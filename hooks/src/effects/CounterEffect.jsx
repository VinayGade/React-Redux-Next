import React, { useState, useEffect } from 'react';

export default function CounterEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        alert(`Count: ${count}`);
        console.log(`You clicked ${count} times`);
    }, [count]);

    const increment = () => setCount((prevCount) => prevCount + 1);

    const handleClick = () => {
        increment();
    };

    const handleChange = (e) => setName(e.target.value) 

    return (
        <>
            <h3>Counter</h3>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}> Add 1 </button>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleChange} />
        </>
    );
}