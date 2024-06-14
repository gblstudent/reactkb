import React from "react";
class MyClassCounter extends React.Component{
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
    handleDecrement(){
        this.setState({
            count : this.state.count -1
        });
    }
    handleReset(){
        this.setState({
            count : 0
        });
    }
    render(){
        return(
            <div>
                Counter : {this.state.count} <br/>
                <button onClick={this.handleIncrement.bind(this)}>Increment</button>
                <button onClick={this.handleDecrement.bind(this)} disabled={this.state.count === 0}>Decrement</button>
                <button onClick={() => this.handleReset()} disabled={this.state.count === 0}>Reset</button>
            </div>
        );
    }
}

export default MyClassCounter;