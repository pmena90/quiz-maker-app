import React from 'react';
import { QuizProvider } from './contexts/QuizContext';
import { LocalStorageProvider } from './contexts/LocalStorageContext';

function AppProvider({ children }) {
    return (
        <QuizProvider>
            <LocalStorageProvider>
                {children}
            </LocalStorageProvider>
        </QuizProvider>
    );
}

export default AppProvider;