import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import ButtonModal from "./ButtonModal";
function SessionList({ sesiones, setSesiones }) {
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
       {(sesiones && (sesiones.length > 0))  ? (
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
              {sesiones.map((sesion) => (
                    <tr key={sesion.id}>
                      <td>{sesion.id}</td>
                      <td>{sesion.motivo}</td>
                      <td> {sesion.fecha}</td>
                      <td>
                        <ButtonModal sesion={sesion} />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
       ): (<h3>No hay sesiones</h3>)
  }
      
      {}
    </>
  );
}

export default SessionList;
