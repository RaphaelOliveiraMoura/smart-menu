import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    localStorage.removeItem('@smart-menu/token');
    window.location.reload();
    return Promise.reject(error);
  }
);

export default api;
