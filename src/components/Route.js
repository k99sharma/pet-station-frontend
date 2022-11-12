// importing components
import {
    Route,
    Routes
} from 'react-router-dom';
import { useContext } from 'react';

// importing context
import AuthContext from '../context/auth';

// importing pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import Adoption from '../pages/Adoption/Adoption';
import NotFound from '../pages/NotFound/NotFound';
import Settings from '../pages/Settings/Settings';

// Route component
function RouteComponent() {
    const authCtx = useContext(AuthContext);

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            {
                authCtx.isLoggedIn
                    ?
                    <>
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/adoption" element={<Adoption />} />
                        <Route exact path="/settings" element={<Settings />} />
                    </>
                    :
                    <>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/resetPassword" element={<ResetPassword />} />
                        <Route exact path="/signup" element={<Signup />} />
                    </>
            }
            <Route exact path="*" element={<NotFound />} />
        </Routes>

    )
}

export default RouteComponent;