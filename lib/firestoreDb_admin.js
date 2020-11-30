import { db } from "@/lib/firebase_serverside_adminSdk";
import formatDate from "@/utils/formatDate";

export async function getAllFeedback(siteId) {
  // TODO: handle bad path when firebase call fail
  const snapshot = await db
    .collection("feedback")
    .orderBy("createdAt", "desc")
    .where("siteId", "==", siteId)
    .get();

  const feedback = [];

  snapshot.forEach((doc) => {
    const { createdAt, ...data } = doc.data();
    feedback.push({
      id: doc.id,
      createdAt: formatDate(createdAt.toDate()),
      ...data
    });
  });

  return feedback;
}

// by default limit to 10 results
export async function getAllSites(limit = 10) {
  const sites = [];
  const sitesRef = await db.collection("sites");
  const snapshot = await sitesRef
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  snapshot.forEach((doc) => {
    const { createdAt, ...data } = doc.data();
    const formattedCreatedAt = formatDate(createdAt.toDate());
    sites.push({
      id: doc.id,
      createdAt: formattedCreatedAt,
      ...data
    });
  });
  return { sites };
}

export async function getUserSites(userId, limit = 10) {
  const sites = [];
  const snapshot = await db
    .collection("sites")
    .where("authorId", "==", userId)
    .limit(limit)
    .get();

  snapshot.forEach((doc) => {
    const { createdAt, ...data } = doc.data();
    const formattedCreatedAt = formatDate(createdAt.toDate());
    sites.push({
      id: doc.id,
      createdAt: formattedCreatedAt,
      ...data
    });
  });
  return { sites };
}
