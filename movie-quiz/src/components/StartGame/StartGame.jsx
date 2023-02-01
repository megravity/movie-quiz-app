import { Link } from "react-router-dom";

const StartGame = () => {
  return (
    <div>
      <h1>Welcome to our best movie app</h1>
      <h2>The rules are:</h2>
      <ol>
        <li>20 Movies - 4 questions each</li>
        <li>Look at the image and answer the question</li>
        <li>Only 1 answer is true</li>
        <li>Your final score will be shown in %</li>
      </ol>
      <Link to="/game">Start Game</Link>
    </div>
  );
};
export default StartGame;
