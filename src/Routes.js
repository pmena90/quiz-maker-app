import { Routes, Route } from 'react-router-dom';
import QuizMaker from './components/QuizMaker';
import NoMatchPage from './components/NoMatchPage';
import { lazy } from 'react';
import QuizResultGuard from './guards/QuizResultGuard';

const QuizCompleted = lazy(() => import('./components/QuizCompleted'));

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<QuizMaker />} />
            <Route path="/result" element={<QuizResultGuard><QuizCompleted /></QuizResultGuard>} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
    );
};

export default AppRoutes;