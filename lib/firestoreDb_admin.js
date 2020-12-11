// serverside firestore
import { db } from '@/lib/firebase_serverside_adminSdk'
import firebaseServerTimeStampToDateString from '@/utils/firebaseServerTimeStampToDateString'

export async function getAllFeedback(siteId) {
  // TODO: handle bad path when firebase call fail
  const snapshot = await db
    .collection('feedback')
    .orderBy('createdAt', 'desc')
    .where('siteId', '==', siteId)
    .get()

  const feedback = []

  snapshot.forEach((doc) => {
    const data = firebaseServerTimeStampToDateString(doc.data())
    feedback.push({
      id: doc.id,
      ...data,
    })
  })

  return { feedback }
}

// by default limit to 10 results
export async function getAllSites(limit = 10) {
  const sites = []
  const sitesRef = await db.collection('sites')
  const snapshot = await sitesRef
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .get()

  snapshot.forEach((doc) => {
    const data = firebaseServerTimeStampToDateString(doc.data())
    sites.push({
      id: doc.id,
      ...data,
    })
  })
  return { sites }
}

export async function getSite(siteId) {
  const doc = await db.collection('sites').doc(siteId).get()
  const site = { id: doc.id, ...doc.data() }

  return { site }
}

export async function getUserSites(userId, limit = 10) {
  const sites = []
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .get()

  snapshot.forEach((doc) => {
    const data = firebaseServerTimeStampToDateString(doc.data())
    sites.push({
      id: doc.id,
      ...data,
    })
  })
  return { sites }
}

export async function getUserFeedback(userId, limit = 10) {
  const feedback = []
  const snapshot = await db
    .collection('feedback')
    .where('authorId', '==', userId)
    .where('status', 'in', ['pending', 'active'])
    .limit(limit)
    .get()

  snapshot.forEach((doc) => {
    const data = firebaseServerTimeStampToDateString(doc.data())
    feedback.push({
      id: doc.id,
      ...data,
    })
  })
  return { feedback }
}
