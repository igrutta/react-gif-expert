const apiKey = "ppHwgTpPvSaRn5VROmTihA1YNk8hsOD8";

const limit = 5;
const offset = 10;

export const getGifs = async (category) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}&offset=${offset}`
  );
  const { data } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
