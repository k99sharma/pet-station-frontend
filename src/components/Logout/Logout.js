// importing components
import { useContext } from "react";

// importing context
import AuthContext from '../../context/auth';

// logout function
function Logout() {
    const authCtx = useContext(AuthContext);

    const handleLogout = () => {
        authCtx.logout();
    }

    return (
        <button onClick={handleLogout} type="button">
            Logout
        </button>
    )
}

export default Logout;