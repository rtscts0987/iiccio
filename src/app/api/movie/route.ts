import { getMovies } from "@/service/movie";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const movies = await getMovies();
  return NextResponse.json({ movies });
}
