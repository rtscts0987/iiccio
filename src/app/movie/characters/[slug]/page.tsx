import Movie_character_feach from "@/components/movie_charictor_feach";

interface Props {
  params: {
    slug: string;
  };
}

export default function CharacterPage({ params: { slug } }: Props) {
  return (
    <>
      <div>
        <Movie_character_feach id={slug} />
      </div>
    </>
  );
}
