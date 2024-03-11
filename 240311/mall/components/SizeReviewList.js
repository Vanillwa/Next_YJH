import { SizeReview } from "./SizeReview";

export const SizeReviewList = ({ sizeReviews }) => {
  return (
    <ul>
      {sizeReviews.map((review) => {
        return <SizeReview key={review.id} review={review}></SizeReview>;
      })}
    </ul>
  );
};