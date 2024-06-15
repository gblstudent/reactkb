import { useContext } from "react";
import { AppContext } from "./ContextDemo";

function Login() {
  const {setUserName} = useContext(AppContext);
  return (
    <div>
      Sister 1<br />
      <input onChange={(event) => {setUserName(event.target.value)}} />      
    </div>
  );
}
export default Login