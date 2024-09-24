// import React,{useEffect,useRef} from "react";
import React,{useEffect,useRef} from "react";
function UseRefSample() {

    let inputRef=useRef(null)

    useEffect(()=>console.log("Component rendered"))

    function handleClick() {
       inputRef.current.style.backgroundColor=inputRef.current.style.backtroundColor=="yellow"?"":"yellow";
    }
    return(
        <div>
            <input ref={inputRef} placeholder="element1" type="text"></input>
            <button onClick={handleClick}>click me</button>
            <input ref={inputRef} placeholder="element2" type="text"></input>
            <button onClick={handleClick}>click me2</button>
            <input ref={inputRef} placeholder="element4" type="text"></input>
            <button onClick={handleClick}>click me3</button>
        </div>
    );
}
export default UseRefSample