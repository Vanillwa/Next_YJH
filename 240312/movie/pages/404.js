import Link from "next/link";

export default function NotFound (){
  return(
    <div>
      <div>페이지를 찾을 수 없워요</div>
      <div>
        <Link href="/" >홈으로</Link>
      </div>
    </div>
  )
}