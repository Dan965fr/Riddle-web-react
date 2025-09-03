import { Link, useLocation } from "react-router";
import './Header.css';

export default function Header() {
  const location = useLocation();

  const showLogin = true; 
  const showAllLinks = location.pathname !== "/"

  return (
    <header className="header">
      <nav>
        {showAllLinks && <Link to="/">Home</Link>}
        {showAllLinks && <Link to="/play">Play</Link>}
        {showAllLinks && <Link to="/leaderboard">Leaderboard</Link>}
        {showAllLinks && <Link to="/admin">Admin</Link>}
        {showLogin && <Link to="/login">Login</Link>}
        {showLogin && <Link to="/register">Register</Link>}
      </nav>
    </header>
  );
}

