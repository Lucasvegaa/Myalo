import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { GetPacientes } from "../components/GetPacientes";

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const {data:{user}} = await supabase.auth.getUser()
      console.log (user);
      if (!user) {
        navigate("/login");
      }
    }
    getUsers();
    
  }, [navigate]);
  
  const signOut = async () => {
    await supabase.auth.signOut();
  }

  return (
    <>
      <div>Home</div>
      <button onClick={e =>{signOut()}}>Logout</button>
      <TaskForm/>
      <GetPacientes users= {users} setUsers= {setUsers}/>
    </>
  );
}

export default Home;
