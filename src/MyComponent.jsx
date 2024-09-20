import React, {useState} from 'react';

function MyComponent(){
    const [counter, setCounter] = useState(0);
    
    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function reset() {
        console.log("Reset button double-clicked");
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
            <img onClick={reset} src="./src/assets/profile.jpg"></img>
            <button onDoubleClick={()=>{
                reset()
            }}>
                Reset
            </button>
        </div>
    );
}

export default MyComponent;
