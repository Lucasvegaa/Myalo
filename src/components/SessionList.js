import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ButtonModal from "./ButtonModal";
function SessionList({ sesiones, setSesiones }) {
  const handleClick = (sesionId) => {
    console.log("click en sesion", sesionId);
  };
  return (
    <>
      <Container className="mb-5">
        <h2>Sesiones de Terapia</h2>
      </Container>
      {/* <Row className="mb-5">
        {sesiones
          ? sesiones.map((sesion) => (
              <Container as={Row} className="h4 text-start" key={sesion.id}>
                <Col>
                  <Container className="mb-4">Fecha: {sesion.fecha}</Container>
                  <Container className="mb-4">
                    Motivo: {sesion.motivo}
                  </Container>
                  <Container className="mb-4">Id: {sesion.id}</Container>
                  <Button
                    onClick={() => {
                      handleClick(sesion.id);
                    }}
                  >
                    {" "}
                    Ver Sesion
                  </Button>
                </Col>
              </Container>
            ))
          : ""}
      </Row> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Motivo</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sesiones
            ? sesiones.map((sesion) => (
              <tr key={sesion.id}>
                  <td>{sesion.id}</td>
                  <td>{sesion.motivo}</td>
                  <td> {sesion.fecha}</td>
                  <td>
                    <ButtonModal sesion= {sesion}/>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </Table>
    </>
  );
}

export default SessionList;
