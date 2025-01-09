import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    // Fetching Data from tmdb Api and update store
  const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    // Fetching the now playing movies from the API
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    );
    
    // Converting the response to JSON format
    const json = await data.json();
    
    // Logging the results (optional, can be removed)
    // console.log(json.results);
    
    // Dispatching the action to update the Redux state with the now playing movies
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // Fetch the now playing movies when the component is mounted
    getPopularMovies();
  }, []);

}

export default usePopularMovies;

