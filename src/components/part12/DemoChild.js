import { forwardRef, useState, useImperativeHandle } from "react";

const DemoChild = forwardRef((props,ref) => {
  
  const [toggle, setToggle] = useState(true);

  useImperativeHandle( ref, () =>({
    myToggle
  })); 

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

});

export default DemoChild;