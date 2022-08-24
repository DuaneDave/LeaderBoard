import renderData from './render.js';

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const { result } = data;
  renderData(result);
};

export default getData;
