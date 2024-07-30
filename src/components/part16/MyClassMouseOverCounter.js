import React from "react";
import withCounter from './withConter';

class MyClassMouseOverCounter extends React.Component{       
    render(){
        const {count , handleIncrement} = this.props;
        return(
            <div>
                Counter :  {count} <br/>
                <h2 onMouseOver={handleIncrement}>React Class - Mouse Over on this space</h2>
            </div>
        );
    }
}

export default withCounter(MyClassMouseOverCounter);