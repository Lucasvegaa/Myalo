import Container from "react-bootstrap/esm/Container";

function ViewerHC({ historiaClinica }) {
  
  return (
    <>
      <Container className="mb-5 ">
        <h2> Historia Clinica </h2>
      </Container>
      <Container className="h4 text-start mb-5 FormGroupPacient">
        <Container className="mb-4 wrapperPacientData">
          <div className="headPacientData">Patologia:{" "}</div>
          {historiaClinica && historiaClinica.length > 0
            ? historiaClinica[0].patologia
            : ""}{" "}
        </Container>
        <Container className="mb-4 wrapperPacientData">
          <div className="headPacientData">Antecedentes:{" "}</div>
          {historiaClinica && historiaClinica.length > 0
            ? historiaClinica[0].antecedentes_familiares
            : ""}{" "}
        </Container>
        <Container className="mb-4 wrapperPacientData">
          <div className="headPacientData">Psicoanamnesis:{" "}</div>
          {historiaClinica && historiaClinica.length > 0
            ? historiaClinica[0].psicoanamnesis
            : ""}{" "}
        </Container>
      </Container>
    </>
  );
}

export default ViewerHC;
