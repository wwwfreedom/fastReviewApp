// clientside firestore db access
import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  console.log("🚀 ~ file: firestoreDb.js ~ line 6 ~ createUser ~ uid", uid);
  // collection equivalent to table in SQL
  return (
    firestore
      .collection("users")
      .doc(uid)
      // merge true will prevent overwrite if there is some data already exist
      .set({ uid, ...data }, { merge: true })
  );
}

export function createSite(data) {
  return firestore.collection("sites").add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

export function createFeedback(data) {
  return firestore.collection("feedback").add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

export function deleteFeedback(id) {
  return firestore.collection("feedback").doc(id).delete();
}
