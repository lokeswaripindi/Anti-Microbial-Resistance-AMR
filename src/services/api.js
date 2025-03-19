import axios from "axios";

const API_URL = "http://localhost:5000/predict"; // Replace with actual backend URL

export const getPrediction = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data; // Expected response: { prediction: "Resistant" or "Susceptible" }
  } catch (error) {
    console.error("Prediction error:", error);
    return { error: "Failed to fetch prediction. Please try again." };
  }
};
