import { useState } from "react";

export default function AdminRiddles() {
  const [riddles, setRiddles] = useState(["Riddle 1", "Riddle 2"]);
  const [newRiddle, setNewRiddle] = useState("");

  const addRiddle = () => {
    if (newRiddle.trim() !== "") {
      setRiddles([...riddles, newRiddle]);
      setNewRiddle("");
    }
  };

  return (
    <div>
      <h2>Admin Riddles</h2>
      <input
        value={newRiddle}
        onChange={e => setNewRiddle(e.target.value)}
        placeholder="New Riddle"
      />
      <button onClick={addRiddle}>Add Riddle</button>
      <ul>
        {riddles.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

