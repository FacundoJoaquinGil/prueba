import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"


const Home = () => {

   const alumno={nombre:"Joaquin", edad:"23", legajo:"55699", numtel:"3816566750", deportefavorito:"basquet y futbol", hobbie:"jugar cs con mis amigos de la facultad" }

  return (
   <>
       <Header/> 
       <Main alumno={alumno}/>
       <Footer/>     
   </>
  )
}

export default Home

 