"use client";
import Link from "next/link";

interface Data {
  id: number;
  name: string;
}

export default function Mavel({ id, name }: Data) {
  return (
    <>
      <div>
        <Link href={"/movie/characters/" + id}>
          <h2 className="text-sky-500">{name}</h2>
        </Link>
      </div>
    </>
  );
}
