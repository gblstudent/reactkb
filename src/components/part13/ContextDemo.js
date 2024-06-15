import {  createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextDemo() {
    const [userName, setUserName] = useState("");
    return (
    <AppContext.Provider value={{userName, setUserName}}>

        Hello World - Parent Component : {userName}<br/> 
        <hr/>
        <Login/>
        <hr/>
        <User/>
    </AppContext.Provider>    
  );
}

export default ContextDemo;