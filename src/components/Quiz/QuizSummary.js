import { countCorrectAnswers, getColorByCorrectAnswers } from '../../helpers/quizHelper';
import './style.css';

const QuizSummary = ({ questions }) => {
    const correctAnswersCount = countCorrectAnswers(questions);
    const textClass = getColorByCorrectAnswers(correctAnswersCount);


    return (
        <div className='container my-4 px-5 summary'>
            <p className={textClass}>You scored {correctAnswersCount} out of {5} </p>
        </div>
    )
}

export default QuizSummary;