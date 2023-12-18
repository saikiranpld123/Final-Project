import axios from "axios";
import urls from "../constants/urls.constants";

const axiosInstance = axios.create({
 baseURL: urls.baseUrl,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
 (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
 },
 (error) => Promise.reject(error)
);

export default axiosInstance;