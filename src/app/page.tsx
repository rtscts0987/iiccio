import Image from "next/image";
import Link from "next/link";
import Layout_main from "@/components/layout_main";

export default function Home() {
  return (
    <>
      {/* <h1 className="m-3s">빨강의 Nextjs Room</h1> */}
      <Layout_main button={false} init={true} />
    </>
  );
}
