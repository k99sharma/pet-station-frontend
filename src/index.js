import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

// importing components
import App from './components/App'

// importing CSS
import './styles/global.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importing context 
import { AuthContextProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
// query client 

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </QueryClientProvider>
);
