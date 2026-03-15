import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="nav-dark">
      <Container>
        <Navbar.Brand className="logo">NOOLU</Navbar.Brand>

        <Nav className="ms-auto nav-links">
          <Nav.Link>Explore</Nav.Link>
          <Nav.Link>Team</Nav.Link>
          <Nav.Link>Roadmap</Nav.Link>
          <Button className="primary-btn">Join</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}