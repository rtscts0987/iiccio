import path from "path";
import { promises as fs } from "fs";

const filename = "maveldata.json";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export async function getMavels(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getMavel(id: string): Promise<Product | undefined> {
  const products = await getMavels();
  return products.find((item) => item.id === id);
}
