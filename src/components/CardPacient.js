import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function CardPacient({nombre, id}) {
  
  const navigate = useNavigate();

  const handleClick = (pacientId) => {
    navigate(`/paciente/${pacientId}`);
  };
  
  
  return (
    <Card className='m-5' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          ID: {id}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Ver Perfil</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPacient;