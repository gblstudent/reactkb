import React from "react";
class MyClassMouseOverCounter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }
    handleIncrement = () =>{
        this.setState(prevState => {
            return {count : prevState.count + 1 }
        });
    }   
    render(){
        return(
            <div>
                Counter : {this.state.count} <br/>
                <h2 onMouseOver={this.handleIncrement}>React Class - Mouse Over on this space</h2>
            </div>
        );
    }
}

export default MyClassMouseOverCounter;