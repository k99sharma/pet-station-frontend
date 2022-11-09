// importing components
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';

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
        <div className="d-flex align-items-center">
            <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Logout;