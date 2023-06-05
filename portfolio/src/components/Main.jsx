

const Main = ({alumno}) => {
  return (
    <div className="div_main">
                <div className="card_main">
                      <div className="card text-center">
                        <div className="card-header">
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <h1 className="card-title">{alumno.nombre} Gil</h1>
                          <p className="card-text">Soy estudiante de programacion en la UTN tengo {alumno.edad}, mi numero de telefono es {alumno.numtel}. Aprendi lenguajes como C#, Javascrip y SQL.</p>
                          
                          
                        </div>
                      </div>
                </div>
    </div> 

 
  )
}

export default Main