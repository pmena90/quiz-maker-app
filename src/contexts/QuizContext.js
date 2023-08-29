import React, { createContext } from "react";
import useQuiz from "../hooks/useQuiz";

export const QuizContext = createContext();

function QuizProvider({ children }) {
    const { categories, questions, setCategories, setQuestions } = useQuiz();

    const handleSetQuestions = (questions) => {
        questions = questions.map((q, key) => {
            return {
                ...q,
                id: key,
                allAnswers: randomizeAnswers(q.incorrect_answers, q.correct_answer),
                selectedAnswer: ''
            }
        });

        setQuestions(questions);
    }

    function handleAnswerSelection(questionId, selectedAnswer) {
        const updatedQuestions = questions.map((q) => {
            if (q.id === questionId) {
                return {
                    ...q,
                    selectedAnswer: selectedAnswer
                };
            }
            return q;
        });

        setQuestions(updatedQuestions);
    }

    const randomizeAnswers = (incorrect_answers, correct_answer) => {
        const array = [...incorrect_answers, correct_answer];

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }

        return array;
    }

    const resetQuiz = () => {
        setQuestions([]);
    }

    const contextValue = {
        categories,
        questions,
        setCategories,
        setQuestions: handleSetQuestions,
        handleAnswerSelection,
        resetQuiz
    };



    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizProvider };