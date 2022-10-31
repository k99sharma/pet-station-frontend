// importing components
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

// importing pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import AdoptionList from '../pages/AdoptionList/AdoptionList';
import NotFound from '../pages/NotFound/NotFound';

// Route component
function RouteComponent() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/adoptionList" element={<AdoptionList />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default RouteComponent;