import { Routes, Route } from 'react-router-dom';
import QuizMaker from './components/QuizMaker';
import NoMatchPage from './components/NoMatchPage';
import { lazy } from 'react';
import QuizResultGuard from './guards/QuizResultGuard';

const QuizCompleted = lazy(() => import('./components/QuizCompleted'));
const StorageDemo = lazy(() => import('./components/StorageDemo'));
const ModalDemoPage = lazy(() => import('./components/ModalDemoPage'));
const AutoFilterDemoPage = lazy(() => import('./components/AutofilterDemoPage'));

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<QuizMaker />} />
            <Route path="/result" element={<QuizResultGuard><QuizCompleted /></QuizResultGuard>} />
            <Route path="/storage-demo" element={<StorageDemo />} />
            <Route path="/modal-demo" element={<ModalDemoPage />} />
            <Route path="/autofilter-demo" element={<AutoFilterDemoPage />} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>
    );
};

export default AppRoutes;