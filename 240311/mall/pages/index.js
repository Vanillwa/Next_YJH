import { ProductList } from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "./api/api";
import Head from "next/head";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <>
      <Head>
        <title>Hoodies Mall</title>
      </Head>
      <h1 className={styles.title}>Hoodies</h1>
      <div className={styles.searchForm}>
        <SearchForm></SearchForm>
      </div>
      <ProductList products={products}></ProductList>
    </>
  );
}
