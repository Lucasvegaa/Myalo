import NavBar from "../components/NavBar";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  return (
    <>
      <WrappingHome>
        <NavBar />
        <Container>
          <Image src="../../Logotipo_Blanco_Vertical.png" width={400} fluid className="my-5"/>
          <Texto>
            Esta plataforma tiene como fin brindar acompañamiento a pacientes con
            patologías de estrés, ansiedad, ataques de pánico y depresión.
            Además, será una herramienta para el profesional en donde podrá
            reflejar anotaciones de las sesiones, así como también agendar
            turnos para sus pacientes. Es importante destacar que cuenta con un chatbot
            será de utilidad en casos de emergencia, cuando una persona no tenga
            un profesional cerca, con el objetivo de disminuir sintomatologías
            de cualquiera de los padecimientos mencionados. Los pacientes y
            personas que utilicen el sistema podrán acceder de manera gratuita.
          </Texto>
        </Container>
      </WrappingHome>
    </>
  );
};
const WrappingHome = styled.div`
  /* background-image: url("https://tntznoptdkklgiuzcfzx.supabase.co/storage/v1/object/public/img/publicacion-facebook-salud-mental-plana_23-2149044577.webp"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
const Texto = styled.p`
  //margin-top: 4rem;
  font-size: 1.5rem;
  font-weight: 500;
`;
export default Home;
