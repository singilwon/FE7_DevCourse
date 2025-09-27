import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

export default function useAxios(url: string) {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await axiosInstance.get<TMDBDataType>(url);
        setMovies(results);
      } catch (e) {
        setError((e instanceof Error && e.message) || "unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { movies, isLoading, error };
}
