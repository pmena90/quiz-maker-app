import { useContext, useEffect } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';

function QuizResultGuard({ children }) {
    const navigate = useNavigate();
    const { questions } = useContext(QuizContext);

    useEffect(() => {
        if (!questions || questions.length === 0) {
            // If there are no questions in the context, navigate to a different route
            navigate('/');
        }
    }, [navigate, questions]);

    return children;
}

export default QuizResultGuard;