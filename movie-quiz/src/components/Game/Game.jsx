import '../Game/Game.css';
import axios from "axios";
import { useState, useEffect } from "react";
const KEY = import.meta.env.VITE_API_KEY;

const Game = () => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/w1280/";
  const [img, setImg] = useState("");
  const [movies, setMovies] = useState([]);

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
    if (movies.length > 0) setImg(movies[0].backdrop_path);
  }, [movies]);

  return (<div className='home-bg-img-start'>
        {img && <img src={imgBaseUrl + img} alt="" />}
        <div className='box-qestion'></div>
      </div>);

};

export default Game;
