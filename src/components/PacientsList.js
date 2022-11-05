import { useNavigate } from "react-router-dom";
import { deletePaciente, getPacientes } from "../supabase/api";

export const PacientsList = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/paciente/${id}`);
  };
  
  const handleDelete = async (id) => {
    try {
      await deletePaciente(id);
      setUsers(await getPacientes());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {users &&
        users?.map((user) => (
          <div key={user.id}>
            <div  >
              Id: {user.id} - Nombre: {user.nombre}    
              <button onClick={() => { handleClick(user.id);}}> Ver perfil </button>
              <button onClick={() => {handleDelete(user.id);}} > Eliminar</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default PacientsList;
