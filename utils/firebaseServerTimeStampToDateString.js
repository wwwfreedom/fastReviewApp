import formatDate from './formatDate'

// replace the firebase.firestore.FieldValue.serverTimestamp() value in createdAt and updatedAt to normal date string.
// refer to here https://firebase.google.com/docs/reference/android/com/google/firebase/Timestamp
export default function firebaseServerTimeStampToDateString(obj) {
  if (!obj) {
    throw new Error(
      'require an object as argument to firebaseServerTimeStampToDateString'
    )
  }

  const parsedObj = {}

  for (const [key, value] of Object.entries(obj)) {
    if (key === 'createdAt' || key === 'updatedAt') {
      parsedObj[key] = formatDate(value.toDate())
    } else {
      parsedObj[key] = value
    }
  }

  return parsedObj
}
