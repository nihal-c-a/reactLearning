import ComponentC from "./ComponentC";
function ComponentB() {
    return(
        <div style={{border:"3px solid", padding:"10px"}}>
            <p>Component B</p>
            <ComponentC/>

        </div>
    );
}
export default ComponentB