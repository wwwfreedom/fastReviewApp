export default async function getRestApi(...args) {
  const res = fetch(...args);
  return (await res).json();
}
