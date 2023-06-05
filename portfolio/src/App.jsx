import About from "./pages/About";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/components/Maincontacto" element={<Contacto/>} />
          <Route path="/components/Mainabout" element={<About/>} />
          
    </Routes>
  </BrowserRouter>
  )
}

export default App
