import React from "react";
import { useState } from 'react';

function UpdatedComponent (WrappedComponent){
    function NewComponent(){
        const [count, setCount] = useState(0);
        const handleIncrement =()=> {
            setCount(count + 1);
        };
        return <WrappedComponent
                    count={count}
                    handleIncrement={handleIncrement}
                />
    }
    return NewComponent;
}

export default UpdatedComponent;