import { getAllSites } from "@/lib/firestoreDb_admin";

export default async function handler(_, res) {
  const sites = await getAllSites();

  return res.status(200).json({ sites });
}
