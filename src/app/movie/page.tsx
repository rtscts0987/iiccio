import Github from "@/components/github";
import Movie_feach from "@/components/movie_feach";

export const metadata = {
  title: "Nomad Coder BBalgang Movie",
  description: "Default BBalgang Movie Site",
};

export default function movie() {
  return (
    <>
      <Github />
      <div className="w-[50%] h-[100%] bg-black">
        <h1 className="bg-red-500">Mavel's Characters List</h1>
      </div>
      <Movie_feach />
    </>
  );
}
