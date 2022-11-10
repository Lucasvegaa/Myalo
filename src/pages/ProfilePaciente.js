import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PacientData from "../components/PacientData";
import SessionList from "../components/SessionList";
import ViewerHC from "../components/ViewerHC";
import NavBar from "../components/NavBar";
import {
  getHistoriaClinica,
  getPaciente,
  getSesionTerapia,
} from "../supabase/api";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ProfilePaciente() {
  const [pacient, setPacient] = useState(null);
  const [historiaClinica, setHistoriaClinica] = useState(null);
  const [sesiones, setSesiones] = useState(null);
  let { pacientId } = useParams();
  const navigate = useNavigate();

  const handleClick = (pacientId) => {
    navigate(`/paciente/${pacientId}/addSession`);
  };

  useEffect(() => {
    const fetchPacients = async () => {
      const paciente = await getPaciente(pacientId);
      setPacient(paciente);
    };
    const fetchHistoriaClinica = async () => {
      const historiaClinica = await getHistoriaClinica(pacientId);
      setHistoriaClinica(historiaClinica);
    };
    const fetchSesiones = async () => {
      const sesiones = await getSesionTerapia(pacientId);
      setSesiones(sesiones);
    };
    fetchPacients();
    fetchHistoriaClinica();
    fetchSesiones();
  }, [pacientId]);

  return (
    <>
      <NavBar />
      <Container className="mb-5">
        <h1 className="TitlePage">Perfil de Paciente </h1>
      </Container>

      <Row   className="justify-content-md-center">
        <Col>
          <PacientData as={Col} pacient={pacient} />
        </Col>
        <Col>
          <ViewerHC as={Col} historiaClinica={historiaClinica} />
        </Col>
      </Row>

      <SessionList sesiones={sesiones} setSesiones={setSesiones} />
      <Button
        variant="success"
        size="lg"
        onClick={() => {
          handleClick(pacientId);
          
        }}
      >
        Crear Sesion
      </Button>
    </>
  );
}

export default ProfilePaciente;
