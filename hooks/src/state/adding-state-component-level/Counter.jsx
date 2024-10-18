import react, { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0);  // useState hook with array destructuring

    console.log(`count : ${count}`)

    const increment = () => {
        setCount(count + 1);   // entire Counter component is re-rendered.
        console.log(`count : ${count}`)
    }

    const decrement = () => {
        setCount(count - 1);
        console.log(`count : ${count}`)
    }

    return (
        <>
            <h2>useState Hook</h2>
            <h3>Adding State to Componnet</h3>
            <button onClick = {increment}>Increment</button>      
            <button onClick = {decrement}>Decrement</button>  
            <br/>
            <p>count is :<strong>{count}</strong></p>    
        </>
    )
}