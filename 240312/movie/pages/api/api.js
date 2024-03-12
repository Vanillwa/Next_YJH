import axios from "@/lib/axios";

export const getMovieById = async (id) => {
  const res = await axios.get(`/movies/${id}`);
  const data = res.data
  return data;
};

export const getMovieReviewsById = async (id)=>{
  const res = await axios.get(`/movie_reviews?movie_id=${id}`);
  const data = res.data.results ?? []
  return data;
}

export const getMovies = async () => {
  const res = await axios.get("/movies");
  const data = res.data.results ?? [];
  return data;
};

export const getMoviesByKeyword = async (keyword) => {
  const res = await axios.get(`/movies?q=${keyword}`);
  const data = res.data.results ?? [];
  return data;
};
