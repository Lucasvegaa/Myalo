import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { PacientsList } from "../components/PacientsList";
import { getPacientes } from "../supabase/api";

function Home() {
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
  
  const signOut = async () => {
    await supabase.auth.signOut();
  }

  return (
    <>
      <div>Home</div>
      <button onClick={e =>{signOut()}}>Logout</button>
      <TaskForm setUsers={setPacients}/>
      <PacientsList users= {pacients}/>
    </>
  );
}

export default Home;
