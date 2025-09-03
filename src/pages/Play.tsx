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
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  useEffect(() => {
    const fetchRiddles = async () => {
      const data = await getAllRiddles();
      setRiddles(data);
    };
    fetchRiddles();
  }, []);

  const handleAnswerCorrect = async (timeTaken: number) => {
    setTotalTime((prev) => prev + timeTaken);

    if (currentIndex + 1 < riddles.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // סיימנו את כל החידות
      setGameFinished(true);

      try {
        const allPlayers = await getAllPlayers();
        const player = allPlayers.find(
          (p: Player) => p.username.toLowerCase() === playerName.toLowerCase()
        );

        if (player) {
          await updatePlayerTime(player.id, totalTime + timeTaken);
        }
      } catch (err) {
        console.error("Error updating player time:", err);
      }
    }
  };

  if (riddles.length === 0) return <p>Loading riddles...</p>;

  return (
    <div className="play-page">
      <TopBar leftText="Play" />

      <div className="play-content">
        {/* מסך בחירת שם והתחלת המשחק */}
        {!gameStarted && (
          <div className="player-name-form">
            <h2>Enter your name to start:</h2>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Your name..."
            />
            <button
              onClick={() => {
                if (playerName.trim() !== "") {
                  setGameStarted(true);
                } else {
                  alert("Please enter a valid name");
                }
              }}
            >
              Start
            </button>
          </div>
        )}

        {/* חידות במהלך המשחק */}
        {gameStarted && !gameFinished && playerName && (
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

        {/* מסך סיום */}
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



