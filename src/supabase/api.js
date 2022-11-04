import supabase from "./client";

export const getPacientes = async () => {
  const { data: result } = await supabase.from("pacientes").select("*");
  return result
};