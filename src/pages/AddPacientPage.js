import AddPacient from "../components/AddPacientForm"
import NavBar from "../components/NavBar"
const AddPacientPage = () => {
  return (
    <>
    <NavBar />

    <h1 className="TitlePage">Crear Nuevo Paciente</h1>
    <AddPacient/>
    </>
  )
}

export default AddPacientPage