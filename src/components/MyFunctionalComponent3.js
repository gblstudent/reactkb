import React from "react";

function MyFunctionalComponent3(){
    return React.createElement(
        'div',
        {id : 'demo1', className : 'myclass1'},
        'Hello from ', React.createElement('b',{},'Functional') ,' Component 3'
    );
}
export default MyFunctionalComponent3;