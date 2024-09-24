import React,{useEffect,useState} from "react";

function Geometry() {
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event listener added");
    
    },[])

    function handleResize(){
        console.log(123);
        
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   
    return(
        <div>
            <p>Window height: {height}</p>
            <p>Window width: {width}</p>
        </div>
    );
}

export default Geometry