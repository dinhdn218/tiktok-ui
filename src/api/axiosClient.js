import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  // Handle token here...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle error
    throw error;
  },
);

export default axiosClient;
