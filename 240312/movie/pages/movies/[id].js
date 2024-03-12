import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMovieById, getMovieReviewsById } from "../api/api";
import styles from "@/styles/movies.module.css";
import MovieReviewList from "@/components/MovieReviewList";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState({});
  const [movieReviews, setMovieReviews] = useState([]);

  const fetchMovie = async () => {
    const data = await getMovieById(id);
    console.log("Movie Data : ", data);
    setMovie(data);
  };

  const fetchMovieReviews = async () => {
    const data = await getMovieReviewsById(id);
    console.log("MovieReviews Data : ", data);
    setMovieReviews(data);
  };

  useEffect(() => {
    if (!id) return;
    fetchMovie();
    fetchMovieReviews();
  }, [id]);

  return (
    <>
      <div>
        <h1>Movie Page</h1>
        <div>
          <div className={styles.header}>
            <img className={styles.poster} src={movie.posterUrl} alt={movie.title}></img>
            <div className={styles.info}>
              <div className={styles.englishTitle}>{movie.englishTitle}</div>
              <h3 className={styles.title}>{movie.title}</h3>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>개봉</th>
                    <td>{movie.date}</td>
                  </tr>
                  <tr>
                    <th>장르</th>
                    <td>{movie.genre}</td>
                  </tr>
                  <tr>
                    <th>국가</th>
                    <td>{movie.country}</td>
                  </tr>
                  <tr>
                    <th>등급</th>
                    <td>{movie.rating}</td>
                  </tr>
                  <tr>
                    <th>러닝타임</th>
                    <td>{movie.runningTime}</td>
                  </tr>
                  <tr>
                    <th>평점</th>
                    <td>{movie.starRating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>소개</h2>
            <p className={styles.description}>{movie.description}</p>
            <span className={styles.readMore}>더보기</span>
          </div>
          <div className={styles.reviewSection}>
            <div className={styles.sectionTitle}>내 리뷰 작성하기</div>
            <div>
              <h2 className={styles.sectionTitle}>리뷰</h2>
              <MovieReviewList movieReviews={movieReviews}></MovieReviewList>
            </div>
          </div>
        </div>
        <button type='button' onClick={() => router.back()}>
          뒤로가기
        </button>
      </div>
    </>
  );
}
