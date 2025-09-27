import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFhMDA3ZjA5NGMwMGI2ODBjMjJjMmNhMDZjYzc2ZSIsIm5iZiI6MTc1ODgxODM2NC4zNiwic3ViIjoiNjhkNTcwM2M3ODdjN2M3MmQxZGNiYzdkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Vq8nmu6eQ8fv4y2qtybA31RLj3_2bhBLYJ-7J21oFCU",
  },
});
