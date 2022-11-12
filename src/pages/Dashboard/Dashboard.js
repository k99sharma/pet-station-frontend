// importing components
import { useContext } from 'react';
import { useQuery } from 'react-query';

import UserDashboard from '../../components/UserDashboard/UserDashboard';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import Loading from '../../components/Loading/Loading'

// importing contexts
import AuthContext from '../../context/auth';

// importing utilities 
import { fetchUserData } from '../../utils/helper';

// dashboard function 
function Dashboard() {
    // context
    const authCtx = useContext(AuthContext);

    // fetch user data using react query
    const { isLoading, error, data } = useQuery('user', () => {
        const response = fetchUserData(authCtx.user.userId, authCtx.token);
        return response;
    })

    if (isLoading)
        return <Loading />

    if (data.error || error) {
        return <div>Error occurred!</div>
    }

    return (
        <div className="dashboard">
            {
                authCtx.user.role === 'admin'
                    ?
                    <AdminDashboard />
                    :
                    <UserDashboard user={data.data} token={authCtx.token} isLoggedIn={authCtx.isLoggedIn} />
            }
        </div>
    )
}

export default Dashboard;