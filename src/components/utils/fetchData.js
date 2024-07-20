import axios from "axios";

const API_URL = "http://192.168.4.97:5001/api/data";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from the server.");
  }
};
