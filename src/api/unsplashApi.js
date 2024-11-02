import axios from "axios";

const key = "AcvZrYO3lEDYHSZ_6ch96lZrXV5-f1TEvieIYnqKcfA";
axios.defaults.baseURL = "https://api.unsplash.com/";
const config = {
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${key}`,
  },
  params: {
    orientation: "landscape",
    per_page: 12,
    content_filter: "low",
  },
};

async function requestApi(value, page) {
  config.params.query = value;
  config.params.page = page;
  const { data } = await axios.get("/search/photos", config);
  return data;
}

export default requestApi;
