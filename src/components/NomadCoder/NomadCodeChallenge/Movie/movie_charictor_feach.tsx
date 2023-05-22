"use client";
import { useEffect, useState } from "react";
import MavelCaractor from "./mavelCaractor";

interface Data {
  id: string;
}

export default function Movie_character_feach({ id }: Data) {
  const [movies, setMovies] = useState<any>();
  const [loding, setLoading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/" +
          id
      )
    ).json();
    setMovies(json.data.results);
    setLoading(true);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        {loding
          ? movies.map((movie: any) => (
              <MavelCaractor
                key={movie.id}
                name={movie.name}
                thumbnail={movie.thumbnail}
              />
            ))
          : ""}
      </div>
    </>
  );
}
