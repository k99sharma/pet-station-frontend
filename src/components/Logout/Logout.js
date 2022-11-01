// importing components
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// importing context
import AuthContext from '../../context/auth';

// logout function
function Logout() {
    const authCtx = useContext(AuthContext);
    const navigator = useNavigate();

    const handleLogout = () => {
        authCtx.logout();
        navigator('/', { replace: true })
    }

    return (
        <button onClick={handleLogout} type="button">
            Logout
        </button>
    )
}

export default Logout;