import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Movie List</h1>
      <SearchForm></SearchForm>
      <ul>
        <li><Link href="/movies/1">오펜하이머</Link></li>
        <li><Link href="/movies/2">인터스텔라</Link></li>
        <li><Link href="/movies/3">인셉션</Link></li>
      </ul>
    </>
  );
}
