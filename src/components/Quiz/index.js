import { useContext, useState } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import Question from "../Question/Question";
import { useNavigate } from 'react-router-dom';
import QuizSummary from "./QuizSummary";

const Quiz = ({ isFinished }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { questions, handleAnswerSelection, resetQuiz } = useContext(QuizContext);
    const isAnyQuestionsNotAnswered = questions.find(question => question.selectedAnswer === '');

    const handleSubmit = () => {
        if (isFinished) {
            // create a new Quiz;
            resetQuiz();
            navigate('/');
        } else {
            if (window.confirm('Are you sure you want to finish the quiz?')) {
                if (!isSubmitting) {
                    setIsSubmitting(true);

                    navigate('/result');
                }
            }
        }
    }

    return (
        <>
            <div className={isFinished ? 'list-group result-quiz mb-4' : 'list-group active-quiz mb-4'}>
                {questions.map((question, key) => (
                    <Question key={key} question={question} handleOnClickAnswer={handleAnswerSelection} isFinished={isFinished} />
                ))}
            </div>
            {
                isFinished && questions.length > 0 && <QuizSummary questions={questions} />
            }
            {
                !isAnyQuestionsNotAnswered && <div className="d-grid px-5">
                    <button type="button" className="btn btn-secondary" onClick={handleSubmit}>{!isFinished ? 'Submit' : 'Create a new quiz'}</button>
                </div>
            }
        </>
    )
}

export default Quiz;