function Button(){
 
    var btnText="Click me😊"
    const handleClick=(e)=>{
       console.log(e)
        e.target.textContent="ouch"
        // btnText="ouch"
    }
    return(
        <>
        {console.log("Refresh")}
        
        <button onClick={(e)=>handleClick(e)} className="click-button">
            {btnText}
        </button>
        </>
        
    );
}
export default Button