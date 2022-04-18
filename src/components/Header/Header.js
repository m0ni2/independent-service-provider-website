import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='navbar' fixed='top'>
            <Container>
                <Navbar.Brand>
                    <Link className='navbar-brand' to='/'><img src='./logo.svg' alt="logo" width='150' /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/blogs'>Blogs</Link>
                        <Link className='nav-link' to='/about-me'>About Me</Link>
                        <Link className='nav-link' to='/checkout'>Checkout</Link>
                        <Link className='nav-link' to='/register'>Register</Link>
                        <Link className='nav-link' to='/login'>Login</Link>
                    </Nav>
                    <Navbar.Text>
                        Mark Otto
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;