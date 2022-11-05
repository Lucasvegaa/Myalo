import { useState } from "react";
import { createPaciente} from "../supabase/api";
import { useNavigate } from "react-router-dom";


function AddPacient() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      
      await createPaciente(null,name);
      navigate ("/Profesional");
      
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
        <button type="submit">Crear Paciente</button>
      </form>
    </>
  );
}

export default AddPacient;
