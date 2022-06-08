import axios from 'axios';
import { useDialogStore } from '../../stores/dialog';
const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: 30000,
});
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const diaLogStore = useDialogStore();
    diaLogStore.setMessage(`Status:${error.response?.status}`, `${error.response?.data}`);
    diaLogStore.showMessage();
    console.log(`Status:${error.response?.status} message: ${error.response?.data}`);
    return Promise.reject(error);
  }
);

export default axiosInstance;
