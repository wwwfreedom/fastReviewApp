import { getAllFeedback } from "@/lib/firestoreDb_admin";

export default async function handler(req, res) {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);

  return res.status(200).json(feedback);
}
