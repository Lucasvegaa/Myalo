import CardPacient from "./CardPacient";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const PacientsList = ({ pacients, setPacients }) => {
  return (
    <>
      <Row xs={1} md={2} xl={4}className="g-4">
        
      {pacients &&
        pacients?.map((pacient) => (
          <Col key={pacient.id}>
            <CardPacient
            
            {...pacient}
            />
            </Col>
        ))}
        
      </Row>

    </>
  );
};

export default PacientsList;
