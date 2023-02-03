import { useLocation } from "react-router-dom";

const End = () => {
  const { state } = useLocation();

  return <h2>Congrats you got {state} out of 5 correct</h2>;
};
export default End;
