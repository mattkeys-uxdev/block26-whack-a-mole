import { useGame } from "../context/GameContext";

export default function Field() {
  const { molePosition, whackMole } = useGame();
  const holes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ul className="field">
      {holes.map((holeIndex) => (
        <li key={holeIndex} className="hole">
          {holeIndex === molePosition && (
            <button className="mole" onClick={whackMole}>
              Mole
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
