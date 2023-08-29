import { useState } from 'react';

const useQuiz = () => {
    const [categories, setCategories] = useState([]);
    const [questions, setQuestions] = useState([]);


    return {
        categories, questions, setCategories, setQuestions,
    };
};

export default useQuiz;