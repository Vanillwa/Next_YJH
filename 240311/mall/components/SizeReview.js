function formatDate(time) {
  let date = new Date(time);
  let year = date.getFullYear().toString().slice(-2);
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const labels = {
  gender: { male: "남성", female: "여성" },
  fit: { small: "작음", good: "적당함", big: "큼" },
};

export const SizeReview = ({ review }) => {
  return (
    <li>
      <div>
        <div>{formatDate(new Date(review.createdAt))}</div>
        <div>
          ({labels.gender[review.sex]} {review.height}cm 기준){review.size}
        </div>
      </div>
      <div>{labels.fit[review.fit]}</div>
    </li>
  );
};
