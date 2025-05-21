import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Thillainatarajan B</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-white fw-bold">About</Nav.Link>
            <Nav.Link href="#skills" className="text-white fw-bold">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-white fw-bold">Projects</Nav.Link>
            <Nav.Link href="#experience" className="text-white fw-bold">Experience</Nav.Link>
            <Nav.Link href="#education" className="text-white fw-bold">Education</Nav.Link>
            <Nav.Link href="#contact" className="text-white fw-bold">Contact</Nav.Link>
            <NavDropdown title="More" id="navbar-nav-dropdown" align="end">
              <NavDropdown.Item href="#portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#github">GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
