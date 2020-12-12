import { getAllFeedback, getSite } from '@/lib/firestoreDb_admin'

export default async function handler(req, res) {
  const siteId = req.query.siteId
  try {
    const { feedback } = await getAllFeedback(siteId)
    const { site } = await getSite(siteId)

    res.status(200).json({ feedback, site })
  } catch (error) {
    res.status(500).json({ error })
  }
}
