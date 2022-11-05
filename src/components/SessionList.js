
function SessionList({sesiones, setSesiones}) {
  return (
    <>
      <h2>Sesiones de Terapia</h2>
      <div>
        { sesiones ? sesiones.map((sesion) => (<div key={sesion.id}>{sesion.motivo} <button>Ver Sesion</button></div>)) : "" }
        <br/>
        
        </div>
    </>
  )
}

export default SessionList