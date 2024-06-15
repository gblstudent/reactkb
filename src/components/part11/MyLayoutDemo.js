import { useEffect, useLayoutEffect ,useRef } from 'react';

export default function MyLayoutDemo() {
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("USE-EFFECT")
        inputRef.current.value = "Hi";   
        console.log(inputRef.current.value)   
    },[]);

    useLayoutEffect(() => {
        console.log("USE-LAYOUTEFFECT")
        console.log(inputRef.current.value)
    },[]);

    return (
        <div>
            <input type='text' value="Hello" ref={inputRef}/>
        </div>    
    );
}
