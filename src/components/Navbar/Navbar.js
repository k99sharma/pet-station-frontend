// importing components
import { Link } from 'react-router-dom';

// navbar component
function Navbar() {
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

                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;