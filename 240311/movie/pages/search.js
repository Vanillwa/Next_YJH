import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const {keyword} = router.query

  return (
    <>
      <h1>Search</h1>
      <SearchForm initialKeyword={keyword}></SearchForm>
      <h2>{keyword} 검색결과</h2>
    </>
  );
}
