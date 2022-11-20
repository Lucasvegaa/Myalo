import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";

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
      className="Firulais"
      onClick={() => {
        handleClick(id);
      }}
    >
      <Row xs={1} md={2} className="g-4 m-0">
        <Col xs={2} className="wrapperImgCard">
          <Card.Img
            as={Image}
            className=" imgCard"
            src="https://tntznoptdkklgiuzcfzx.supabase.co/storage/v1/object/public/img/Isotipo_Color.png"
          />
        </Col>

        <Col className="ColCardBodyProfesional" xs={10}>
          <Card.Body className="CardBodyProfesional">
            <Card.Title className="CardTitleProfesional">Paciente</Card.Title>

            <Card.Text>
              {nombre} {apellido}
            </Card.Text>
            <Card.Text>DNI: {dni}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardPacient;
