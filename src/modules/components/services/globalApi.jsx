import axios from "axios";

const serviceUrl = "https://api.themoviedb.org/3";
const api_key = "484640adfdbddd6a7fbe487257ed8697";

const trendingMovies = axios.get(
  `${serviceUrl}/trending/all/day?api_key=${api_key}`
);

export default trendingMovies;
