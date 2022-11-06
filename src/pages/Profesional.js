import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PacientsList } from "../components/PacientsList";
import { getPacientes } from "../supabase/api";
import NavBar from "../components/NavBar";
import Button from "react-bootstrap/esm/Button";

function Profesional() {
  const navigate = useNavigate();
  const [pacients, setPacients] = useState([]);

  useEffect( () => {
    const fetchPacients = async () => {
      const pacients = await getPacientes();
      setPacients(pacients);
    };
    fetchPacients();
  }, []);

  const HandleAddPacient = () => {
    navigate("/addPacient");
  }
  return (
    <>
      <NavBar/>
      <h1>Profesional</h1>
      
      <h2>Lista de Pacientes</h2>  
      <Button onClick={HandleAddPacient}>Agregar Paciente</Button>
      
      
      <PacientsList pacients= {pacients} setPacients= {setPacients}/>
    </>

  );
}

export default Profesional;
