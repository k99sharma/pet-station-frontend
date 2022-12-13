// importing libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// importing global style
import './style/global.css';

// importing components
import App from './components/App/App';

// importing context
import { AuthContextProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
