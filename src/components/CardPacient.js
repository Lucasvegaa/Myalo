import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
}) {
  const navigate = useNavigate();

  const handleClick = (pacientId) => {
    navigate(`/paciente/${pacientId}`);
  };

  return (
    <Card border="dark" className="m-3" >
      <Row xs={1} md={2} className="g-4">
        <Col xs={2}>
          <Card.Img
            className="m-2"
            //style={{ width: "9rem" }}          
            variant="bottom"
            src="https://tntznoptdkklgiuzcfzx.supabase.co/storage/v1/object/public/img/Usuario-Undefined.png"
          />
        </Col>

        <Col xs= {2}>
          <Card.Body>
            <Card.Title>
              {apellido} {nombre}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
              ID: {id} {direccion}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                handleClick(id);
              }}
            >
              Ver Perfil
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CardPacient;
