import React, { useState, useRef } from 'react';

const ClickerCounter = () => {
    const [count, setCount] = useState(0);
    const displayRef = useRef(null);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1 ref={displayRef}>{count}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default ClickerCounter;