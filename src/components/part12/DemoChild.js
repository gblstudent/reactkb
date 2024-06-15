import { useState } from "react";

const DemoChild = (props) => {
  const [toggle, setToggle] = useState(true);    

  const myToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <div>
        Hello World - Child Component <br/>
        <button onClick={myToggle}>Child Button</button>
        {toggle && <div> Child Toggle </div>}          
    </div>    
  );
}

export default DemoChild;