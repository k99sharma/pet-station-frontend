// importing components
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

// importing context
import AuthContext from '../../context/auth';

// navbar component
function Navbar() {
    const authCtx = useContext(AuthContext);

    return (
        <nav>
            <div>
                Pet Station
            </div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                {
                    authCtx.isLoggedIn
                        ?
                        <>
                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Logout />
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link to="/signup">
                                    Signup
                                </Link>
                            </li>
                        </>
                }
            </ul>
        </nav>
    )
}

export default Navbar;