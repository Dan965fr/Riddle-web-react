import { Link } from "react-router";

export default function Header() {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/login">Login</Link> | {" "}
            <Link to="/regisrer">Register</Link> | {" "}
            <Link to="/play">Play</Link> | {" "}
            <Link to="/leaderboard">Leaderboard</Link> | {" "}
            <Link to="/admi">Admin</Link> | {" "}
        </nav>
    </header>
  )
}
