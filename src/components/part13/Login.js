function Login({ setUserName }) {
  return (
    <div>
      Sister 1<br />
      <input onChange={(event) => {setUserName(event.target.value)}} />      
    </div>
  );
}
export default Login