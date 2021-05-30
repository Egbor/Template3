import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import '../styles/common.css';
import '../styles/header.css';

import Translatable from './Translatable'

class Header extends Translatable {
    render() {
        return (
            <header>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                        <Navbar.Brand href="/">Archi<span>Wiki</span></Navbar.Brand>
                        <Navbar.Toggle></Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav id="navbarNavAltMarkup">
                                <Nav.Link href="persons">{this.translate("navbar.persons")}</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link href="#ru" onClick={() => this.changeLanguage("ru")}>ru</Nav.Link>
                                <Nav.Link href="#en" onClick={() => this.changeLanguage("en")}>en</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default Header;
