import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/www.receitaws.com.br/v1/cnpj',
});

export default api;
