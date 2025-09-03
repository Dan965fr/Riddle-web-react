import { Link } from "react-router";
import './Leaderboard.css';

const players = [
  { id: 1, rank: 1, name: "Alice", bestTime: "00:35" },
  { id: 2, rank: 2, name: "Bob", bestTime: "00:40" },
  { id: 3, rank: 3, name: "Charlie", bestTime: "00:50" }
];

export default function Leaderboard() {
  return (
    <div className="leaderboard-page">
      <div className="leaderboard-topbar">
        <Link to="/" className="leaderboard-top-left">Home</Link>
      </div>

      <div className="leaderboard-center">
        <h2>Leaderboard</h2>
        <input type="text" placeholder="Search by name" />
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Best Time</th>
            </tr>
          </thead>
          <tbody>
            {players.map(p => (
              <tr key={p.id}>
                <td>{p.rank}</td>
                <td>{p.name}</td>
                <td>{p.bestTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="leaderboard-footer">v1.0</footer>
    </div>
  );
}

