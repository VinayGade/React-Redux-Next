import { useState } from 'react';

export default function UpdateCounter() {
    const [age, setAge] = useState(42);

    function increment() {
        setAge(a => a + 1);
    }

    const handleIncrement = () => {
        increment();
        increment();
        increment();
    }

    return (
        <>
            <h3>Update state from previous state</h3>
            <h3>Your age: {age}</h3>
            <button onClick={handleIncrement
                /*() => {
                increment();
                increment();
                increment();
            }*/
            }>+3</button>
            <button onClick={() => {
                increment();
            }}>+1</button>
        </>
    );
}
