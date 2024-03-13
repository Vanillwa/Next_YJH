import { ProductList } from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";
import { getProductsByKeyword } from "./api/api";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const { keyword } = router.query;

  const [products, setProducts] = useState([]);
  const fetchProductsData = async (keyword) => {
    const data = await getProductsByKeyword(keyword);
    setProducts(data);
  };

  useEffect(() => {
    fetchProductsData(keyword);
  }, [keyword]);

  return (
    <>
    <Head>
        <title>{keyword} 검색결과</title>
      </Head>
      <h1>Search</h1>
      <SearchForm initialKeyword={keyword}></SearchForm>
      <ProductList products={products}></ProductList>
    </>
  );
}
