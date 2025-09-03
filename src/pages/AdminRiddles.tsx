import { useState } from "react";
import { Link } from "react-router";
import './Admin.css';

type Riddle = {
  id: number;
  question: string;
  difficulty: string;
}

export default function AdminRiddles() {
  const [riddles, setRiddles] = useState<Riddle[]>([
    { id: 1, question: "What has keys but can't open locks?", difficulty: "Easy" },
    { id: 2, question: "I speak without a mouth. What am I?", difficulty: "Medium" },
  ]);

  const deleteRiddle = (id: number) => {
    setRiddles(riddles.filter(r => r.id !== id));
  };

  return (
    <div className="admin-page">
      <div className="admin-topbar">
        <Link to="/" className="admin-top-left">Home</Link>
      </div>

      <div className="admin-center">
        <h2>Admin Riddles</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Difficulty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riddles.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.difficulty}</td>
                <td className="actions">
                  <button onClick={() => alert(`Edit ${r.id}`)}>Edit</button>
                  <button onClick={() => deleteRiddle(r.id)}>Delete</button>
                  <button onClick={() => alert(`View ${r.id}`)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="admin-footer">v1.0</footer>
    </div>
  );
}

