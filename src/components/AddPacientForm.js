import { useState } from "react";
import {
  createPaciente,
  getPacientesOrderById,
  createHistoriaClinica,
} from "../supabase/api";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function AddPacient() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [dni, setDni] = useState("");
  const [patologia, setPatologia] = useState("");
  const [psicoanamnesis, setPsicoanamnesis] = useState("");
  const [antecedentes, setAntecedentes] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPaciente(
        "1",
        nombre,
        dni,
        email,
        direccion,
        fechaNacimiento,
        apellido
      );
      const pacientes = await getPacientesOrderById("1");
      await createHistoriaClinica(
        pacientes[pacientes.length - 1].id,
        patologia,
        null,
        psicoanamnesis,
        null,
        null,
        null,
        null,
        antecedentes,
        null
      );
      navigate("/Profesional");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="m-5">
        <h2>Datos del Paciente</h2>
        <Container>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese apellido"
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={(e) => {
                  setDireccion(e.target.value);
                  console.log(direccion);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGridDateBirth">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                placeholder="1234 Main St"
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridDni">
              <Form.Label>Dni</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese DNI"
                onChange={(e) => setDni(e.target.value)}
              />
            </Form.Group>
          </Row>
        </Container>

        <Container>
          <h2>Historia Clinica</h2>
          
            <Form.Group as={Col} className="mb-3" controlId="formGridPatologia">
              <Form.Label>Patologia</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setPatologia(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridPsicoanamnesis">
              <Form.Label>Psicoanamnesis</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setPsicoanamnesis(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridAntecedentes">
              <Form.Label>Antecedentes</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setAntecedentes(e.target.value)} />
            </Form.Group>
        </Container>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddPacient;
