
import React from "react";
class MyCondition extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isCondition1 : true,
            isCondition2 : false,
            isCondition3 : true,
            isCondition4 : false,
        }
    }
    Render1(){
        if(this.state.isCondition1){
            return(
                <div>Condition 1 - TRUE</div>
            );
        }else{
            return(
                <div>Condition 1 - FALSE</div>
            );
        }
    }
    Render2(){
        let display;
        if(this.state.isCondition2){
            display = "Condition 2 - TRUE";
        }else{
            display = "Condition 2 - FALSE";
        }
        return(
            <div>{display}</div>
        );
    }
    Render3(){
        return this.state.isCondition3 ? (<div>Condition 3 - TRUE</div>) : (<div>Condition 3 - FALSE</div>)
    }
    Render4(){
        return this.state.isCondition4 && (<div>Condition 4 - TRUE</div>) || (<div>Condition 4 - FALSE</div>)
    }
    render(){
        return(
            <div>
                {this.Render1()}
                {this.Render2()}
                {this.Render3()}
                {this.Render4()}
            </div>
        );
    }
}

export default MyCondition;