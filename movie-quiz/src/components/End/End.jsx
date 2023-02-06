import "../End/End.css";
import { useLocation } from "react-router-dom";

const End = () => {
  const { state } = useLocation();

  if (state >= 1) {
    return (
      <div className="end">
        <h2>Congrats! You got {state} out of 5 correct!</h2>
      </div>
    );
  } else {
    return (
      <div className="end">
        <h2>You got 0! Try again!</h2>
      </div>
    );
  }
};
export default End;
