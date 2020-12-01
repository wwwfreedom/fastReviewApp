import { auth } from "@/lib/firebase_serverside_adminSdk";
import { getUserFeedback } from "@/lib/firestoreDb_admin";

export default async function handler(req, res) {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const feedback = await getUserFeedback(uid);
    return res.status(200).json(feedback);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
