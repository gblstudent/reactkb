import { useContext } from "react";
import { AppContext } from "./ContextDemo";

function User() {
  const {userName} = useContext(AppContext);
  return (
    <div>
      Sister 2 : {userName}            
    </div>
  );
}
export default User