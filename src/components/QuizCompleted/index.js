import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import Quiz from "../Quiz";
import Pagetitle from "../PageTitle";

const QuizCompleted = () => {
    const { questions, handleAnswerSelection } = useContext(QuizContext);
    const isAnyQuestionsNotAnswered = questions.find(question => question.selectedAnswer === '');



    return (
        <div className='container'>
            <div className="row">
                <Pagetitle title='RESULTS' />
            </div>
            <div className="row">
                <Quiz isFinished />
            </div>
        </div>
    )
}

export default QuizCompleted;