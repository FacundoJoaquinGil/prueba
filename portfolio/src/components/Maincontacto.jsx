import { useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Contacto = () => {
  

  const consultas = [
    {id: 1, nombre: "Joaquin", apellido: "Gil", email: "facundojoagl@gmail.com", telefono: "3816566750", descripcion: "Quiero crear una aplicacion"},
  ]
  
  


  const deleteConsulta = (id) => {
    const resultado = pedidos.filter(pedido=> pedido.id !== id) 
    setPedidos(resultado)
  }

  const handlersubmit = (e)=>{
    e.preventDefault()
    setPedidos([...pedidos, {id, nombre, apellido, email, descripcion, telefono}]) 
    alert("Nos comunicaremos contigo a la brevedad")
    setId(id + 1)
    e.target.reset
  }
  
  const [nombre, setNombre] = useState ("")
  const [apellido, setApellido] = useState ("")
  const [email, setEmail] = useState ("")
  const [telefono, setTelefono] = useState("")
  const [pedidos, setPedidos] = useState (consultas) 
  const [descripcion, setDescripcion] = useState("")
  const [id, setId] = useState(1)



  return (
                  <body className="body_form">
                  <div className='nav2'>
                      <nav className="navbar navbar-light bg-light"></nav>
                  </div>
                  <div className="form2">
                        <h1 className='h1_form'>Contactame:</h1>
                        <form  className="form1" onSubmit={handlersubmit}>
                               
                                
                               
                                <label htmlFor="name" className="label_form">Nombre:</label>
                                <input type="text" onChange={(e)=> setNombre(e.target.value)} required placeholder="Ingrese su nombre"/><br />
                                <label htmlFor="Ape" className="label_form">Apellido:</label>
                                <input type="text" onChange={(e)=> setApellido(e.target.value)} placeholder="Ingrese su Apellido"/><br />
                                <label htmlFor="Mail" className="label_form">Email:</label>
                                <input type="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Ingrese su Email"/><br />
                                <label htmlFor="Tel" className="label_form">Telefono:</label>
                                <input type="text" onChange={(e)=> setTelefono(e.target.value)} required placeholder="Ingrese su numero"/><br />
                                <label htmlFor="descr" className="label_form">Descripcion</label>
                                <input type="text"onChange={(e)=> setDescripcion(e.target.value)}required /> <br />
                                <Button variant="dark" type="submit">Enviar</Button>
                        </form> 
                        <br />
                        <br />

                        <Table striped bordered hover variant="dark">
                                  <thead>
                                          <tr>
                                                <th>Id</th>
                                                <th>Nombre </th>
                                                <th>Apellido </th>
                                                <th>Email</th>
                                                <th>Descripcion</th>
                                                <th>Telefono</th>
                                          </tr>
                                  </thead>

                                  <tbody>
                                          {pedidos.map(pedido=>
                                            <tr key={pedido.id}>
                                              <td>{pedido.id}</td>
                                              <td>{pedido.nombre}</td>
                                              <td>{pedido.apellido}</td>
                                              <td>{pedido.email}</td>
                                              <td>{pedido.descripcion}</td>
                                              <td>{pedido.telefono}</td>
                                              <td>
                                                  <Button variant="danger" onClick={()=>deleteConsulta(pedido.id)}>Eliminar</Button>
                                              </td>


                                            </tr>
                                            
                                            )}
                                  </tbody>
                        </Table>
                         
                  </div>  



                  </body>

  
  )
}

export default Contacto