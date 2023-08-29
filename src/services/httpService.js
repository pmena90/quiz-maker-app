// services/httpService.js
import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com/';

const httpService = axios.create({
    baseURL: API_BASE_URL,
});

export default httpService;