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
            <div onClick={() => { handleClick(user.id);}} >
              Id: {user.id} - Nombre: {user.nombre}
            </div>
            <button onClick={() => {handleDelete(user.id);}} > Eliminar</button>
          </div>
        ))}
    </>
  );
};

export default PacientsList;
