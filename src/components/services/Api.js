import Axios from "axios";

const URL = "http://127.0.0.1:8000/api";

const apiService = {
  register: (user) =>
    Axios.post(`${URL}/register`, user).catch((error) => error.response),

  login: (user) =>
    Axios.post(`${URL}/login`, user).catch((error) => error.response),

  getFavoriteCoctails: (token) =>
    Axios.get(`/favourite/get`, token).catch((error) => error.response),
};

export default apiService;
