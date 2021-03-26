import Axios from 'axios';

const URL = 'http://127.0.0.1:8000/api';

const apiService = {
  register: (user) =>
    Axios.post(`${URL}/register`, user).catch((error) => error.response),

  login: (user) =>
    Axios.post(`${URL}/login`, user).catch((error) => error.response),

  logout: (token) =>
    Axios.post(
      `${URL}/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).catch((error) => error.response),

  getAllCocktails: (token) =>
    Axios.get(`${URL}/get-all-cocktails`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

  getFavoriteCoctails: (token) =>
    Axios.get(`${URL}/favourite`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

  addToFavourite: (token, cocktail) =>
    Axios.post(`${URL}/favourite`, cocktail, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

  deleteFromFavourite: (token, id) =>
    Axios.delete(`${URL}/favourite/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

  getAllIngredients: (token) =>
  Axios.get(`${URL}/get-all-ingredients`, {
    headers: { Authorization: `Bearer ${token}` },
  }).catch((error) => error.response),

  getIngredientData: (token, id) =>
    Axios.get(`${URL}/get-ingredient-data/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

  saveOwnCocktail: (token, ownCocktail) =>
  Axios.post(`${URL}/save-own-cocktail`, ownCocktail, {
    headers: { Authorization: `Bearer ${token}` },
  }).catch((error) => error.response),

  getOwnCocktails: (token) =>
    Axios.get(`${URL}/get-own-cocktails`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((error) => error.response),

};

export default apiService;
