import ComponentD from "./ComponentD";
function ComponentC() {
    return(
        <div style={{border:"3px solid", padding:"10px"}}>
            <p>Component C</p>
            <ComponentD/>
            
        </div>
    );
}
export default ComponentC