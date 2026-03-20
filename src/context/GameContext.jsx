import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playing, setIsPlaying] = useState(false);

  const [score, setScore] = useState(0);

  const [molePosition, setMolePosition] = useState(0);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const restartGame = () => {
    setPlaying(false);
    setScore(0);
  };

  return (
    <GameContext.Provider
      value={{
        playing,
        score,
        molePosition,
        startGame,
        whackMole,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
