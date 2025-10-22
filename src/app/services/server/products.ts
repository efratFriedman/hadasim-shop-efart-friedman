import { Collection } from 'mongodb';
import { client } from './mongo';
import { Product } from '@/types/product';

export async function fetchProducts(): Promise<Product[]> {
  const db = client.db("hadasim-shop");
  const collection = db.collection("products") as Collection<Product>;
  return collection.find({}).toArray();
}
