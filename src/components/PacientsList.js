import { useNavigate } from "react-router-dom";
import { deletePaciente, getPacientes } from "../supabase/api";

export const PacientsList = ({ pacients, setPacients }) => {
  const navigate = useNavigate();

  const handleClick = (pacientId) => {
    navigate(`/paciente/${pacientId}`);
  };
  
  const handleDelete = async (id) => {
    try {
      await deletePaciente(id);
      setPacients(await getPacientes());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {pacients &&
        pacients?.map((pacient) => (
          <div key={pacient.id}> 
            <div  >
              Id: {pacient.id} - Nombre: {pacient.nombre}    
              <button onClick={() => { handleClick(pacient.id);}}> Ver perfil </button>
              <button onClick={() => {handleDelete(pacient.id);}} > Eliminar</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default PacientsList;
