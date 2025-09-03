import { useState } from "react"
import './Login.css'


export default function Login() {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("Login:",userName,password)
    }
  return (
    <div className="login-container">
       <h2>Login Page</h2>
       <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={userName} onChange={(e)=> setUserName(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} /><br />
        <button type="submit">Login</button>
       </form>
    </div>
    
  )
}
