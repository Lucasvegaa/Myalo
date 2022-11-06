// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import {createHistoriaClinica,createPaciente, getPacientesOrderById} from '../supabase/api';
// import {useNavigate} from 'react-router-dom';
// import { useState } from "react";

function PacientForm() {
  // const navigate = useNavigate();
  // const [nombre, setNombre] = useState("");
  // const [apellido, setApellido] = useState("");
  // const [email, setEmail] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [fechaNacimiento, setFechaNacimiento] = useState("");
  // const [name, setName] = useState("");
  // //const [patologia, setPatologia] = useState("");

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await createPaciente("1", nombre, null , apellido, email, direccion);
  //     const pacientes = await getPacientesOrderById("1");      
  //     await createHistoriaClinica(pacientes[pacientes.length - 1].id,   "patologia");
  //     navigate("/Profesional");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  return (
    // <Form onSubmit={handleSubmit} className='m-5'>
    //   <Row className="mb-3">
    //     <Form.Group  as={Col} controlId="formGridNombre">
    //       <Form.Label>Nombre</Form.Label>
    //       <Form.Control  type="text" placeholder="Ingrese nombre" onChange={(e) => setNombre(e.target.value)}/>
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridApellido">
    //       <Form.Label>Apellido</Form.Label>
    //       <Form.Control type="text" placeholder="Ingrese apellido" onChange={(e) => setApellido(e.target.value)} />
    //     </Form.Group>
    //   </Row>
    //   <Form.Group as={Col} controlId="formGridEmail">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control type="email" placeholder="Ingrese email" onChange={(e) => setEmail(e.target.value)} />
    //     </Form.Group>

    //   <Form.Group className="mb-3" controlId="formGridAddress1">
    //     <Form.Label>Direccion</Form.Label>
    //     <Form.Control placeholder="1234 Main St" onChange={(e) => setEmail(e.target.value)}/>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formGridDateBirth">
    //     <Form.Label>Fecha de Nacimiento</Form.Label>
    //     <Form.Control type= "date"  />
    //   </Form.Group>


    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    <div></div>
    );
}

export default PacientForm;