import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMoviesByKeyword } from "./api/api";
import MovieList from "@/components/MovieList";
import SearchFrom from "@/components/SearchForm";

export default function Search() {
  const router = useRouter();
  const { keyword = "공백" } = router.query;
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (keyword) => {
    const data = await getMoviesByKeyword(keyword);
    console.log("Search Data : ", data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies(keyword);
  }, [keyword]);

  return (
    <>
      <h1>Search Page</h1>
      <SearchFrom></SearchFrom>
      <p>{keyword} 검색 결과</p>
      <MovieList movies={movies}></MovieList>
      <button type='button' onClick={() => router.back()}>
        뒤로가기
      </button>
    </>
  );
}
