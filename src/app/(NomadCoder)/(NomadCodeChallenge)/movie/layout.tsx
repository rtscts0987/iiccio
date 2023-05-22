import Link from "next/link";

export const metadata = {
  title: "mavel characters",
  description: "mavel character list",
};

export default function layout_movie({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="justify-center mx-10">
        <Link href={"/movie"}>
          <p className="m-2 bg-blue-600 w-24 text-center">👈Mavel</p>
        </Link>
        <div>{children}</div>
      </div>
    </>
  );
}
