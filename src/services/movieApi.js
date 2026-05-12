const API_URL = "https://movies-api.accel.li/api/v2/movie_details.json";
const BASE_URL = "https://movies-api.accel.li/api/v2/list_movies.json";
const SUGGEST_URL = "https://movies-api.accel.li/api/v2/movie_suggestions.json";


export const fetchMoviesDetail = async (id) => {
  const res = await fetch(`${API_URL}?movie_id=${id}&with_images=true&with_cast=true`);

  if (!res.ok) throw new Error("Failed to fetch Movies Detail");

  const data = await res.json();
  return data?.data?.movie;
};


export const fetchMoviesList = async () => {
  const res = await fetch(`${BASE_URL}?limit=10&sort_by=trending_score`);

  if (!res.ok) throw new Error("Failed to fetch Movies List");

  const data = await res.json();
  return data?.data?.movies || [];
};


export const fetchSuggestionMovies = async (movie_id) => {
  const res = await fetch(`${SUGGEST_URL}?movie_id=${movie_id}`);

  if (!res.ok) throw new Error("Failed to fetch Suggestion movie");

  const data = await res.json();
  return data?.data?.movies || [];
};


export const fetchMovies = async ({ queryKey }) => {
  const [_key, { page, search, filters }] = queryKey;

  const { quality, genre, rating, limit, sort_by } = filters;

  let url = `https://movies-api.accel.li/api/v2/list_movies.json?page=${page}`;

  if (search) url += `&query_term=${encodeURIComponent(search.trim())}`;
  if (quality) url += `&quality=${quality}`;
  if (genre) url += `&genre=${genre}`;
  if (rating) url += `&minimum_rating=${rating}`;
  if (limit) url += `&limit=${limit}`;
  if (sort_by) url += `&sort_by=${sort_by}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("API Error");

  const data = await res.json();
  return data?.data?.movies || [];
};
