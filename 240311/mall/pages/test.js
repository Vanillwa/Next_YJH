import Image from "next/image";

export default function test() {
  return (
    <>
      <div>
        <img src='/images/product-06.png' width={120} alt='name'></img>
        <p>그냥 img</p>
      </div>
      <div style={{ position: "relative", width: "30%", height:"500px" }}>
        <Image src='/images/product-06.png' fill alt='name'></Image>
        <p>Image 컴포넌트</p>
      </div>
    </>
  );
}
