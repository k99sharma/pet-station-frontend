// importing libraries
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

// importing pages
import Page404 from '../../pages/404/404';
import DashboardPage from '../../pages/Dashboard/Dashboard';
import HomePage from '../../pages/Home/Home';
import LoginPage from '../../pages/Login/Login';
import SignupPage from '../../pages/Signup/Signup';

// App component
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />

        {/* not found */}
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}


