import axios from 'axios';

const fetchFromCMS = async (path) => {
  const url = `https://ideia-unica-six-xi.vercel.app/${path}`;
  const res = await axios.get(url);
  console.log('data:',res.data);
  return res.data;
};

export default fetchFromCMS;
