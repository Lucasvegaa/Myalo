function PacientData({ paciente }) {
  return (
    <>
      <h2>Datos del paciente</h2>
      <div>Nombre: {paciente ? paciente[0].nombre : ""}</div>
    </>
  )
}

export default PacientData;
