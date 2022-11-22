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
  const [validated, setValidated] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [dni, setDni] = useState("");
  const [patologia, setPatologia] = useState("");
  const [psicoanamnesis, setPsicoanamnesis] = useState("");
  const [antecedentes, setAntecedentes] = useState("");

  // const arrayHistoriaClinica = ["Patologia", "Psicoanamnesis", "Antecedentes"];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
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
    }
    setValidated(true);
  };
  return (
    <>
      <Form
        //noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="m-5 h4"
      >
        <Container className="mb-5 ">
          <h2>Datos del Paciente</h2>
        </Container>
        <Container>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="formGridNombre"
              className="FormGroupPacient"
            >
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridApellido"
              className="FormGroupPacient"
            >
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese apellido"
                onChange={(e) => setApellido(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              className="FormGroupPacient"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email"
                onChange={(e) => setEmail(e.target.value)}
                isValid={!email.includes("@")}
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un mail valido
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3 FormGroupPacient"
              controlId="formGridAddress1"
            >
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                required
                placeholder="1234 Main St"
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              className="mb-3 FormGroupPacient"
              controlId="formGridDateBirth"
            >
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="1234 Main St"
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3 FormGroupPacient"
              controlId="formGridDni"
            >
              <Form.Label>Dni</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Ingrese DNI"
                onChange={(e) => setDni(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Container>

        <Container>
          <Container className="my-5">
            <h2>Historia Clinica</h2>
          </Container>

          {/* {arrayHistoriaClinica.map((item) => (
            <Form.Group
              as={Col}
              className="mb-3 FormGroupPacient"
              controlId={`formGrid${item}`}
              key={item}
            >
              <Form.Label>{item}</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                onChange={(e) => `set ${item}(e.target.value)`}
              />
              <Form.Control.Feedback type="invalid">
                Complete este campo
              </Form.Control.Feedback>
            </Form.Group>
          ))} */}

          <Form.Group
            as={Col}
            className="mb-3 FormGroupPacient"
            controlId="formGridPatologia"
          >
            <Form.Label>Patologia</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => setPatologia(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Complete este campo
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            className="mb-3 FormGroupPacient"
            controlId="formGridPsicoanamnesis"
          >
            <Form.Label>Psicoanamnesis</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => setPsicoanamnesis(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Complete este campo
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            className="mb-3 FormGroupPacient"
            controlId="formGridAntecedentes"
          >
            <Form.Label>Antecedentes Familiares</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => setAntecedentes(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Complete este campo
            </Form.Control.Feedback>
          </Form.Group>
        </Container>

        <Button variant="success" type="submit" size="lg">
          Guardar
        </Button>
      </Form>
    </>
  );
}

export default AddPacient;
