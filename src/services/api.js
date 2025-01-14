import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Substitua pelo IP da máquina se necessário
});

export default api;
