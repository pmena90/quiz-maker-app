import { useContext, useEffect, useState } from "react";
import Pagetitle from "../PageTitle";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";
import { quizService } from "../../services/quizService";
import useErrorHandler from "../../hooks/useErrorHandler";
import './style.css';
import { QuizContext } from "../../contexts/QuizContext";
import Quiz from "../Quiz";

const difficulties = ['easy', 'medium', 'hard'];

const QuizMaker = () => {
    const [category, setCategory] = useState(-1);
    const [difficulty, setDifficulty] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { categories, questions, setCategories, setQuestions } = useContext(QuizContext);
    const handleError = useErrorHandler();

    const canCreate = category !== -1 && difficulty !== '';

    useEffect(() => {
        setIsLoading(true);

        quizService.getCategories().then(data => {
            setCategories(data);
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);

            handleError(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleOnDifficultyChange = (e) => {
        setDifficulty(e.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true);

        quizService.getTrivia(category, difficulty).then(data => {
            setQuestions(data);
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(false);

            handleError(error);
        });
    }

    return (
        isLoading && categories.length === 0 ? <div>Loading...</div> : <div className="container">
            <div className="row">
                <Pagetitle title='QUIZ MAKER' />
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <CategorySelect options={categories} handleOnChange={handleOnCategoryChange} />
                    <DifficultySelect options={difficulties} handleOnChange={handleOnDifficultyChange} />
                    <button id='createBtn'
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleOnClick}
                        disabled={!canCreate}>
                        Create
                    </button>
                </div>
            </div>
            {isLoading ? <div>Loading...</div> : questions.length !== 0 ? <Quiz isFinished={false} /> : ''}

        </div>
    )
}

export default QuizMaker;