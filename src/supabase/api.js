import supabase from "./client";

export const getPacientes = async () => {
  const { data: result } = await supabase.from("pacientes").select("*");
  return result;
};

export const getProfesional = async (user_id) => {
  const response = await supabase
    .from("profesionales")
    .select("*")
    .eq("user", user_id);
  return response.data;
};

export const getPacientesByProfesional_id = async (profesional_id) => {
  const response = await supabase
    .from("pacientes")
    .select("*")
    .eq("profesional_id", profesional_id);
  return response.data;
};

export const getPaciente = async (paciente_id) => {
  const response = await supabase
    .from("pacientes")
    .select("*")
    .eq("id", paciente_id);
  return response.data;
};

export const createPaciente = async (
  profesional_id,
  nombre,
  dni,
  email,
  direccion,
  fechaNac,
  apellido
) => {
  await supabase
    .from("pacientes")
    .insert([
      {
        profesional_id: profesional_id,
        nombre: nombre,
        dni: dni,
        email: email,
        direccion: direccion,
        fechaNac: fechaNac,
        apellido: apellido
      },
    ]);
};

export const getHistoriaClinica = async (paciente_id) => {
  const response = await supabase
    .from("historia_clinica")
    .select("*")
    .eq("paciente_id", paciente_id);
  return response.data;
};

export const createHistoriaClinica = async (
  paciente_id,
  patologia,
  observaciones,
  psicoanamnesis,
  relacion_padres,
  relacion_hermanos,
  vida_social,
  vida_laboral,
  antecedentes_familiares,
  personalidad
) => {
  await supabase
    .from("historia_clinica")
    .insert([
      {
        paciente_id: paciente_id,
        patologia: patologia,
        observaciones: observaciones,
        psicoanamnesis: psicoanamnesis,
        relacion_padres: relacion_padres,
        relacion_hermanos: relacion_hermanos,
        vida_social: vida_social,
        vida_laboral: vida_laboral,
        antecedentes_familiares: antecedentes_familiares,
        personalidad: personalidad,
      },
    ]);
};

// export const getSesionTerapia = async (profesional_id, paciente_id) => {
//   const response = await supabase
//     .from("sesion_terapia")
//     .select("*")
//     .eq("profesional_id", profesional_id)
//     .eq("paciente_id", paciente_id);
//   return response.data;
// };

export const getSesionTerapia = async ( paciente_id) => { //harcodeado
  const response = await supabase
    .from("sesion_terapia")
    .select("*")
    .eq("profesional_id", '1') //harcodeado
    .eq("paciente_id", paciente_id);
  return response.data;
};

export const createSesionTerapia = async (
  profesional_id,
  paciente_id,
  motivo,
  evaluacion
) => {
  await supabase
    .from("sesion_terapia")
    .insert([
      {
        profesional_id: profesional_id,
        paciente_id: paciente_id,
        motivo: motivo,
        evaluacion: evaluacion,
      },
    ]);
};

export const deletePaciente = async (paciente_id) => {
  await supabase.from("pacientes").delete().eq("id", paciente_id);
}

export const getPacientesOrderById = async (profesional_id) => {
  const response = await supabase.from("pacientes").select("*").eq('profesional_id', profesional_id).order('id', { ascending: true });
  return response.data;
};