import db from "@/lib/firebase_serverside_adminSdk";
import dayjs from "dayjs";

export default async function handler(_, res) {
  const sites = [];
  const sitesRef = await db.collection("sites");
  const snapshot = await sitesRef.orderBy("createdAt", "desc").limit(10).get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return res.status(403).json({ error: "Nothing was found" });
  }

  snapshot.forEach((doc) => {
    const { createdAt, ...data } = doc.data();
    const formattedCreatedAt = dayjs(createdAt.toDate()).format("DD/MM/YYYY");
    sites.push({
      id: doc.id,
      createdAt: formattedCreatedAt,
      ...data
    });
  });

  return res.status(200).json({ sites });
}
