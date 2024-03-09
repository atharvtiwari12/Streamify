import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComp.css";
import Logo from "../../assets/Logo.png";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" className="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="NavLink me-auto">
            {/* <Nav.Link href="#nature">Nature</Nav.Link>
            <Nav.Link href="#motivational">Motivational</Nav.Link>
            <Nav.Link href="#educational">Educational</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
