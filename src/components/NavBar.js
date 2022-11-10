import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src="../../Logotipo_Color.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="Myalo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/profesional">Profesional</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;