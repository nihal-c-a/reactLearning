import React,{useEffect,useState} from "react";
function UseEffect() {
    const [count,setCount]=useState(0);
    const [dependent,setDependent]=useState(true);

    useEffect(
        ()=>{document.title=`count=${dependent}`;
        console.log("reRendered")
},[dependent]);


    function addIncrement()
        {
            if(count%5==0)
                {
                    setDependent(true)
                }
                else{
                    setDependent(false)

                }
               
            setCount((c)=>c+1)
           
        }

    return(
        <div>
        <p>Count{count}</p>
        <button onClick={addIncrement}>Add</button>
        
        </div>
    );

}
export default UseEffect