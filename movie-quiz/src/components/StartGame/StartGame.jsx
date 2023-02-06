import { Link } from "react-router-dom";
import "./StartGame.css";

const StartGame = () => {
  return (
    <div className="home-bg-img">
      <div className="rules-text-container">
        <h1>Welcome to our best movie app</h1>
        <h2>The rules are:</h2>
        <ol>
          <li>5 Movies - 1 question each.</li>
          <li>Look at the image and answer the question.</li>
          <li>Only 1 answer is true.</li>
          {/* <li>Your final score will be shown in %</li> */}
        </ol>
        <Link className="btn btn-start-game" to="/game">
          Start Game
        </Link>
      </div>
    </div>
  );
};
export default StartGame;
