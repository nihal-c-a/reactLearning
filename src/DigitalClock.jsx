import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime]=useState(new Date());

    //  useEffect(()=>updateTime(),[time]);

    setInterval(()=>setTime(new Date()),1000);

    function updateTime() {
        setTime(new Date())
        
    }

    return(
        <div>
                <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default  DigitalClock