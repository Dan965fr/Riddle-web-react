
import React, { useState } from "react";

interface RiddleCardProps {
  riddle: {
    id: string;
    taskDescription: string;
    correctAnswer: string;
    choices?: string[];
  };
  onAnswerCorrect: (timeTaken: number) => void;
}

const RiddleCard: React.FC<RiddleCardProps> = ({ riddle, onAnswerCorrect }) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [startTime] = useState(Date.now());

  const handleSubmit = () => {
    if (answer.trim() === riddle.correctAnswer) {
      const endTime = Date.now();
      onAnswerCorrect((endTime - startTime)/1000);
    } else {
      setError("Wrong answer, try again!");
    }
  };

  return (
    <div className="riddle-card">
      <p>{riddle.taskDescription}</p>

      {riddle.choices ? (
        <div>
          {riddle.choices.map((choice, idx) => (
            <button key={idx} onClick={() => { setAnswer(choice); handleSubmit(); }}>
              {choice}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
};

export default RiddleCard;
