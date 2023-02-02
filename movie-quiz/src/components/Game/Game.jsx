import "../Game/Game.css";
import axios from "axios";
import { useState, useEffect } from "react";
const KEY = import.meta.env.VITE_API_KEY;

const Game = () => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w1280/";
  const [img, setImg] = useState("");
  const [movies, setMovies] = useState([]);
  const [solution, setSolution] = useState({});

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
    }
  }, [movies]);

  console.log(movies);

  return (
    <div className="home-bg-img-start">
      <div className="box-question">
        {img && <img src={imgBaseUrl + img} alt="" />}
        <h2 className="question">Which movie is this?</h2>
        {movies.length > 0 && (
          <div className="answers">
            <button className="answer">{movies[0].title}</button>
            <button className="answer">{movies[1].title}</button>
            <button className="answer">{movies[2].title}</button>
            <button className="answer">{movies[3].title}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
