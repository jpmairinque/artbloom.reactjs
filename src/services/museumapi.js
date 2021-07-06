const fetchArt = async () => {
  var art = [];
  while (art.length < 10) {
    const randomNum = Math.floor(Math.random() * (20000 - 10000)) + 10000;
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomNum}`
    );

    const data = await res.json();

    if (data.primaryImageSmall != "" && data.objectID) {
      art = [...art, data];
    }
  }

  return art;
};
export default fetchArt;
