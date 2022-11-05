function PacientData({ pacient }) {

  return (
    <>
      <h2>Datos del paciente</h2>
      <div>Nombre: {pacient ? pacient[0].nombre : ""}</div>
    </>
  )
}

export default PacientData;
