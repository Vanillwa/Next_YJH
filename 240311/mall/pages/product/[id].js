import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProduct, getSizeReviews } from "../api/api";
import { SizeReviewList } from "@/components/SizeReviewList";
import styles from "@/styles/Product.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Product() {
  const router = useRouter();
  let { id } = router.query;

  const [product, setProduct] = useState({});
  const [sizeReviews, setSizeReviews] = useState([]);
  const fetchProductData = async (id) => {
    const data = await getProduct(id);
    setProduct(data);
  };
  const fetchReviewData = async (id) => {
    const data = await getSizeReviews(id);
    setSizeReviews(data);
  };

  useEffect(() => {
    if (!id) return;
    fetchProductData(id);
    fetchReviewData(id);
  }, [id]);

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <h1>Product</h1>
      <p>{product.name}</p>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image src={product.imgUrl} alt={product.name} fill></Image>
          </div>
          <div className={styles.info}>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <th>브랜드 품번</th>
                  <td>
                    {product.brand} / {product.productCode}
                  </td>
                </tr>
                <tr>
                  <th>제품명</th>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <th>가격</th>
                  <td>
                    <span className={styles.salePrice}>{product.price}원</span>
                    {product.salePrice}원
                  </td>
                </tr>
                <tr>
                  <th>포인트 적립</th>
                  <td>{product.point}</td>
                </tr>
                <tr>
                  <th>구매후기</th>
                  <td className={styles.starRating}>
                    {/* <starRating value={product.starRating}></starRating> */}
                    {product.starRatingCount}
                  </td>
                </tr>
                <tr>
                  <th>조아요</th>
                  <td className={styles.like}>{product.likeCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h3 className={styles.sectionTitle}>제품정보</h3>
      </section>
      <SizeReviewList sizeReviews={sizeReviews}></SizeReviewList>
    </>
  );
}
