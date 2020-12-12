export default async function getRestApi(url, token) {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  })

  const json = await res.json()
  return json
}
