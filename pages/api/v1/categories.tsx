import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("Infrastructure");

    const categories = await db.collection("category1").find({}).toArray();

    res.json(categories);
  } catch (e) {
    console.error(e);
  }
}
