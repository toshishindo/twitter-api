import axios from 'axios';

export default async (path) => {
  const res = await axios.get(path);
  
  console.log(res);

  return res;
}
