import { useImperativeHandle, useRef } from "react";
import DemoChild from "./DemoChild";

export default function DemoParent() {
    const buttonRef = useRef(null);
    
    return (
    <div>
        Hello World - Parent Component<br/> 
        <button onClick={() => {buttonRef.current.myToggle() } }>Parent Button</button>
        <hr/>
        <DemoChild ref={buttonRef}/>
    </div>
    
  );
}
