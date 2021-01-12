import Axios from 'axios';

const URL = 'http://127.0.0.1:8000/api';

const apiService = {
  register: (user) => Axios.post(`${URL}/register`, user),
};

export default apiService;
