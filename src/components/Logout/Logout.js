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
        <div className="logout">
            <button className="d-flex align-items-center" type="button" onClick={handleLogout}>
                <lord-icon
                    src="https://cdn.lordicon.com/mxzuvjjs.json"
                    trigger="hover"
                    colors="primary:#e83a30"
                    className="lordIcon" />

                <div>
                    Logout
                </div>
            </button>
        </div>
    )
}

export default Logout;