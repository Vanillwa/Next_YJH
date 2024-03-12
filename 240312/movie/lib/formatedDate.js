export default function formatedDate(time) {
  const date = new Date(time);
  return date.toLocaleDateString("ko-KR");
}
