import * as React from 'react'
import {
    Container, 
    Navbar
} from 'react-bootstrap';

import logo from '../assets/logo-violeta.png';

const NavbarComponent = () => {
    return (
        <Navbar  expand="lg" style={{ height: 80, background: '#FFFFFF', boxShadow: '0px 0px 5px rgba(123, 146, 165, 0.1)' }}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt='logo' style={{ height: 60 }} />
                </Navbar.Brand> 
            </Container>
        </Navbar> 
    )
}

export default NavbarComponent 
