import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PacientsList } from "../components/PacientsList";
import { getPacientes } from "../supabase/api";

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

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const {data:{user}} = await supabase.auth.getUser()
  //     console.log (user);
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   }
  //   getUsers();
    
  // }, [navigate]);
  
  // const signOut = async () => {
  //   await supabase.auth.signOut();
  // }
  
  const HandleAddPacient = () => {
    navigate("/addPacient");
  }
  return (
    <>
      <h1>Profesional</h1>
      {/* <button onClick={e =>{signOut()}}>Logout</button> */}
      <button onClick = {HandleAddPacient} > Agregar Paciente</button>
      <PacientsList pacients= {pacients} setPacients= {setPacients}/>

    </>

  );
}

export default Profesional;
