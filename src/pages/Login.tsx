import { useState } from "react";
import { Link } from "react-router";
import './Login.css';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !password) {
      setError("Please fill all fields");
      return;
    }
    console.log("Login:", userName, password);
  };

  return (
    <div className="login-page">
      <div className="login-topbar">
        <Link to="/" className="login-top-left">Home</Link>
      </div>

      <div className="login-center">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>

      <footer className="login-footer">v1.0</footer>
    </div>
  );
}

