export function Component1( props){
    return(
        <div>
            I am Component 1
            <br/>
            Parent sending me name1 : <b>{props.name1}</b> and name2 : <b>{props.name2}</b>
        </div>
    );
}

export const Component2 = ( props) =>{
    return(
        <div>
            I am Component 2
            <br/>
            Parent sending me name1 : <b>{props.name1}</b> and name2 : <b>{props.name2}</b>
        </div>
    );
}
