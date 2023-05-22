import Github from "@/components/github";
import Movie_feach from "@/components/NomadCoder/NomadCodeChallenge/Movie/movie_feach";
import CodsandboxCalculatorLink from "@/components/NomadCoder/NomadCodeChallenge/calculator/codesandboxLink";
import CodsandboxCalculatorCode from "@/components/NomadCoder/NomadCodeChallenge/calculator/CodsandboxCalculatorCode";

export const metadata = {
  title: "Nomad Coder BBalgang Movie",
  description: "Default BBalgang Movie Site",
};

export default function movie() {
  return (
    <>
      <CodsandboxCalculatorLink />
      <div className="mt-10"></div>
      <div className="w-[50%] h-[100%] bg-black">
        <h1 className="bg-red-500 my-3">Calculator</h1>
      </div>
      <CodsandboxCalculatorCode />
    </>
  );
}
