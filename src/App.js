import './App.css';
import Header from './components/Header';
import { Suspense } from 'react';
import AppRoutes from './Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <QuizProvider>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </QuizProvider>
    </div>
  );
}

export default App;
