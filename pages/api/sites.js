import db from "@/lib/firebase_serverside_adminSdk";

export default async function handler(_, res) {
  const sites = [];
  const sitesRef = await db.collection("sites");
  const snapshot = await sitesRef.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return res.status(403).json({ error: "Nothing was found" });
  }

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return res.status(200).json(sites);
}
