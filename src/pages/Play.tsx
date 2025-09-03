import React, { useEffect, useState } from "react";
import TopBar from "../comps/Top-bar";
import Footer from "../comps/Footer";
import RiddleCard from "../comps/RiddleCard";
import { getAllRiddles } from "../services/riddleService";
import { getAllPlayers, updatePlayerTime } from "../services/playerService";
import "./Play.css";

interface Riddle {
  id: string;
  taskDescription: string;
  correctAnswer: string;
  choices?: string[];
}
interface Player {
  id: string;
  username: string;
  best_time?: number;
}

const PlayPage: React.FC = () => {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [tempName, setTempName] = useState("");
  const [gameFinished, setGameFinished] = useState(false);

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    const fetchRiddles = async () => {
      const data = await getAllRiddles(token);
      setRiddles(data);
    };
    fetchRiddles();
  }, [token]);

  const handleStartGame = () => {
    setPlayerName(tempName || "Guest");
  };

  const handleAnswerCorrect = async (timeTaken: number) => {
    setTotalTime(prev => prev + timeTaken);

    if (currentIndex + 1 < riddles.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameFinished(true);

      if (token) {
        try {
          const allPlayers = await getAllPlayers(token);
          const player = allPlayers.find(
            (p: Player) => p.username.toLowerCase() === playerName.toLowerCase()
          );
          if (player) {
            await updatePlayerTime(player.id, totalTime + timeTaken, token);
          }
        } catch (err) {
          console.error("Error updating player time:", err);
        }
      }
    }
  };

  if (riddles.length === 0) return <p>Loading riddles...</p>;

  return (
    <div className="play-page">
      <TopBar leftText="Play" />
      <div className="play-content">
        {!playerName && !gameFinished && (
          <div className="player-name-form">
            <h2>Enter your name to start:</h2>
            <input
              type="text"
              value={tempName}
              onChange={e => setTempName(e.target.value)}
              placeholder="Your name..."
            />
            <button onClick={handleStartGame}>Start Game</button>
          </div>
        )}

        {playerName && !gameFinished && (
          <>
            <h2>
              Riddle {currentIndex + 1} / {riddles.length}
            </h2>
            <RiddleCard
              riddle={riddles[currentIndex]}
              onAnswerCorrect={handleAnswerCorrect}
            />
          </>
        )}

        {gameFinished && (
          <div className="finish-screen">
            <h2>Well done {playerName}!</h2>
            <p>Total time: {totalTime} seconds</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PlayPage;




