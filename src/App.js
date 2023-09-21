import './App.css';
import Header from './components/Header';
import { Suspense } from 'react';
import AppRoutes from './Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from './AppProvider';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <AppProvider>
        <Suspense fallback={<div className="container">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </AppProvider>
    </div>
  );
}

export default App;
