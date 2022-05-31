import axios from 'axios';

const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(`Status:${error.response?.status} message: ${error.response?.data}`);
    return Promise.reject(error);
  }
);

export default axiosInstance;
