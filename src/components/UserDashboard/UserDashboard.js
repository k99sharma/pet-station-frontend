// importing components
import { useContext, useEffect, useState } from "react";
import UserPets from '../UserPets/UserPets';

// importing utilities
import { getUserData } from "../../utils/helper";

// importing context 
import AuthContext from '../../context/auth';

// user dashboard function 
function UserDashboard() {
    const authCtx = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // function to fetch user data using user Id
        function fetchUserData(userId, token) {
            return getUserData(userId, token);
        }

        // setting data in state
        fetchUserData(authCtx.user.userId, authCtx.token)
            .then((res) => {
                setUserData(res.data);
            })
            .catch(err => {
                console.error(err);
                alert('Unable to fetch user data');
            })

    }, [])

    return (
        <div className="userDashboard container">
            <div className="userDashboard__title h1">
                Dashboard
            </div>

            <div className="userDashboard__introduction">
                {
                    `Welcome, ${userData.firstName} ${userData.lastName}`
                }
            </div>

            <div className="userDashboard__userPets">
                <UserPets userId={authCtx.user.userId} token={authCtx.token} />
            </div>
        </div>
    )
}

export default UserDashboard;