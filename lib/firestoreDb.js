// clientside firestore db access
import firebase from './firebase'
import getStripe from './stripe'

const db = firebase.firestore()
const app = firebase.app()

export function createUser(uid, data) {
  console.log('🚀 ~ file: firestoreDb.js ~ line 6 ~ createUser ~ uid', uid)
  // collection equivalent to table in SQL
  return (
    db
      .collection('users')
      .doc(uid)
      // merge true will prevent overwrite if there is some data already exist
      .set({ uid, ...data }, { merge: true })
  )
}

export function createSite(data) {
  // get a doc ref so you can return the id fast to update the ui optimistically
  const site = db.collection('sites').doc()
  site.set({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  return site
}

export function createFeedback(data) {
  return db.collection('feedback').add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}

// soft delete
export function deleteFeedback(id) {
  return db.collection('feedback').doc(id).update({
    status: 'removed',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
}

export function updateFeedback(id, newValues) {
  return db
    .collection('feedback')
    .doc(id)
    .update({
      ...newValues,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export async function createCheckoutSession(userId) {
  const checkoutSessionRef = await db
    .collection('users')
    .doc(userId)
    .collection('checkout_sessions')
    .add({
      price: 'price_1HucekFI7ynSRdWl0cFmHPUp',
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    const { error, sessionId } = snap.data()
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`)
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe()
      stripe.redirectToCheckout({ sessionId })
    }
  })
}

export async function goToBillingPortal() {
  // Call billing portal firebase function
  const functionRef = app
    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink')
  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })
  window.location.assign(data.url)
}
