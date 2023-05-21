// import { useRouter } from "next/router";

export const metadata = {
  title: "Nomad Coder BBalgang Movie",
  description: "Default BBalgang Movie Site",
};

export default function movieIntro() {
  // const router = useRouter();
  // useRouter("/movie");
  return (
    <>
      <div className="w-[50%] h-[100%] bg-black">
        <h1 className="bg-red-500">Movie</h1>
      </div>
    </>
  );
}
