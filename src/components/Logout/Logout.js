// importing css
import './Logout.css';

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
        <div className="logout d-flex align-items-center">
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Logout;