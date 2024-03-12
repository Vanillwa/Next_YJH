import SearchForm from "@/components/SearchForm";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMovies } from "./api/api";
import MovieList from "@/components/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await getMovies();
    console.log("Movies Data : ", data)
    setMovies(data);
  };

  useEffect(()=>{
    fetchMovies();
  }, [])

  return (
    <>
      <h1 className={styles.title}>Movie List</h1>
      <SearchForm></SearchForm>
      <MovieList movies={movies}></MovieList>
    </>
  );
}
