import { useState, useEffect } from "react";
import supabase from "../supabase/client";

const getPacientes = async () => {
  const { data: result } = await supabase.from("pacientes").select("*");
  return result
};

export function GetPacientes({users, setUsers}) {
  
  useEffect(() => {
    const result =  getPacientes();
    setUsers(result);
  }, []);



  return (
    <>
      {users && users?.map((user) => (
        <div key={user.id}>
          {user.nombre} {user.id}
        </div>
      ))}
    </>
  );
}

export default GetPacientes;
