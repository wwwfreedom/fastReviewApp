// setting up firebase admin SDK for use on the serverside api route of next.js
// you can the credential from firebase console settings/Service accounts
import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: JSON.parse(process.env.FIREBASE_PRIVATE_KEY),
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  })
}

const auth = admin.auth()
const db = admin.firestore()

export { auth, db }
