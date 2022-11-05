import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PacientData from "../components/PacientData";
import SessionList from "../components/SessionList";
import ViewerHC from "../components/ViewerHC";
import { getPaciente } from "../supabase/api";

function ProfilePaciente() {
  const [paciente, setPaciente] = useState(null);
  let { userId } = useParams();

  useEffect(() => {
    const fetchPacients = async () => {
      const paciente = await getPaciente(userId);
      setPaciente(paciente);
    };
    fetchPacients();
  }, [userId]);

  return (
    <>
      <h2>Paciente {userId} </h2>
      <PacientData paciente={paciente} />
      <ViewerHC/>
      <SessionList />
    </>
  );
}

export default ProfilePaciente;
