import { auth } from '@/lib/firebase_serverside_adminSdk'
import { getUserSites } from '@/lib/firestoreDb_admin'
import { formatObjectKeys, logger } from '@/utils/logger'

export default async function handler(req, res) {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token)
    const sites = await getUserSites(uid)
    return res.status(200).json(sites)
  } catch (error) {
    logger.error(
      {
        request: {
          headers: formatObjectKeys(req.headers),
          url: req.url,
          method: req.method,
        },
        response: {
          statusCode: res.statusCode,
        },
      },
      error.message
    )
    return res.status(500).json({ error })
  }
}
