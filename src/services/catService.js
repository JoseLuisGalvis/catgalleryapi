const API_URL = "https://api.thecatapi.com/v1/images/search";

export const fetchCatImages = async (limit) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`, {
      headers: {
        "x-api-key": process.env.CAT_API_KEY,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat images:", error);
    return [];
  }
};
