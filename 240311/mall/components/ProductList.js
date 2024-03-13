import Link from "next/link";
import styles from "@/styles/ProductList.module.css";
import Image from "next/image";

export const ProductList = ({ products = [] }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product, i) => {
        return (
          <li key={product.id}>
            <Link className={styles.product} href={`/product/${product.id}`}>
              <div className={styles.imageWrapper}>
                <Image src={product.imgUrl} alt={product.name} fill></Image>
              </div>
              <span>{product.name}</span>
              <br />
              {product.price}원
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
