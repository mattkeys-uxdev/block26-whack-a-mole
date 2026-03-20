import { useGame } from "../context/GameContext";

export default function Welcome() {
  const { startGame } = useGame();
  return (
    <>
      <p>Whack a mole as many times as you can!!</p>
      <button onClick={startGame}>Play</button>
    </>
  );
}
