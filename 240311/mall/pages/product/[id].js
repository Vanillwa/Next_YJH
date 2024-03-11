import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProduct , getSizeReviews } from "../api/api";
import { SizeReviewList } from "@/components/SizeReviewList";

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
      <h1>Product</h1>
      <p>{product.name}</p>
      <img src={product.imgUrl} alt={product.name} width="300px"></img>
      <SizeReviewList sizeReviews={sizeReviews}></SizeReviewList>
    </>
  );
}
