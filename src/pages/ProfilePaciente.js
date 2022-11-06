import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PacientData from "../components/PacientData";
import SessionList from "../components/SessionList";
import ViewerHC from "../components/ViewerHC";
import NavBar from "../components/NavBar"
import {
  getHistoriaClinica,
  getPaciente,
  getSesionTerapia,
} from "../supabase/api";
import { useNavigate } from "react-router-dom";

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
      <NavBar/>
      <h2>Paciente {pacientId} </h2>
      <PacientData pacient={pacient} />
      <ViewerHC historiaClinica={historiaClinica} />
      <SessionList sesiones={sesiones} setSesiones={setSesiones} />

      <button
        onClick={() => {
          handleClick(pacientId);
        }}
      >
        {" "}
        Crear Sesion{" "}
      </button>
    </>
  );
}

export default ProfilePaciente;
