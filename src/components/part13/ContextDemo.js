import {  useRef, useState } from "react";
import Login from "./Login";
import User from "./User";

function ContextDemo() {
    const [userName, setUserName] = useState("");
    return (
    <div>
        Hello World - Parent Component : {userName}<br/> 
        <hr/>
        <Login setUserName={setUserName} />
        <hr/>
        <User userName={userName} />
    </div>    
  );
}

export default ContextDemo;