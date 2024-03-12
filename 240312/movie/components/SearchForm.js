import { useRouter } from "next/router";

export default function SearchFrom() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;

    router.push({
      pathname: "/search",
      query: { keyword },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='search' name='keyword'></input>
      <button type='submit'>검색</button>
    </form>
  );
}
