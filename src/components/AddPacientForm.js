import { useState } from "react";
import {
  createPaciente,
  getPacientesOrderById,
  createHistoriaClinica,
} from "../supabase/api";
import { useNavigate } from "react-router-dom";

function AddPacient() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [patologia, setPatologia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPaciente("1", name);
      const pacientes = await getPacientesOrderById("1");      
      await createHistoriaClinica(pacientes[pacientes.length - 1].id, patologia);
      navigate("/Profesional");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribi el nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="patologia"
          placeholder="Escribi la patologia"
          onChange={(e) => setPatologia(e.target.value)}
        />
        <button type="submit">Crear Paciente</button>
      </form>
    </>
  );
}

export default AddPacient;
