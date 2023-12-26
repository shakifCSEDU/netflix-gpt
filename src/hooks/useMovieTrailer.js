import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addTrailerVideos } from "../utility/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
 
  const dispatch = useDispatch();
  
  const trailerVideo = useSelector(store => store.movies.trailerVidedo);

  // fetch the trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
}
export default useMovieTrailer;