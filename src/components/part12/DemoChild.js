import { useState } from "react";

export default function DemoChild() {
  const [toggle, setToggle] = useState(true);    
    return (
    <div>
        Hello World - Child Component <br/>
        <button onClick={() => {setToggle(!toggle)}}>Child Button</button>
        {toggle && <div> Toggle </div>}            
    </div>
    
  );
}
