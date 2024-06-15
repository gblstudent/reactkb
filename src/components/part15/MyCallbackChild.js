import { useEffect } from "react";

function MyCallbackChild({returnComment}) {
  useEffect( () => {
    console.log("Child useEffect Function called")
  },[returnComment]);
  return (
    <div>
      Child Display - {returnComment()}     
    </div>
  );
}
export default MyCallbackChild