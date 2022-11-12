// import css
import './Navbar.css'

// importing components
import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Logout from '../Logout/Logout';

// importing context
import AuthContext from '../../context/auth';

// navbar component
function CustomNavbar() {
    const authCtx = useContext(AuthContext);

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand className="d-flex justify-content-center align-items-center">
                    <Link className="link" to="/">
                        <img
                            src="/assets/logo.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="pet station logo"
                        />{' '}
                        Pet Station
                    </Link>
                </Navbar.Brand>

                <Nav>
                    {
                        authCtx.isLoggedIn
                            ?
                            <Link to="/dashboard">
                                <lord-icon
                                    className="lordIcon"
                                    src="https://cdn.lordicon.com/hbvyhtse.json"
                                    trigger="hover"
                                />
                            </Link>
                            :
                            <Link className="link" to="/login">
                                Log In
                            </Link>
                    }
                </Nav>
            </Container>
        </Navbar >
    )
}

export default CustomNavbar;