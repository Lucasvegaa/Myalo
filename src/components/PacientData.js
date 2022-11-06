import { useNavigate } from "react-router-dom";
 
function PacientData({ pacient }) {
  const navigate = useNavigate();
  


  // const pacientNotNull = (pacient) => {
  //   if(pacient)
  //   {
  //     const [nombre, apellido, dni, email, direccion, fechaNacimiento, id] = pacient;
  //     return (
  //       <div key={"1"} >Nombre: {nombre }</div>
        
        
        
  //       )
  //     }     
  // }


  return (
    <>
      <h2>Datos del paciente</h2>
      {/* <div key={"2"}>{pacientNotNull(pacient)}</div> */}
      {/* {pacientNotNull(pacient)} */}
      <div>Id : {pacient ? pacient[0].id : ""}</div>
      <div>Nombre: {pacient ? pacient[0].nombre : ""}</div>
      <div>Apellido : {pacient ? pacient[0].apellido : ""}</div>
      <div>DNI : {pacient ? pacient[0].dni : ""}</div>
      <div>Email : {pacient ? pacient[0].email : ""}</div>
      <div>Direccion : {pacient ? pacient[0].direccion : ""}</div>
      <div>Fecha de nacimiento : {pacient ? pacient[0].fecha_nacimiento : ""}</div>

    </>
  )
}

export default PacientData;
