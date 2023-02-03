import "../Game/Game.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const KEY = import.meta.env.VITE_API_KEY;

const Game = () => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w1280/";
  const [img, setImg] = useState("");
  const [movies, setMovies] = useState([]);
  const [solution, setSolution] = useState({});
  const [plays, setPlays] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const navigate = useNavigate();

  const generateMovies = (movies) => {
    const indexes = [];
    const movieArr = [];
    while (indexes.length < 4) {
      const i = Math.floor(Math.random() * 20);
      if (indexes.indexOf(i) === -1) {
        movieArr.push(movies[i]);
        indexes.push(i);
      }
    }
    return movieArr;
  };

  const getMovieData = async () => {
    try {
      const page = Math.floor(Math.random() * 10) + 1;
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=${page}`
      );
      setMovies(generateMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const chosenMovie = movies[Math.floor(Math.random() * 4)];
      setSolution(chosenMovie);
      setImg(chosenMovie.backdrop_path);
      console.log(chosenMovie.title);
    }
  }, [movies]);

  const handleButtonClick = (e) => {
    console.log(e.target.value);
    const choice = e.target.value;
    checkIfCorrect(choice);
    setPlays((prevPlays) => prevPlays + 1);
    checkGameOver();
    getMovieData();
  };

  const checkGameOver = () => {
    console.log(correctGuesses);
    if (plays >= 5) {
      navigate("/end", { state: correctGuesses });
    }
  };

  const checkIfCorrect = (choice) => {
    if (choice === solution.title) {
      console.log("correct");
      setCorrectGuesses((correctGuesses) => correctGuesses + 1);
    }
  };

  return (
    <div className="home-bg-img-start">
      <div className="box-question">
        <h2>You've played {plays} out of 5 rounds</h2>
        {img && <img src={imgBaseUrl + img} alt="" />}
        <div className="question-answer-container">
          <h2 className="question">Which movie is this?</h2>
          {movies.length > 0 && (
            <div className="answers">
              <button
                className="answer"
                value={movies[0].title}
                onClick={handleButtonClick}
              >
                {movies[0].title}
              </button>
              <button
                className="answer"
                value={movies[1].title}
                onClick={handleButtonClick}
              >
                {movies[1].title}
              </button>
              <button
                className="answer"
                value={movies[2].title}
                onClick={handleButtonClick}
              >
                {movies[2].title}
              </button>
              <button
                className="answer"
                value={movies[3].title}
                onClick={handleButtonClick}
              >
                {movies[3].title}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
