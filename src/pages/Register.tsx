import './Register.css'

export default function Register() {
    const handleRegister = (e:any) =>{
        e.preventDefault();
        console.log("Register form submitted")
    }
  return (
    <div className="register-container">
        <h2>Register Page</h2>
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Enter your name" /><br />
            <input type="text" placeholder="Enter new password" /><br />
            <input type="text" placeholder="Enter your email" /><br />
            <button type="submit">Register</button>
        </form>
    </div>
    
  )
}
