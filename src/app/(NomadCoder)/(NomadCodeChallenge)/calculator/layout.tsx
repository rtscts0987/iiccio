import Link from "next/link";

export const metadata = {
  title: "calculator",
  description: "calculator",
};

export default function layout_movie({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="justify-center mx-10">
        {/* <Link href={"/calculator"}>
          <p className="m-2 bg-blue-600 w-24 text-center">👈calculator</p>
        </Link> */}
        <div>{children}</div>
      </div>
    </>
  );
}
