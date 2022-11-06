function SessionList({ sesiones, setSesiones }) {
  
  const handleClick = (sesionId) => {
      console.log("click en sesion", sesionId);
  }
  return (
    <>
      <h2>Sesiones de Terapia</h2>
      <div>
        {sesiones
          ? sesiones.map((sesion) => (
              <div key={sesion.id}>
                {sesion.id} {sesion.motivo} <button onClick={() => {handleClick(sesion.id)}}>Ver Sesion</button>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}

export default SessionList;
