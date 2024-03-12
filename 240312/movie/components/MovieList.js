import Link from "next/link";
import styles from "@/styles/movieList.module.css";

const labels = {
  gender: { male: "남성", female: "여성" },
};

export default function MovieList({ movies }) {
  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img className={styles.poster} src={movie.posterUrl} alt={movie.title}></img>
            </Link>
            <div className={styles.info}>
              <h2 className={styles.title}>{movie.title}</h2>
              <div className={styles.date}>
                {movie.date} / {movie.country}
              </div>
              <div className={styles.ratingWrapper}>
                <span className={styles.rating}>{movie.starRating}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
