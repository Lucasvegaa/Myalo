
import { createSesionTerapia } from "../supabase/api";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const AddSessionForm = () => {
  const navigate = useNavigate();
  const [motivo, setMotivo] = useState("");
  const [evaluacion, setEvaluacion] = useState("");
  let { pacientId } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //await createSesionTerapia("1", pacientId, motivo, evaluacion); 
      
      await createSesionTerapia("1", pacientId, motivo, evaluacion);     
      navigate(`/paciente/${pacientId}`);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="Motivo" placeholder="Motivo Sesion " onChange={(e) => setMotivo(e.target.value)} />
      <input type="text" name="Evaluacion" placeholder="Evaluacion Sesion" onChange={(e) => setEvaluacion(e.target.value)}/>
      <button type='submit'>Guardar</button>
    </form>
    </>
  )
}

export default AddSessionForm