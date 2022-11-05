
function ViewerHC({historiaClinica}) {
  
  
  return (
    <>
    <h2>  Historia Clinica </h2>
    <div> Patologia: {(historiaClinica && (historiaClinica.length>0))  ? historiaClinica[0].patologia : ""} </div>
    {/* <div> Observaciones: {historiaClinica ? historiaClinica[0].observaciones : ""} </div>
    <div> Psicoanamnesis: {historiaClinica  ? historiaClinica[0].psicoanamnesis : ""} </div> */}
    </>
  )
}

export default ViewerHC