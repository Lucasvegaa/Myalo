import { useState } from "react";
import { supabase } from "../supabase/client";



function TaskForm({setUsers}) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      
      const result = await supabase.from('pacientes').insert({nombre: taskName})
      const pacients = await supabase.from('pacientes').select('*')
      setUsers(pacients.data)
      console.log(result);
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
