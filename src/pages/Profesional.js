import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PacientsList } from "../components/PacientsList";
import { getPacientes } from "../supabase/api";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";

function Profesional() {
  const navigate = useNavigate();
  const [pacients, setPacients] = useState([]);

  useEffect(() => {
    const fetchPacients = async () => {
      const pacients = await getPacientes();
      setPacients(pacients);
    };
    fetchPacients();
  }, []);

  const HandleAddPacient = () => {
    navigate("/addPacient");
  };
  return (
    <>
      <NavBar />
      <h1 className="TitlePage">Profesional</h1>
      <Wrapper>
        <h2>Lista de Pacientes</h2>
        <Button className="mx-5" onClick={HandleAddPacient} variant="success">Agregar Paciente</Button>
      </Wrapper>

      <PacientsList pacients={pacients} setPacients={setPacients} />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default Profesional;
