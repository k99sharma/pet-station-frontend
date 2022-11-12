// import css
import './Navbar.css'

// importing components
import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logout from '../Logout/Logout';

// importing context
import AuthContext from '../../context/auth';

// navbar component
function CustomNavbar() {
    const authCtx = useContext(AuthContext);

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand className="d-flex justify-content-center align-items-center">
                    <img
                        src="/assets/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="pet station logo"
                    />{' '}
                    Pet Station
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link className="span">
                            <Link className="link" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        {
                            authCtx.isLoggedIn
                                ?
                                <Nav.Link className="span">
                                    <Link className="link" to="/adoption">
                                        Adoption
                                    </Link>
                                </Nav.Link>
                                :
                                null
                        }
                    </Nav>

                    <Nav className="d-lg-none">
                        {
                            authCtx.isLoggedIn
                                ?
                                <>
                                    <Nav.Link className="span">
                                        <Link className="link" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="span">
                                        <Link className="link" to="/settings">
                                            Settings
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="span">
                                        <Logout />
                                    </Nav.Link>
                                </>
                                :
                                <Nav.Link className="span">
                                    <Link className="link font-weight-bold" to="/login">
                                        Log In
                                    </Link>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>

                <Nav className="d-none d-lg-flex">
                    {
                        authCtx.isLoggedIn
                            ?
                            <NavDropdown title={<img src="/assets/profile.png" height={30} width={30} alt="account" />} id="main-navbar-dropdown">
                                <NavDropdown.Item className="span">
                                    <Link className="link" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </NavDropdown.Item >

                                <NavDropdown.Item className="span">
                                    <Link className="link" to="/settings">
                                        Settings
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item className="span">
                                    <Logout />
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Link className="span">
                                <Link className="link" to="/login">
                                    Log In
                                </Link>
                            </Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar >
    )
}

export default CustomNavbar;