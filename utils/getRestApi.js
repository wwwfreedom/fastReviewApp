export default async function getRestApi(url, token) {
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin"
  });
  return (await res).json();
}
