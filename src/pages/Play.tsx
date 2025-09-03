import { useState } from "react";
import { Link } from "react-router";
import './Play.css';

const riddles = [
  { question: "What has keys but can't open locks?", difficulty: "Easy" },
  { question: "I speak without a mouth. What am I?", difficulty: "Medium" },
  { question: "What runs but never walks?", difficulty: "Hard" }
];

export default function Play() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const nextRiddle = () => {
    setIndex((prev) => (prev + 1) % riddles.length);
    setAnswer("");
  };

  const submitAnswer = () => {
    console.log("Answer submitted:", answer);
    nextRiddle();
  };

  return (
    <div className="play-page">
      <div className="play-topbar">
        <Link to="/" className="play-top-left">Home</Link>
        <Link to="/leaderboard" className="play-top-right">Leaderboard</Link>
      </div>

      <div className="play-center">
        <h2>Play</h2>
        <p>Difficulty: {riddles[index].difficulty}</p>
        <p>{riddles[index].question}</p>
        <input
          type="text"
          placeholder="Your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={submitAnswer}>Submit</button>
        <p>{index + 1}/{riddles.length} riddles answered</p>
      </div>

      <footer className="play-footer">v1.0</footer>
    </div>
  );
}

