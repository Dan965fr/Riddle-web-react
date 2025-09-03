import { useState } from "react";
import './Play.css';

const riddles = [
  "What has keys but can't open locks?",
  "I speak without a mouth. What am I?",
  "What runs but never walks?"
];

export default function Play() {
  const [index, setIndex] = useState<number>(0);

  const nextRiddle = () => {
    setIndex((prev) => (prev + 1) % riddles.length);
  };

  return (
    <div className="play-container">
      <h2>Play Page</h2>
      <p>{riddles[index]}</p>
      <button onClick={nextRiddle}>Next Riddle</button>
    </div>
  );
}

