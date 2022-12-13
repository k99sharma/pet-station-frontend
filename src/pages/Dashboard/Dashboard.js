// importing components
import { useContext, useState } from "react";
import { useQuery } from "react-query";

import Sidebar from "../../components/Sidebar/Sidebar";
import Board from "../../components/Board/Board";

// importing context
import AuthContext from '../../context/auth';

// import utility handler
import { fetchUserData } from "../../utilities/helper";

// Dashboard component
export default function DashboardPage() {
    // auth context
    const authCtx = useContext(AuthContext);

    // states
    const [option, setOption] = useState('profile');

    // fetch user information
    const { isLoading, error, data } = useQuery('user', () => fetchUserData(authCtx.token));

    if (isLoading)
        return <div>Loading...</div>

    if (error)
        return <div>Normal Error</div>

    if (data.response !== undefined && (data.response.data.status === 'fail' || data.response.data.status === 'error'))
        return <div>Error</div>

    return (
        <div className='dashboardPage p-5'>
            <div className='dashboard-sidebar'>
                <Sidebar
                    user={data.data.data}
                    authCtx={authCtx}
                    option={option}
                    setOption={setOption}
                />
            </div>

            <div className='dashboard-board'>
                <Board
                    user={data.data.data}
                    authCtx={authCtx}
                    option={option}
                />
            </div>
        </div>
    )
}