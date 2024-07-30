import React from "react";

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component{

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
            return <WrappedComponent 
                        count={this.state.count} 
                        handleIncrement={this.handleIncrement} 
                    />
        }
    }
    return WithCounter
}

export default withCounter;