import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetching Data from tmdb Api and update store
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    // Fetching the now playing movies from the API
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    
    // Converting the response to JSON format
    const json = await data.json();
    
    // Logging the results (optional, can be removed)
    // console.log(json.results);
    
    // Dispatching the action to update the Redux state with the now playing movies
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // Fetch the now playing movies when the component is mounted
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;

