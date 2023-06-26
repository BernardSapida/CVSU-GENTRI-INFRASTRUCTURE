import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("buildings");

    const buildings = await db
      .collection("educational buildings")
      .find({})
      .toArray();

    res.json(buildings);
  } catch (e) {
    console.error(e);
  }
}
