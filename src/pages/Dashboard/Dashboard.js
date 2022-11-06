// importing components
import { useContext } from 'react';

import UserDashboard from '../../components/UserDashboard/UserDashboard';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';

// importing contexts
import AuthContext from '../../context/auth';

// dashboard function 
function Dashboard() {
    // context
    const authCtx = useContext(AuthContext);

    // fetch user data
    return (
        <div className="dashboard">
            {
                authCtx.user.role === 'admin'
                    ?
                    <AdminDashboard />
                    :
                    <UserDashboard token={authCtx.token} />
            }
        </div>
    )
}

export default Dashboard;