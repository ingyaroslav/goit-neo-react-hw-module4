import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImage = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: "QeFAhaKvOCI4n6lEg6OwmjV__vMV7IiEF5KpUKjlUwc",
      page,
      query: searchQuery,
      per_page: 12,
    },
  });

  return response.data;
};