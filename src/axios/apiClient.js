import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
