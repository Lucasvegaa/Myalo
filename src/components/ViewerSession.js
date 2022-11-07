import Container from "react-bootstrap/esm/Container";
const ViewerSession = ({ sesion }) => {
  return (
    <>
      <Container>Fecha: {sesion.fecha}</Container>
      <Container>Motivo: {sesion.motivo} </Container>
      <Container>Evaluacion: {sesion.evaluacion}</Container>
    </>
  );
};

export default ViewerSession;
