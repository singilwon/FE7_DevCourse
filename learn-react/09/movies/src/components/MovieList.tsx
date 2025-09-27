import MovieLoaderCard from "./MovieCardLoader";
import MovieListItem from "./MovieListItem";
import MovieCardError from "./MovieCardError";
import useAxios from "./hooks/useAxios";

export default function MovieList({
  movie,
  title,
}: {
  movie: string;
  title: string;
}) {
  const { movies, isLoading, error } = useAxios(movie);
  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>

          {error && <MovieCardError error={error} />}

          {!error && (
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, idx) => (
                  <MovieLoaderCard key={idx} />
                ))
              ) : movies && movies.length > 0 ? (
                movies.map((movie) => (
                  <MovieListItem key={movie.id} movie={movie} />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-400">
                  현재 상영 중인 영화가 없습니다.
                </p>
              )}
            </div>
          )}
        </section>
      </article>
    </>
  );
}
