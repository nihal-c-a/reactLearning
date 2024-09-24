import React,{useContext} from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
    const newUser=useContext(UserContext);
    return(
        <div style={{border:"3px solid",padding:"10px"}}>
            <p>Component D{newUser}</p>
        </div>
    );
}
export default ComponentD