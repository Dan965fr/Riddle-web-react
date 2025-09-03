import { useState } from "react";
import { Link } from "react-router";
import './Register.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // בדיקה פשוטה לדוגמה
    if (!username || !password || !email) {
      setError("All fields are required");
      return;
    }
    setError(""); // אם הכל בסדר, מסירים הודעת שגיאה
    console.log("Register form submitted:", { username, password, email });
  };

  return (
    <div className="register-page">
      <div className="register-topbar">
        <Link to="/" className="register-top-left">Home</Link>
      </div>

      <div className="register-center">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>

      <footer className="register-footer">v1.0</footer>
    </div>
  );
}

