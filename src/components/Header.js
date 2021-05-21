import { Nav, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav id="navbarNavAltMarkup">
                            <Nav.Link href="persons">Persons</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#ru">ru</Nav.Link>
                            <Nav.Link href="#en">en</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
