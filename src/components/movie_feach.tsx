"use client";
import { useEffect, useState } from "react";
import Mavel from "./mavel";

export default function Movie_feach() {
  const [movies, setMovies] = useState<any>();
  const [loding, setLoading] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
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
              <Mavel key={movie.id} id={movie.id} name={movie.name} />
            ))
          : ""}
      </div>
    </>
  );
}
