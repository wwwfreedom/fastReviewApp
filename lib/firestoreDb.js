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
  // get a doc ref so you can return the id fast to update the ui optimistically
  const site = firestore.collection("sites").doc();
  site.set({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  return site;
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
