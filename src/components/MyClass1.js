import React from "react";
class MyClass1 extends React.Component{
    clickhandler(){
        alert('Alert from class component button')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickhandler}>Click Me from Class 1</button>
            </div>
        );
    }
}

export default MyClass1;