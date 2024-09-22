import React, {useState} from 'react';

function MyComponent(){
    const [counter, setCounter] = useState(0);
    
    
    function increment() {
        setCounter(c=>c + 1);
        setCounter(c=>c + 1);
        setCounter(c=>c + 1);
        
        console.log(counter);
        
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function reset() {
      
        setCounter(0);
    }
    

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
           
            <button onClick={
                reset
            }>
                Reset
            </button>
        </div>
    );
}

export default MyComponent;
