import { getAllSites } from "@/lib/firestoreDb_admin";

export default async function handler(_, res) {
  const { sites, error } = await getAllSites();

  if (error) {
    return res.status(500).json({ error });
  }

  return res.status(200).json({ sites });
}
