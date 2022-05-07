import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img style={{ width: '150px' }} src={logo} alt="Perfect Wedding Photography" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        {user ?
                            <Button style={{ color: 'rgba(255,255,255,.55)' }} onClick={() => signOut(auth)} className='btn bt-link py-0 text-decoration-none' variant="link">Logout</Button>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }

                        <Nav.Link disabled>
                            <span className='text-light'>
                                {user?.displayName}
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;