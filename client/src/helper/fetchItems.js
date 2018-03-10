export default async (path) => {
  const res = await fetch(path);
  const body = await res.json();
  if (res.status !== 200) throw Error(body.message);
  console.log(body);

  return body;
}
