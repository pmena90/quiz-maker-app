import createHttpService from './httpService';
import handleHttpError from './errorHandler';

export const jsonplaceholderService = {
    getUsers,
    getPhotos
};

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';
const httpService = createHttpService(API_BASE_URL);

export function getUsers(config = {}) {
    return httpService.get(`/users`, config)
        .then(response => response.data)
        .catch(handleHttpError);
}

export function getPhotos(config = {}) {
    return httpService.get(`/photos`, config)
        .then(response => response.data)
        .catch(handleHttpError);
}
