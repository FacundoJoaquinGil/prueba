import Joaquin from "../assets/perfil.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="main_header">
            <h1>Facundo Joaquin Gil</h1>
            <img src={Joaquin} alt="" className="imagen_header"/>
            <div className='nav'>
                  <nav className="navbar">
                  <Link to="/components/Maincontacto  " className='boton_contacto'>Contacto</Link>
                  <Link to="/" className='boton_contacto'>volver a inicio</Link>
                  <Link to="/components/Mainabout" className='boton_contacto'>Sobre Mi</Link>
                  </nav>
              </div>

    </div>
  )
}

export default Header