import React from "react";
import withCounter from './withConter';

class MyClassClickCounter extends React.Component{
    render(){
        const {count , handleIncrement} = this.props;
        return(
            <div>
                Class Counter : {count} <br/>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        );
    }
}

export default withCounter(MyClassClickCounter);