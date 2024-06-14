function MyFunction1(){
    function clickhandler(){
        alert('Alert from Function button')
    }
    return(
        <div>
            <button onClick={clickhandler}>Click Me from Function 1</button>
        </div>
    );
}
export default MyFunction1;