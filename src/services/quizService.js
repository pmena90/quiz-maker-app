import createHttpService from './httpService';
import handleHttpError from './errorHandler';

export const quizService = {
    getCategories,
    getTrivia
};


const API_BASE_URL = 'https://opentdb.com/';
const httpService = createHttpService(API_BASE_URL);

export function getCategories(config = {}) {
    return httpService.get(`/api_category.php`, config)
        .then(response => response.data.trivia_categories)
        .catch(handleHttpError);
}

export function getTrivia(category, difficulty, amount = 5, type = 'multiple') {
    const params = new URLSearchParams({
        amount: amount,
        category: category,
        difficulty: difficulty,
        type: type
    });

    const requestUrl = `/api.php?${params.toString()}`;

    return httpService.get(requestUrl)
        .then(response => response.data.results)
        .catch(handleHttpError);
}
