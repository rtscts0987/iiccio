"use client";
import Link from "next/link";
import { useState } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface layout {
  button: boolean;
  init: boolean;
}

export default function Layout_main({ button, init }: layout) {
  const [hidden, setHidden] = useState(!init);
  const onClick = (event: any) => {
    setHidden(!hidden);
  };
  return (
    <>
      <button
        className={
          button
            ? "bg-red-700 text-yellow-400 w-[100px] border-x-8 border-gray-400 m-3"
            : "hidden"
        }
        onClick={onClick}
      >
        menu
      </button>
      <div className={hidden ? "hidden" : ""}>
        <h1 className="flex justify-center font-bold text-3xl my-2">
          빨강의 Nextjs Room
        </h1>
        <div className="ml-40 mr-40 text-center py-3 border-y-2 ">
          <div className="flex justify-between my-1">
            <Link className="bg-red-400 w-[100%] px-1" href="/">
              home
            </Link>
          </div>

          <div className="flex justify-between mx-5">
            <p>ReactJS : </p>
            <Link className="bg-sky-600 w-[150px]" href="/todo">
              todo
            </Link>

            <Link className="bg-yellow-600 w-[150px]" href={"/calculator"}>
              calculator
            </Link>
            <Link className="bg-sky-600 w-[150px]" href="/coin">
              coin
            </Link>
            <Link className="bg-green-600 w-[150px]" href="/movie">
              movie
            </Link>
          </div>
          <div className="flex justify-between mx-5 mt-1">
            <p>Typescripts : </p>
            <Link className="bg-sky-600 w-[150px]" href="/blockchain">
              blockchain
            </Link>
            <Link className="bg-yellow-600 w-[150px]" href="/callsignatures">
              callsignatures
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
