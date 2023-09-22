// services/httpService.js
import axios from 'axios';


function createHttpService(API_BASE_URL) {
    return axios.create({
        baseURL: API_BASE_URL,
    });
}

export default createHttpService;