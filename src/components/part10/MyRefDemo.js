import { useRef } from "react";

export default function MyRefDemo() {
    const inputRef = useRef(null);
    const onCLick = () => {
        inputRef.current.focus();
    }
    return (
    <div>
        Hello World <br/>
        <input type='text' placeholder='Example' ref={inputRef}/>
        <button onClick={onCLick} >Reset</button>      
    </div>
    
  );
}
