import NavBar from "../components/NavBar"
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
      <>
        <NavBar/>
        <Image src="../../Logotipo_Color_Vertical.png" width={400} fluid />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </>
    
  )
}

export default Home