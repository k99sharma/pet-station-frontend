// importing components
import { useContext } from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logout from '../Logout/Logout';

// importing context
import AuthContext from '../../context/auth';

// navbar component
function CustomNavbar() {
    const authCtx = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src="/assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="pet station logo"
                    />{' '}
                    Pet Station
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className="text-decoration-none text-white" to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        {
                            authCtx.isLoggedIn
                                ?
                                <Nav.Link>
                                    <Link className="text-decoration-none text-white" to="/adoption">
                                        Adoption
                                    </Link>
                                </Nav.Link>
                                :
                                null
                        }
                    </Nav>

                    <Nav className="d-md-none">
                        {
                            authCtx.isLoggedIn
                                ?
                                <>
                                    <Nav.Link>
                                        <Link className="text-decoration-none text-white" to="/dashboard">
                                            Dashboard
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link>
                                        <Link className="text-decoration-none text-white" to="/settings">
                                            Settings
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link>
                                        <Logout />
                                    </Nav.Link>
                                </>
                                :
                                <Nav.Link>
                                    <Link to="/login">
                                        <Button variant="success">
                                            Login
                                        </Button>
                                    </Link>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>

                <Nav className="d-none d-md-block">
                    {
                        authCtx.isLoggedIn
                            ?
                            <NavDropdown title={<img src="/assets/profile.png" height={30} width={30} alt="account" />} id="main-navbar-dropdown">
                                <NavDropdown.Item>
                                    <Link className="text-decoration-none text-black" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                    <Link className="text-decoration-none text-black" to="/settings">
                                        Settings
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Logout />
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Link>
                                <Link to="/login">
                                    <Button variant="success">
                                        Login
                                    </Button>
                                </Link>
                            </Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar >
    )
}

export default CustomNavbar;