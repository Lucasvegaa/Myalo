import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProfilePaciente from "./pages/ProfilePaciente";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./supabase/client";
import Profesional from "./pages/Profesional";
import AddPacientPage from "./pages/AddPacientPage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addPacient" element={<AddPacientPage />} />
        <Route path="/profesional" element={<Profesional/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/paciente/:pacientId" element={<ProfilePaciente/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
