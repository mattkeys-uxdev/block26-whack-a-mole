import { useGame } from "./context/GameContext";
import Welcome from "./components/Welcome";
import Scoreboard from "./components/Scoreboard";
import Field from "./components/Field";

export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
