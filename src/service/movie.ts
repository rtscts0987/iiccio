import path from "path";
import { promises as fs } from "fs";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export async function getMovies(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "src", "data", "moviedata.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getMovie(id: string): Promise<Product | undefined> {
  const products = await getMovies();
  return products.find((item) => item.id === id);
}
