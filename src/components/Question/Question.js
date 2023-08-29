import Answer from './Answer';
import './style.css';

const Question = ({ question, handleOnClickAnswer, isFinished }) => {
    const answers = question.allAnswers;

    const handleOnClick = (questionId, selectedAnswer) => {
        if (!isFinished) {
            handleOnClickAnswer(questionId, selectedAnswer);
        }
    }

    return (
        <div className='container px-5'>
            <div className='question-title' dangerouslySetInnerHTML={{ __html: question.question }} />
            <div className='list-group questions-list pb-3'>
                {answers.map((a, key) => (
                    <Answer key={key}
                        answer={a}
                        selectedAnswer={question.selectedAnswer}
                        correctAnswer={question.correct_answer}
                        isFinished={isFinished}
                        handleOnClick={() => handleOnClick(question.id, a)} />
                ))}
            </div>
        </div>
    )
}

export default Question;