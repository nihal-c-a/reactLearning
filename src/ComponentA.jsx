import { useState,createContext } from "react";

import ComponentB from "./ComponentB";

export const UserContext=createContext();
function ComponentA() {
    const [user,setUser]=useState("Nihal")

    return(
        <div style={{border:"3px solid",padding:"10px"}}>
            <p>Component A</p>
            <h2>hello {user}</h2>
            <UserContext.Provider value={user}>
            <ComponentB user={user}/> 
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA