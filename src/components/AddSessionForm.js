import { createSesionTerapia } from "../supabase/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AddSessionForm = () => {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState("");
  const [evaluacion, setEvaluacion] = useState("");
  let { pacientId } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await createSesionTerapia("1", pacientId, motivo, evaluacion);

      await createSesionTerapia("1", pacientId, motivo, evaluacion);
      navigate(`/paciente/${pacientId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="m-5">
        <Container className="h4 mb-4">
          <Form.Group as={Col} className="mb-4 FormGroupPacient" controlId="formGridMotivo">
            <Form.Label className="mb-3">Motivo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese Motivo"
              onChange={(e) => setMotivo(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3 FormGroupPacient" controlId="formGridEvaluacion">
            <Form.Label className="mb-3">Evaluacion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setEvaluacion(e.target.value)}
            />
          </Form.Group>
        </Container>

        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
};

export default AddSessionForm;
