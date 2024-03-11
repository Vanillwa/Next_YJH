import { ProductList } from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/home.module.css'
import { useEffect, useState } from 'react';
import { getProducts } from './api/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(()=>{
    fetchProductsData()
  }, [])

  return (
    <>
      <h1 className={styles.flower}>Next.js</h1>
      <SearchForm></SearchForm>
      <ProductList products={products}></ProductList>
    </>
  );
}
