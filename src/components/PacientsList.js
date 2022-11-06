import CardPacient from "./CardPacient";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export const PacientsList = ({ pacients, setPacients }) => {
  return (
    <>
      <Row xs={1} md={4} className="g-4">
        
      {pacients &&
        pacients?.map((pacient) => (
          <Col key={pacient.id}>
            <CardPacient
            nombre={pacient.nombre}
            id={pacient.id}
            />
            </Col>
        ))}
        
      </Row>

    </>
  );
};

export default PacientsList;
