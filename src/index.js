import React from 'react';
import ReactDOM from 'react-dom/client';

// importing components
import App from './components/App'

// importing CSS
import './styles/global.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importing context 
import { AuthContextProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
