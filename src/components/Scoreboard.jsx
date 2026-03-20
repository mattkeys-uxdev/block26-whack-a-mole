import { useGame } from "../context/GameContext";

export default function Scoreboard() {
  const { score, restartGame } = useGame();

  return (
    <>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
    </>
  );
}
