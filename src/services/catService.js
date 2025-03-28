const API_URL = "https://api.thecatapi.com/v1/images/search";

export const fetchCatImages = async (limit) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`, {
      headers: {
        "x-api-key":
          "live_QU6O6lDazNSv3bJAI5mT5B6XuI9D0gnh01Jkt9OIf4mID2X5c8s9sFpnKGW8EKnK", // Reemplaza con tu clave de API
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat images:", error);
    return [];
  }
};
