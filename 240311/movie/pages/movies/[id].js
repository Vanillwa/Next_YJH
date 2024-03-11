import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";

export default function Movies() {
  const router = useRouter();
  const { id } = router.query;
  console.log("id : ", id);

  const [movieData, setMovieData] = useState({});

  const fetchData = async () => {
    const data = await getProducts(id);
    console.log(data)
    setMovieData(data)
  };
  
  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <>
      <h1>Movie</h1>
      <p>{movieData.brand}</p>
    </>
  );
}
