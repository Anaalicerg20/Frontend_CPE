import axios from "axios";

const baseURL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({ baseURL: baseURL });

api.interceptors.request.use(
  (config) => {
    // Obtém o token do localStorage
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
