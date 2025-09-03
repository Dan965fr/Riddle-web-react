
import './Home.css';
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-topbar">
        <span className="home-top-left">Home</span>
        <Link to="/login" className="home-top-right">Login</Link>
      </div>

      <div className="home-center">
        <h1 className="home-title">Riddle Game</h1>
        <p className="home-subtitle">Ready to test your wits?</p>
        <div className="home-buttons">
          <Link to="/play"><button>Play</button></Link>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
      </div>

      <footer className="home-footer">v1.0</footer>
    </div>
  );
}

