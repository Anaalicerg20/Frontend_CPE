import axios from "axios";
import useAuthStores  from "../../stores/auth";

const baseURL = `${import.meta.env.VITE_BACKEND_URL}`;
const api = axios.create({ baseURL: baseURL });

api.interceptors.request.use(
  (config) => {

    const { token } = useAuthStores.getState();

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
