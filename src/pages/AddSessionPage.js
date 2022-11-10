import AddSessionForm from '../components/AddSessionForm'
import NavBar from "../components/NavBar"
const addSesionPage = () => {
  return (
    <>
    <NavBar/>
    <h1 className="TitlePage">Agregar Sesion</h1>
    <AddSessionForm />
    
    </>
  )
}

export default addSesionPage