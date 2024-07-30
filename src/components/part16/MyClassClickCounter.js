import React from "react";
class MyClassClickCounter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }
    handleIncrement(){
        this.setState({
            count : this.state.count + 1
        });
    }
    
    render(){
        return(
            <div>
                Class Counter : {this.state.count} <br/>
                <button onClick={this.handleIncrement.bind(this)}>Increment</button>
            </div>
        );
    }
}

export default MyClassClickCounter;