import { useState } from "react";
import { getPacientes } from "../supabase/api";
import { supabase } from "../supabase/client";



function TaskForm({setUsers}) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      
      await supabase.from('pacientes').insert({nombre: taskName})
      
      setUsers(await getPacientes())
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          placeholder="Escribi el nombre de una tarea"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}

export default TaskForm;
