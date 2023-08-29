import Quiz from "../Quiz";
import Pagetitle from "../PageTitle";

const QuizCompleted = () => {
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