// importing components
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

// importing context
import AuthContext from '../../context/auth';

// Dashboard component
export default function DashboardPage() {
    // auth context
    const authCtx = useContext(AuthContext);

    const navigator = useNavigate();

    return (
        <div className='dashboardPage'>
            Dashboard

            <button type="button" onClick={() => { authCtx.logout(); navigator('/', { replace: true }); }}>
                Logout
            </button>
        </div>
    )
}