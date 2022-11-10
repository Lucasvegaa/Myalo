import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function CardPacient({
  nombre,
  id,
  apellido,
  email,
  direccion,
  fechaNacimiento,
  patologia,
  dni,
}) {
  const navigate = useNavigate();

  const handleClick = (pacientId) => {
    navigate(`/paciente/${pacientId}`);
  };

  return (
    <Card
      border="dark"
      className="Firulais m-3"
      onClick={() => {
        handleClick(id);
      }}
    >
      <Row xs={1} md={2} className="g-4">
        <Col xs={2} className="wrapperImgCard">
          <Card.Img
            className="m-2 imgCard"
            src="https://tntznoptdkklgiuzcfzx.supabase.co/storage/v1/object/public/img/Usuario-Undefined.png"
            style={{ width: "8rem" }}
          />
        </Col>

        <Col className="ColCardBodyProfesional" xs={2}>
          <Card.Body className="CardBodyProfesional">
            <Card.Title className="CardTitleProfesional">
              Paciente
            </Card.Title>
            {/* <Card.Subtitle>
              Datos:
            </Card.Subtitle> */}
            <Card.Text>
              {nombre} {apellido}
              
            </Card.Text>
            <Card.Text>
              DNI: {dni}
            </Card.Text>
            {/* <Card.Title >
              Apellido: {apellido} 
            </Card.Title>
            <Card.Title >
              Nombre: {nombre}
            </Card.Title>
            <Card.Title >
              DNI: {dni}
            </Card.Title>             */}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardPacient;
