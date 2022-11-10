import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";


function PacientData({ pacient }) {
  return (
    <>
      <h2>Datos del paciente</h2>
      
      <Container className="h4 text-start mb-5">
        <Container className="mb-3">Nombre: {pacient ? pacient[0].nombre : ""}</Container>
        <Container className="mb-3">Apellido : {pacient ? pacient[0].apellido : ""}</Container>
        <Container className="mb-3">DNI : {pacient ? pacient[0].dni : ""}</Container>
        <Container className="mb-3">Email : {pacient ? pacient[0].email : ""}</Container>
        <Container className="mb-3">Direccion : {pacient ? pacient[0].direccion : ""}</Container>
        <Container className="mb-3">
          Fecha de nacimiento : {pacient ? pacient[0].fechaNac : ""}
        </Container>
      </Container>

      <Form>
        {/* <Row className="m-3 h4 text-left ">
        <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="4">
          Nombre:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].nombre : ""}/>
        </Col>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
        <Form.Label column sm="4">
          Apellido:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].apellido : ""}/>
        </Col>
      </Form.Group>
      </Col>
      </Row>
      <Row className="m-3 h4">
        <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextDni">
        <Form.Label column sm="4">
          DNI:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].dni : ""}/>
        </Col>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
        <Form.Label column sm="4" >
          Email:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].email : ""}/>
        </Col>
      </Form.Group>
      </Col>
      </Row>
      <Row className="m-3 h4">
        <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextAddress">
        <Form.Label column sm="4">
          Dirección:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].direccion : ""}/>
        </Col>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextBirthDate">
        <Form.Label column sm="4">
          Fecha de nacimiento:
        </Form.Label>
        <Col sm="4">
          <Form.Control plaintext readOnly defaultValue="" value={pacient ? pacient[0].fecha_nacimiento : ""}/>
        </Col>
      </Form.Group>
      </Col>
      </Row> */}
      </Form>
    </>
  );
}

export default PacientData;
