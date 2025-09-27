import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";

export default function Movie() {
  return (
    <>
      <MovieHeader />
      <MovieMain />
      <MovieList movie={"now_playing"} title={"Now playing"} />
      <MovieList movie={"popular"} title={"Popular"} />
      <MovieList movie={"upcoming"} title={"Upcoming"} />
    </>
  );
}
