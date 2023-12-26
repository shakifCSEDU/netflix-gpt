import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utility/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";


const useUpcomingMovies = ()=>{
  const dispatch  = useDispatch();

  const upComingMovies = useSelector(store => store.movies.upComingMovies);

  const getUpComingMovies = async ()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
    const json = await data.json();
   
    dispatch(addUpcomingMovies(json.results));

  }
  useEffect(()=>{
    !upComingMovies && getUpComingMovies();
  },[])  
}
export default useUpcomingMovies;
