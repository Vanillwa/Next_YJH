import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchForm({initialKeyword=''}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(initialKeyword);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function handleKeywordSubmit(e) {
    e.preventDefault();
    router.push({
      pathname : "/search",
      query : {keyword}
    })
  }

  return (
    <form onSubmit={handleKeywordSubmit}>
      <input type='text' name='keyword' onChange={handleKeywordChange} value={keyword} required></input>
      <button type="submit">검색</button>
    </form>
  );
}
