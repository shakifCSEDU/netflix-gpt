import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utility/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";


const useNowPlayingMovies = ()=>{
  const dispatch  = useDispatch();

  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);


  const getNowPlayingMovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    const json = await data.json();
   // console.log(json);
    dispatch(addNowPlayingMovies(json.results));

  }
  useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies();

  },[])  
  
  return(
    <div>
      Noww
    </div>
  )
}
export default useNowPlayingMovies;
